/**
 * Creates a basic Alarm object
 * 
 * @constructor
 * @this {Alarm}
 * @param {number} hour The hour (0-23) of the alarm
 * @param {number} minute The minute (0-59) of the alarm
 */
function Alarm(hour, min) {
	this.title = "Alarm";

	this.hour = hour;
	this.minute = minute;
	
	this.enabled = true;
	
	// repeat on days of the week ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
	this.repeat = [];
	
	this.canSnooze = true;
	// length of reprieve granted by snooze button in minutes
	this.snoozeDuration = 10;
	
	this.sound = null;
	
	// The list of AlarmGames to choose from for this alarm
	this.activeGames = [];
	// the number of games to be completed as part of the alarm
	this.gameCount = 1;
	
	this.alarmChain = [];
}
/**
 * Sets the time of the Alarm
 * 
 * @this {Alarm}
 * @param {number} hour The hour (0-23) of the alarm
 * @param {number} minute The minute (0-59) of the alarm
 */
Alarm.prototype.setTime = function(hour, min) {
	this.hour = hour;
	this.minute = minute;
};
/**
 * Sets the days of the week that the Alarm should repeat
 * 
 * @this {Alarm}
 * @param {Array} days The days of the week that the alarm should repeat (["sun", "mon", "tue", "wed", "thu", "fri", "sat"])
 */
Alarm.prototype.setRepeat = function(days) {
	this.repeat = days;
	if(this.enabled) {
		this.setupEvents();
	}
};
/**
 * Allows this Alarm to be snoozed
 * 
 * @this {Alarm}
 * @param {Array} duration (Optional) The length of the snooze in minutes
 */
Alarm.prototype.enableSnooze = function(duration) {
	this.canSnooze = true;
	if(typeof duration === "number") {
		this.snoozeDuration = duration;
	}
};
/**
 * Prevents this Alarm from being snoozed
 * 
 * @this {Alarm}
 */
Alarm.prototype.disableSnooze = function() {
	this.canSnooze = false;
};
/**
 * Sets the Alarm's ringer sound
 * 
 * @this {Alarm}
 * @param {AlarmSound} sound The sound to be played when the Alarm goes off. Null for no sound.
 */
Alarm.prototype.setSound = function(sound) {
	this.sound = sound;
};
/**
 * Enables this Alarm
 * 
 * @this {Alarm}
 */
Alarm.prototype.enable = function() {
	if(!this.enabled) {
		this.setupEvents();
	}
	this.enabled = true;
};
/**
 * Disables this Alarm
 * 
 * @this {Alarm}
 */
Alarm.prototype.disable = function() {
	if(this.enabled) {
		this.removeEvents();
	}
	this.enabled = false;
};
/**
 * TODO: Sets up the Alarm as a background event
 * 
 * @this {Alarm}
 */
Alarm.prototype.setupEvents = function() {
	// add events for each chained alarm
	if(this.alarmChain) {
		this.alarmChain.forEach(function(chain) {
			chain.setupEvents();
		});
	}
	// TODO:
};
/**
 * TODO: Removes background events associated with this Alarm
 * 
 * @this {Alarm}
 */
Alarm.prototype.removeEvents = function() {
	// remove events for each chained alarm
	if(this.alarmChain) {
		this.alarmChain.forEach(function(chain) {
			chain.removeEvents();
		});
	}
	// TODO:
};
/**
 * TODO: Called when the alarm goes off
 * 
 * @this {Alarm}
 */
Alarm.prototype.trigger = function() {
	// TODO:
};

/**
 * Creates a relative ChainAlarm object
 * 
 * @constructor
 * @this {ChainAlarm}
 * @param {offset} offset The time offset in minutes from the base alarm
 */
function ChainAlarm(offset) {
	this.offset = offset;
	
	this.allowSnooze = true;
	
	this.sound = null;
	
	this.games = [];
}
ChainAlarm.prototype = new Alarm;
/**
 * Sets the time of the  ChainAlarm
 * 
 * @this {ChainAlarm}
 * @param {number} offset The offset of the followup in minutes (may be negative)
 */
ChainAlarm.prototype.setTime = function(offset) {
	this.offset = offset;
};
ChainAlarm.prototype.setRepeat = undefined;


/**
 * Represents an alarm tone to be played
 * Might need to be kept in an external file
 * 
 * @constructor
 * @this {AlarmSound}
 * @param {string} name The display name of the alarm tone
 * @param {string} path The path to the audio file to be played
 */
function AlarmSound(name, path) {
	this.name = name;
	this.path = path;
	this.duration = duration;
};

/**
 * Represents a minigame be played
 * Might need to be kept in an external file
 * 
 * @constructor
 * @this {AlarmGame}
 * @param {string} name The display name of the minigame
 * @param {function} start A callback to launch the game. Returns true if the game was completed successfully and false if it was failed
 */
function AlarmGame(name, start) {
	this.name = name;
	this.start = start;
};