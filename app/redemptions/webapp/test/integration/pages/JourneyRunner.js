sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"redemptions/test/integration/pages/RedemptionsList.gen",
	"redemptions/test/integration/pages/RedemptionsObjectPage.gen"
], function (JourneyRunner, RedemptionsListGenerated, RedemptionsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('redemptions') + '/test/flp.html#app-preview',
        pages: {
			onTheRedemptionsListGenerated: RedemptionsListGenerated,
			onTheRedemptionsObjectPageGenerated: RedemptionsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

