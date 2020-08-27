(function() {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("ZVNSG17_QUIZ_DASHBOARD.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("ZVNSG17_QUIZ_DASHBOARD.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());