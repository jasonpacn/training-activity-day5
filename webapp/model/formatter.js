sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], 
function (mobileLibrary, Currency) {
    "use strict";

    return {
        formatMail: function(sEid) {
            let oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            return "mailto:" + sEid + oBundle.getText("domain")
                + "?subject=" + encodeURIComponent(oBundle.getText("mailSubject", [sEid]))
                + "&body=" + encodeURIComponent(oBundle.getText("mailBody"));
        },
        formatStockValue: function(fUnitPrice, iStockLevel, sCurrCode) {
            let oCurrency = new Currency();
            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        }
    };
});