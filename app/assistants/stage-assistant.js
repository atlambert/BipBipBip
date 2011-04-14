Bip = {
	alarms: [],
	DB: null
};

function StageAssistant() {}

StageAssistant.prototype.setup = function() {
	var alarm = new Alarm(12,45);
	alarm.title = "Test Alarm 1";
	alarm.repeat = ["mon", "wed", "fri"];
	Bip.alarms.push(alarm);
	alarm = new Alarm(8,00);
	alarm.title = "Test Alarm 2";
	alarm.repeat = [];
	Bip.alarms.push(alarm);
	alarm = new Alarm(9,30);
	alarm.title = "Test Alarm 3";
	alarm.repeat = ["mon", "tue", "wed", "thu", "fri"];
	Bip.alarms.push(alarm);
	alarm = new Alarm(9,30);
	alarm.title = "Test Alarm 4";
	alarm.repeat = ["sun", "tue", "wed", "thu", "fri"];
	Bip.alarms.push(alarm);

//	this.controller.pushScene("alarmList");
	this.controller.pushScene("setupQuestions"); // temporary
};

function AppAssistant() {}

AppAssistant.prototype.handleLaunch = function(params) {   
	 if(params && params.alarm) {
	 	Bip.alarmSource = params.alarm;
	 }
};