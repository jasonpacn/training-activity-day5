sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var oInfoModel = new JSONModel({
                EID: "",
                Enabled: false,
                Address: {
                    Street: "Riverside Street",
                    City: "Mandaue City",
                    Zip: "6014",
                    Country: "Philippines"
                },
                SalesAmount: 1000,
                CurrencyCode: "USD"
            });
            this.getView().setModel(oInfoModel, "info");

            //var oProductModel = new JSONModel("models/Products.json");
            //this.getView().setModel(oProductModel, "products");
        },


        onItemPress: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("products");
            const sPath = oContext.getPath();
            const oProductDetailPanel = this.byId("productDetailsPanel");
            oProductDetailPanel.bindElement({ path: sPath, model: "products" });
            
            //var oData = oContext.getObject();
            //var oDetailModel = new JSONModel(oData);
            //this.getView().setModel(oDetailModel, "productDetail");

        }
    });
});
