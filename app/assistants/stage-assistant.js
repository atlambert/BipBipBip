function StageAssistant() {
	/* this is the creator function for your stage assistant object */
}

StageAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the stage is first created */
	
	/* for a simple application, the stage assistant's only task is to push the scene, making it
	   visible */
	this.controller.pushScene("first");
	Mojo.Log.info("pushing first scene");
};

Bip = {};

function AppAssistant() {}

AppAssistant.prototype.handleLaunch = function(params) {   
	 if(params && params.alarm) {
	 	Bip.alarmSource = params.alarm;
	 }
	 Mojo.Log.info(params);
};