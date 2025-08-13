sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var oProductModel = new JSONModel("model/ProductModel.json");
            this.getView().setModel(oProductModel);

            var oInfoModel = new JSONModel({
                EID: "",
                Enabled: false,
                Address: {
                    Street: "River Street",
                    City: "Mandaue City",
                    Zip: "6014",
                    Country: "Philippines"
                },
                SalesAmount: 1000,
                CurrencyCode: "USD"
            });
            this.getView().setModel(oInfoModel, "info");
        },


        onItemPress: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext();
            var oData = oContext.getObject();

            var oDetailModel = new JSONModel(oData);
            this.getView().setModel(oDetailModel, "productDetail");
        }
    });
});
