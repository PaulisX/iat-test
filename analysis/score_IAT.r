library(dplyr)
library(tidyr)

score_IAT <- function(data,
                             block_name      = "blockName",
                             trial_blocks    = c("B3","B4","B6","B7"),
                             session_id      = "sessionId",
                             trial_latency   = "trial_latency",
                             trial_error     = "trial_error",
                             penalty         = 600,
                             fast_flag_cut   = 300,   # for participant flag
                             fast_remove_cut = 400,   # for trial removal
                             slow_remove_cut = 10000, # for trial removal
                             fast_prop_limit = 0.10) {
  
  

  # Turn into symbols for dplyr
  block_sym   <- rlang::sym(block_name)
  id_sym      <- rlang::sym(session_id)
  lat_sym     <- rlang::sym(trial_latency)
  err_sym     <- rlang::sym(trial_error)
  id_col <- rlang::as_name(id_sym)
  
  # 1. Keep only scoring blocks
  d <- data %>%
    filter(!!block_sym %in% trial_blocks)
  
  # 1.1 remove negative and too slow
  d <- d %>%
    filter(!!lat_sym > 0, !!lat_sym < slow_remove_cut)

  # 2. Fast-trial flag per session × block
  fast_flag <- d %>%
    group_by(!!id_sym, !!block_sym) %>%
    summarise(
      fast_prop_block = mean(!!lat_sym < fast_flag_cut, na.rm = TRUE),
      .groups = "drop"
    ) %>%
    group_by(!!id_sym) %>%
    summarise(
      fast_prop_max = max(fast_prop_block),          # worst block
      fast_excl     = fast_prop_max > fast_prop_limit,
      .groups = "drop"
    )
  
  # 4. Remove extreme trials: <400 ms
  d_trim <- d %>%
    filter(!!lat_sym >= fast_remove_cut)

    
    
  # 3. Apply error penalty
  mean_correct <- d_trim %>%
    group_by(!!id_sym, !!block_sym) %>%
    summarise(
      mean_correct = mean(ifelse(!!err_sym == 0, !!lat_sym, NA), na.rm = TRUE),
      .groups = "drop"
    )

  d_trim <- d_trim %>%
    left_join(mean_correct, by = c(id_col, block_name))

  d_trim <- d_trim %>%
    mutate(
      rt_adj = ifelse(!!err_sym == 1,
                      mean_correct + penalty,
                      !!lat_sym)
    )

  # 5. Compute block means
  block_means <- d_trim %>%
    group_by(!!id_sym, !!block_sym) %>%
    summarise(
      mean_rt = mean(rt_adj),
      .groups = "drop"
    ) %>%
    pivot_wider(
      names_from = !!block_sym,
      values_from = mean_rt,
      names_prefix = "M_"
    )

  # 6. Compute SDs for block pairs (B3+B6) and (B4+B7)
  sd_pairs <- d_trim %>%
    mutate(pair = case_when(
      !!block_sym %in% c("B3","B6") ~ "pair1",
      !!block_sym %in% c("B4","B7") ~ "pair2"
    )) %>%
    group_by(!!id_sym, pair) %>%
    summarise(
      sd_pair = sd(rt_adj),
      .groups = "drop"
    ) %>%
    pivot_wider(
      names_from = pair,
      values_from = sd_pair,
      names_prefix = "SD_"
    )

    # 7. Compute D-score using exact 2003 formula
  
  final <- block_means %>%
    left_join(sd_pairs, by = id_col) %>%
    mutate(
      IAT1 = (M_B6 - M_B3) / SD_pair1,
      IAT2 = (M_B7 - M_B4) / SD_pair2,
      IAT = (IAT1 + IAT2) / 2
    ) %>%
    left_join(fast_flag, by = id_col)
  
  final
}