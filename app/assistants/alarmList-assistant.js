function AlarmListAssistant() {
}

AlarmListAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */	
	this.controller.setupWidget("alarmList",
		{
			itemTemplate: "alarmList/listitem",
			listTemplate: "alarmList/listcontainer",
			swipeToDelete: true,
			reorderable: true,
			emptyTemplate:"alarmList/emptylist",
			formatters: {
				setDaysOfWeek: function(propertyValue, model) {
					if(model.repeat !== undefined) {
						if(model.repeat.length === 7) {
							model.daysOfWeekFormatted = "Daily";
						}
						else if(model.repeat.length === 0) {
							model.daysOfWeekFormatted = "Once";
						}
						else if(model.repeat.length === 5) {
							model.daysOfWeekFormatted = "Weekdays";
							var i;
							for(i = 0; i < model.repeat.length; i++) {
								if(model.repeat[i] === "sat" || model.repeat[i] === "sun") {
									model.daysOfWeekFormatted = model.repeat.join(' ');
									break;
								}
							}
							model.repeat.forEach(function() {
								
							});
						}
						else {
							model.daysOfWeekFormatted = model.repeat.join(' ');
						}
					}
				},
				setTime: function(propertyValue, model) {
					if(model.hour !== undefined && model.minute !== undefined) {
						var aOrP = '';
						var hour = model.hour;
						var minute = model.minute;
						
						if(Mojo.Format.using12HrTime()) {
							if(hour < 12 || hour === 24) {
								aOrP = "am";
							}
							else {
								aOrP = "pm";
							}
							hour = hour % 12;
							if(hour === 0) {
								hour += 12;
							}
						}
						if(minute < 10) {
							minute = '0'+minute;
						}
						
						model.timeFormatted = hour+':'+minute+' '+aOrP;
					}
				},
				setGameCount: function(propertyValue, model) {
					
				}
			}
		},
		{
			listTitle: $L("Alarms"),
			items : Bip.alarms
		}
	);
	this.controller.setupWidget("addAlarm",
		this.attributes = {
		},
		this.model = {
			label : "Add Alarm",
			disabled: false
		}
	);

	/* add event handlers to listen to events from widgets */
	Mojo.Event.listen(this.controller.get("addAlarm"), Mojo.Event.tap, (function() {
		Mojo.Controller.stageController.pushScene("alarmDetails");
	}).bind(this)); 
};

AlarmListAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

AlarmListAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

AlarmListAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
