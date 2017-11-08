'use strict';

var fs = require('fs');
var webdrive = require('selenium-webdriver');

var platform = process.env.PLATFORM || "FIREFOX";

var buildChromedrive = function() {
	return new webdrive.Builder().withCapabilities(
			webdrive.Capabilities.chrome()).build();//.usingServer('http://127.0.0.1:64465/')
};

var buildFirefoxdrive = function() {
	return new webdrive.Builder().withCapabilities(
			webdrive.Capabilities.firefox()).build();//.usingServer('http://127.0.0.1:64465/')
};

switch (platform) {
case 'FIREFOX':
	var drive = buildFirefoxdrive();
	break;
case 'CHROME':
	var drive = buildChromedrive();
	drive.manage().window().setSize(1920,1080);
	break;
default:
	var drive = buildChromedrive();
}

var getdrive = function() {
	return drive;
};

var World = function World() {

	var defaultTimeout = 60000;
	var screenshotPath = "screenshots";
	drive.manage().timeouts().implicitlyWait(50000);

	this.webdrive = webdrive;
	this.drive = drive;

	if (!fs.existsSync(screenshotPath)) {
		fs.mkdirSync(screenshotPath);
	}

	this.waitForId = function(idLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.';  
		return drive.wait(function() {
			return drive.isElementPresent({ id : idLocator }) && 
				   drive.findElement({ id : idLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return drive.findElement({ id : idLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
	this.waitForCss = function(cssLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.'; 
		return drive.wait(function() {
			return drive.isElementPresent({ css : cssLocator }) && 
				   drive.findElement({ css : cssLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return drive.findElement({ css : cssLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
	this.waitForXpath = function(xpathLocator, elementName) {
		var errMsg = elementName + ' was still not present when it should have appeared.'; 
		return drive.wait(function() {
			return drive.isElementPresent({ xpath : xpathLocator }) && 
				   drive.findElement({ xpath : xpathLocator }).isDisplayed().then(function (displayed) {
			           if (!displayed) return false;
			           return drive.findElement({ xpath : xpathLocator }).isEnabled();
			       });				   
		}, defaultTimeout, errMsg);
	};
	
};

module.exports.World = World;
module.exports.getdrive = getdrive;
