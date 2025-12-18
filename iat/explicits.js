define(['questAPI'], function (Quest) {
    //Note - this questionnaire is used for all demo studies.  Don't make 
    // weight task specific changes to it.
    var API = new Quest();
    var isTouch = API.getGlobal().isTouch;
    const pageText =
        `<div style="margin: 15px;">
            <b>Cispersona</b> - cilvēks, kura dzimtes identitāte sakrīt ar dzimšanas brīdī noteikto dzimumu.<br>
            <b>Transpersona</b> - cilvēks, kura dzimtes identitāte atšķiras no dzimšanas brīdī noteiktā dzimuma.<br>
            <b>Nebināra persona</b> - cilvēks, kurš neidentificējas kā vīrietis vai sieviete. Tas iekļauj dažādas identitātes (piemēram, personas, kuru identitāte variē starp dzimtēm, „bez dzimtes” personas u.c.)
        </div`;

    /**
    * Settings
    */
    API.addSettings('logger', { pulse: 3 });

    /**
    * Page prototype
    */
    API.addPagesSet('basicPage', {
        noSubmit: false, //Change to true if you don't want to show the submit button.
        v1style: 2,
        decline: false,
        declineText: isTouch ? 'Decline' : 'Decline to Answer',
        autoFocus: true,
        header: 'Sociāldemogrāfiskie dati',
        text: pageText,
        numbered: false,
        progressBar: isTouch ? 'Page <%= pagesMeta.number %> out of 2' : 'Page <%= pagesMeta.number %> out of 2'
    });

    /**
    * Question prototypes
    */

    API.addQuestionsSet('basicQ', {
        decline: false,
        required: true,
        errorMsg: {
            required: isTouch ? "Lūdzu aizpildiet šo lauku!" :
                "Lūdzu aizpildiet šo lauku!"
        },
        autoSubmit: true,
        numericValues: true
    });

    API.addQuestionsSet('singleChoice', {
        inherit: 'basicQ',
        type: 'selectOne',
        help: '<%= pagesMeta.number < 10 %>',
    });

    API.addQuestionsSet('text', {
        inherit: 'basicQ',
        type: 'text',
        noSubmit: false
    });

    API.addQuestionsSet('singleChoicedrop', {
        inherit: 'basicQ',
        autoSubmit: false,
        type: 'dropdown'
    });

    API.addQuestionsSet('multiChoice', {
        inherit: 'basicQ',
        type: 'selectMulti'
    });

    API.addQuestionsSet('boolean', {
        inherit: 'basicQ',
        type: 'selectOne',
        buttons: true,
        answers: [
            { text: 'Yes', value: 1 },
            { text: 'No', value: 0 }
        ]
    });
    API.addQuestionsSet('number', {
        inherit: 'basicQ',
        type: 'textNumber',
    });
    /**
    * Actual questions
    */
    API.addQuestionsSet('age', {
        inherit: 'number',
        name: 'age',
        stem: "Jūsu vecums (ievadīt tikai skaitli).",
        min: 1,
        max: 100,
        required: true,
        errorMsg: {
            min: "Atļautas tikai vērtības no 1 - 100.",
            max: "Atļautas tikai vērtības no 1 - 100.",
            number: "Lūdzu ievadiet tikai skaitli."
        }
    });
    API.addQuestionsSet('gender', {
        inherit: 'singleChoice',
        style: 'multiButtons',
        name: 'birthmonth',
        stem: "Jūsu dzimtes identitāte.",
        answers: [
            { text: 'Cis-sieviete', value: 1 },
            { text: 'Cis-vīrietis', value: 2 },
            { text: 'Trans-sieviete', value: 3 },
            { text: 'Trans-vīrietis', value: 4 },
            { text: 'Nebināra persona', value: 5 },
            { text: 'Cits', value: 6 },
        ]
    });

    API.addQuestionsSet('knowsTransperson', {
        inherit: 'singleChoice',
        name: 'knowsTransperson',
        stem: "Vai Jūs personīgi pazīstat kādu transpersonu vai nebināru personu?",
        answers: [
            { text: 'Jā', value: 1 },
            { text: 'Nē', value: 2 }
        ]
    });
    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [{ inherit: 'age' }, { inherit: 'gender' }, { inherit: 'knowsTransperson' }]
        }
    ]);

    return API.script;
});