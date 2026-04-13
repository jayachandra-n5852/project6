sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("project6.controller.View1", {

        onPressItem: function (oEvent) {

            // 🔥 Get full data object
            var oContext = oEvent.getSource().getBindingContext();
            var oData = oContext.getObject();

            var sName = oData.name;
            var sSalary = oData.salary;

            MessageToast.show(sName + " Salary: ₹" + sSalary);
        }

    });
});