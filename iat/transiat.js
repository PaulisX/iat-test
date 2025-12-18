define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Transpersonas', //Will appear in the data.
            title : {
                media : {word : 'Transpersonas'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.transWords[0]},
                {word: global.transWords[1]},
                {word: global.transWords[2]},
                {word: global.transWords[3]}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Cispersonas', //Will appear in the data.
            title : {
                media : {word : 'Cispersonas'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.cisWords[0]},
                {word: global.cisWords[1]},
                {word: global.cisWords[2]},
                {word: global.cisWords[3]}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Slikti vārdi',
            title : {
                media : {word : 'Slikti vārdi'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Labi vārdi',
            title : {
                media : {word : 'Labi vārdi'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
        ,
        //Instructions text.
        // You can use the following variables and they will be replaced by
        // the name of the categories and the block's number variables:
        // leftCategory, rightCategory, leftAttribute and rightAttribute, blockNum, nBlocks.
        // Notice that this is HTML text.2
        instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Noliec kreisās rokas pirkstu uz <b>E</b> taustiņa vienumiem, kas pieder grupai <font color="#0000ff">leftAttribute.</font>' +
            '<br/>Noliec labās rokas pirkstu uz <b>I</b> taustiņa vienumiem, kas pieder grupai <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. ' +
            'Nospied otru taustiņu, lai turpinātu.<br/>' +
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/><br/></p>' +
            '<p align="center">Nospied <b>atstarpes taustiņu</b>, kad esi gatavs sākt.</font></p></div>',
        instAttributePracticeTouch: [
            '<div>',
            '<p align="center">',
            '<u>Part blockNum of nBlocks</u>',
            '</p>',
            '<p align="left" style="margin-left:5px">',
            '<br/>',
            'Noliec kreisās rokas pirkstu uz <b>kreisā</b> zaļā lauka priekš vienumiem, kas pieder grupai <font color="#0000ff">leftAttribute</font>.<br/>',
            'Noliec labās rokas pirkstu uz <b>labā</b> zaļā lauka priekš vienumiem, kas pieder grupai <font color="#0000ff">rightAttribute</font>.<br/>',
            'Vienumi parādīsies pa vienam.<br/>',
            '<br/>',
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. Pieskaries otrai pusei. <u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.',
            '</p>',
            '<p align="center">Pieskaries <b>apakšējam </b> zaļajam laukam, lai sāktu.</p>',
            '</div>'
        ].join('\n'),
 
        instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Noliec kreisās rokas pirkstu uz <b>E</b> taustiņa vienumiem, kas pieder grupai <font color="#336600">leftCategory</font>.' +
            '<br/>Noliec labās rokas pirkstu uz <b>I</b> taustiņa vienumiem, kas pieder grupai <font color="#336600">rightCategory</font>.<br/>' +
            'Vienumi parādīsies pa vienam.<br/><br/>' +
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. ' +
            'Nospied otru taustiņu, lai turpinātu.<br/>' +
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/><br/></p>' +
            '<p align="center">Nospied <b>atstarpes taustiņu</b>, kad esi gatavs sākt.</font></p></div>',
        instCategoriesPracticeTouch: [
            '<div>',
            '<p align="center">',
            '<u>Part blockNum of nBlocks</u>',
            '</p>',
            '<p align="left" style="margin-left:5px">',
            '<br/>',
            'Noliec kreisās rokas pirkstu uz <b>kreisā</b> zaļā lauka priekš vienumiem, kas pieder grupai <font color="#336600">leftCategory</font>.<br/>',
            'Noliec labās rokas pirkstu uz <b>labā</b> zaļā lauka priekš vienumiem, kas pieder grupai <font color="#336600">rightCategory</font>.<br/>',
            'Vienumi parādīsies pa vienam.<br/>',
            '<br/>',
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. Pieskaries otrai pusei. <u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.',
            '</p>',
            '<p align="center">Pieskaries <b>apakšējam </b> zaļajam laukam, lai sāktu.</p>',
            '</div>'
        ].join('\n'),
 
        instFirstCombined: '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Izmanto <b>E</b> taustiņu priekš <font color="#336600">leftCategory</font> un priekš <font color="#0000ff">leftAttribute</font>.<br/>' +
            'Izmanto <b>I</b> taustiņu priekš <font color="#336600">rightCategory</font> un priekš  <font color="#0000ff">rightAttribute</font>.<br/>' +
            'Katrs vienums pieder tikai vienai grupai.<br/><br/>' +
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. ' +
            'Nospied otru taustiņu, lai turpinātu.<br/>' +
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/><br/></p>' +
            '<p align="center">Nospied <b>atstarpes taustiņu</b>, kad esi gatavas sākt.</font></p></div>',
        instFirstCombinedTouch: [
            '<div>',
            '<p align="center">',
            '<u>Part blockNum of nBlocks</u>',
            '</p>',
            '<br/>',
            '<br/>',
            '<p align="left" style="margin-left:5px">',
            'Uzliec kreisās rokas pirkstu pāri <b>kreisajam</b> zaļajam laukam priekš <font color="#336600">leftCategory</font> vienumiem un priekš <font color="#0000ff">leftAttribute</font>.</br>',
            'Uzliec labās rokas pirkstu pāri <b>labajam</b> zaļajam laukam priekš <font color="#336600">rightCategory</font> vienumiem un priekš <font color="#0000ff">rightAttribute</font>.</br>',
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. Pieskaries otrai pusei. <u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.</br>',
            '</p>',
            '<p align="center">Pieskaries <b>apakšējam </b> zaļajam laukam, lai sāktu.</p>',
            '</div>'
        ].join('\n'),
 
        instSecondCombined: '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Šī daļa ir tāda pati kā iepriekšējā.<br/>' +
            'Izmanto <b>E</b> taustiņu priekš <font color="#336600">leftCategory</font> un priekš <font color="#0000ff">leftAttribute</font>.<br/>' +
            'Izmanto <b>I</b> taustiņu priekš <font color="#336600">rightCategory</font> un priekš <font color="#0000ff">rightAttribute</font>.<br/>' +
            'Katrs vienums pieder tikai vienai grupai.<br/><br/>' +
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/><br/></p>' +
            '<p align="center">Nospied <b>atstarpes taustiņu</b>, kad esi gatavs sākt.</font></p></div>',
        instSecondCombinedTouch: [
            '<div>',
            '<p align="center"><u>Part blockNum of nBlocks</u></p>',
            '<br/>',
            '<br/>',
 
            '<p align="left" style="margin-left:5px">',
            'Noliec kreisās rokas prikstu uz <b>kreisā</b> zaļā lauka priekš <font color="#336600">leftCategory</font> vienumiem un priekš <font color="#0000ff">leftAttribute</font>.<br/>',
            'Noliec labās rokas prikstu uz <b>labā</b> zaļā lauka priekš <font color="#336600">rightCategory</font> vienumiem un priekš <font color="#0000ff">rightAttribute</font>.<br/>',
            '<br/>',
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/>',
            '</p>',
            '<p align="center">Pieskaries <b>apakšējam </b> zaļajam laukam, lai sāktu.</p>',
            '</div>'
        ].join('\n'),
 
        instSwitchCategories: '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            '<b>Uzmanies, nosaukumi ir mainījuši vietas!</b><br/>' +
            'Izmanto kreisās rokas pirkstu uz <b>E</b> taustiņa priekš <font color="#336600">leftCategory</font>.<br/>' +
            'Izmanto labās rokas pirkstu uz <b>I</b> taustiņa priekš <font color="#336600">rightCategory</font>.<br/><br/>' +
            '<u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/><br/></p>' +
            '<p align="center">Nospied <b>atstarpes taustiņu</b>, kad esi gatavs sākt.</font></p></div>',
        instSwitchCategoriesTouch: [
            '<div>',
            '<p align="center">',
            '<u>Part blockNum of nBlocks</u>',
            '</p>',
            '<p align="left" style="margin-left:5px">',
            '<br/>',
            'Uzmanies, nosaukumi ir mainījuši vietas!<br/>',
            'Noliec kreisās rokas pirkstu uz <b>kreisā</b> zaļā laukuma priekš <font color="#336600">leftCategory</font> items.<br/>',
            'Noliec labās rokas pirkstu uz <b>labā</b> zaļā laukuma priekš <font color="#336600">rightCategory</font> items.<br/>',
            'Vienumi parādīsies pa vienam.',
            '<br/>',
            'Ja tu kļūdīsies, parādīsies sarkans <font color="#ff0000"><b>X</b></font>. Pieskaries otrai pusei. <u>Pildi testu cik ātri spēj</u> saglabājot precizitāti.<br/>',
            '</p>',
            '<p align="center">Touch the <b>lower </b> green area to start.</p>',
            '</div>'
        ].join('\n'),
 
        instThirdCombined: 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
        instFourthCombined: 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
        instThirdCombinedTouch: 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
        instFourthCombinedTouch: 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
    finalText : 'Nospied atsarpes taustiņu, lai turpinātu nākamo uzdevumu', 
            finalTouchText : 'Pieskaries apakšējam zaļajam laukam, lai turpinātu nākamo uzdevumu',
    });
});

