sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            
            var oProductModel = new JSONModel({
                Product: [
                    {
                        ProductID: 1,
                        ProductName: "Product 1",
                        SupplierID: 1,
                        CategoryID: 1,
                        QuantityPerUnit: "10 boxes x 20 bags",
                        UnitPrice: 18.0,
                        UnitsInStock: 39,
                        UnitsOnOrder: 0,
                        ReorderLevel: 10,
                        Discontinued: false
                    },
                    {
                        ProductID: 2,
                        ProductName: "Product 2",
                        SupplierID: 1,
                        CategoryID: 1,
                        QuantityPerUnit: "24 - 12 oz bottles",
                        UnitPrice: 19.0,
                        UnitsInStock: 17,
                        UnitsOnOrder: 40,
                        ReorderLevel: 25,
                        Discontinued: false
                    },
                    {
                        ProductID: 3,
                        ProductName: "Product 3",
                        SupplierID: 1,
                        CategoryID: 2,
                        QuantityPerUnit: "12 - 550 ml bottles",
                        UnitPrice: 10.0,
                        UnitsInStock: 13,
                        UnitsOnOrder: 70,
                        ReorderLevel: 25,
                        Discontinued: false
                    }
                ],
                CurrencyCode: "USD"
            });
            this.getView().setModel(oProductModel);

            var oInfoModel = new JSONModel({
                EID: "",
                Enabled: false,
                Address: {
                    Street: "123 Main St",
                    City: "Cebu City",
                    Zip: "6000",
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
