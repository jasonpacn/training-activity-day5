sap.ui.define([
    "sap/m/library"
], function (mobileLibrary) {
    "use strict";

    return {
        formatMail: function (sEID) {
            if (!sEID) {
                return "";
            }

            //var oBundle = sap.ui.getCore().getLibraryResourceBundle("sapips.training.jsonbinding.i18n.i18n");
            var oBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();
            var sSubject = oBundle.getText("mailSubject");
            var sBody = oBundle.getText("mailBody");
            var sDomain = oBundle.getText("domain");

            return "mailto:" + sEID + sDomain + "?subject=" + encodeURIComponent(sSubject) + "&body=" + encodeURIComponent(sBody);
        },

        formatStockValue: function (fUnitPrice, iUnitsInStock, sCurrency) {
            if (!fUnitPrice || !iUnitsInStock) {
                return "";
            }

            var fValue = fUnitPrice * iUnitsInStock;

            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: sCurrency || "USD"
            }).format(fValue);
        }
    };
});
