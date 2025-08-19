    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sapips/training/jsonbinding/model/formatter"
    ], (Controller, JSONModel, formatter) => {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            formatter: formatter,

            onInit() {
                const infoData = {
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

                const infoModel = new JSONModel();
                infoModel.setData(infoData);
                this.getView().setModel(infoModel, "info");

                const productListModel = new JSONModel("/model/Products.json");
                this.getView().setModel(productListModel, "products");
            },

            onSelectProduct(oEvent) {
                const list = oEvent.getSource();
                const selectedItem = list.getSelectedItem();
                const context = selectedItem.getBindingContext("products");

                const path = context.getPath();
                const form = this.byId("productDetailsPanel");
                form.bindElement({
                    path: path,
                    model: "products"
                });
            }
        });
    });
