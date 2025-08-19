    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sapips/training/jsonbinding/model/formatter"
    ], (Controller, JSONModel, formatter) => {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            formatter: formatter,

            onInit() {
                let infoData = {
                    Eid: "jason.patigayon",
                    Enabled: true,
                    Address: {
                        Street: "Don Sergio Street",
                        City: "Mandaue",
                        Zip: "6014",
                        Country: "Philippines"
                    },
                    SalesAmount: "1000",
                    CurrencyCode: "PHP"
                };

                let infoModel = new JSONModel();
                infoModel.setData(infoData);
                this.getView().setModel(infoModel, "info");

                let sProductsPath = sap.ui.require.toUrl("sapips/training/jsonbinding/model/Products.json");
                let productListModel = new JSONModel(sProductsPath);
                this.getView().setModel(productListModel, "products");
            },

            onSelectProduct(oEvent) {
                let selectedItem = oEvent.getParameter("listItem");
                let context = selectedItem.getBindingContext("products");

                if (context) {
                    let path = context.getPath();
                    let form = this.byId("productDetailsPanel");
                    form.bindElement({
                        path: path,
                        model: "products"
                    });
                }
            }
        });
    });
