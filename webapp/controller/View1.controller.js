sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("Reviewer.Reviewer.controller.View1", {

		onInit: function() {
		
			/*	//Aggregation Binding 
				var oModel = new sap.ui.model.json.JSONModel();
				var oDataModel = new sap.ui.model.json.JSONModel();
				this.getView().setModel(oDataModel, "oDataModel");
				oModel.loadData("model/reviewerModel.json", null, false);

				//test the demo server
				var demoModel = new sap.ui.model.json.JSONModel();
				this.getView().setModel(demoModel, "demoModel");
				var url = "/ES5/BusinessPartnerSet";
				demoModel.loadData(url, "GET", false, false);

				//test the DEC system
				//	var oDataModel = new sap.ui.model.json.JSONModel();
				this.getView().setModel(oDataModel, "oDataModel");
				var url1 = "/DEC/sap/opu/odata/sap/ZST_TEST_USER_SRV/UnameSet";
				oDataModel.loadData(url1, "GET", false, false);

				//test the xsjs service
				var xsjsModel = new sap.ui.model.json.JSONModel();
				var url2 = "/XSJS/getAllDetails.xsjs";
				xsjsModel.loadData(url2, "GET", false, false);*/

			var demoModel = new sap.ui.model.json.JSONModel();
			var decModel = new sap.ui.model.json.JSONModel();
			var xsjsModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(demoModel, "demoModel");
			this.getView().setModel(decModel, "decModel");
			this.getView().setModel(xsjsModel, "xsjsModel");
		},

		onPress: function() {
			this.getDemoDetails();
		},

		getDemoDetails: function() {
			var oHelloPanelModel = new sap.ui.model.json.JSONModel();
			var xsjsurl = "/XSJS/getAllDetails.xsjs";
			oHelloPanelModel.loadData(xsjsurl, "GET",false,false);
			this.getView().setModel(oHelloPanelModel, "oHelloPanelModel");
			oHelloPanelModel.refresh();
			// getting data from the Demo System
			/*	var that = this;
				var demoModel = this.getView().getModel("demoModel");
				var demourl = "/ES5/BusinessPartnerSet";
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.loadData(demourl, true, "GET", false, false);

				// getting data from DEC System
				var decModel = this.getView().getModel("decModel");
				var oModel1 = new sap.ui.model.json.JSONModel();
				var decurl = "/DEC/UNameSet";
				oModel1.loadData(decurl, "GET", false, false);*/

			//getting data from XSJS service

			/*var xsjsModel = this.getView().getModel("xsjsModel");
			var oModel2 = new sap.ui.model.json.JSONModel();
			var xsjsurl = "/XSJS/getAllDetails.xsjs";
			oModel2.loadData(xsjsurl, "GET", false, false);*/
		}
	});
});