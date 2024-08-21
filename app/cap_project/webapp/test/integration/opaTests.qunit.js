sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/srija/capproject/test/integration/FirstJourney',
		'ust/srija/capproject/test/integration/pages/POsList',
		'ust/srija/capproject/test/integration/pages/POsObjectPage',
		'ust/srija/capproject/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/srija/capproject') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);