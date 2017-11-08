'use strict';

var drive = require('./world.js').getdrive();
var fs = require('fs');
var path = require('path');
var sanitize = require("sanitize-filename");

var myHooks = function () {
  
  this.After(function(scenario, callback) {
    if(scenario.isFailed()) {
      this.drive.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
            if(err) console.log(err);
        });
      });
    }
    this.drive.manage().deleteAllCookies()
      .then(function() {
        callback();
      });
  });

  this.registerHandler('AfterFeatures', function (event, callback) {
    drive.quit().then(function() {
      callback();
    });
  });

};

module.exports = myHooks;
