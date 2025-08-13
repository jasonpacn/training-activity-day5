sap.ui.define([], function () {
    "use strict";

    return {
        formatMail: function (sEID) {
            return "mailto:" + sEID + "@company.com";
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
