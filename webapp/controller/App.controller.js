sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project6.controller.App", {

        onInit: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }

    });
});