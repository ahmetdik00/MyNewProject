sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"purchases/test/integration/pages/PurchasesList.gen",
	"purchases/test/integration/pages/PurchasesObjectPage.gen"
], function (JourneyRunner, PurchasesListGenerated, PurchasesObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('purchases') + '/test/flp.html#app-preview',
        pages: {
			onThePurchasesListGenerated: PurchasesListGenerated,
			onThePurchasesObjectPageGenerated: PurchasesObjectPageGenerated
        },
        async: true
    });

    return runner;
});

