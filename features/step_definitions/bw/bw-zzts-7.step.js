'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var xtlxPage = require('../../page_objects/bw/bw-zzts-base.page.js');

//****************************  Scenario: 检查样书印装  到  end  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.When(/^检查样书印装$/, function(callback) {



		callback();
	});

	this.Then(/^检查样书内容及印装$/, function(callback) {
		this.drive.switchTo().defaultContent();



		callback();
	});


	this.Then(/^修改样书错误$/, function(callback) {


		callback();
	});

	this.Then(/^印务确认$/, function(callback) {

		callback();
	});


};