'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var xtlxPage = require('../../page_objects/bw/bw-zzts-base.page.js');

//****************************  Scenario: 图书定价印数折扣通知单  到  填写发印单  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.When(/^图书定价印数折扣通知单$/, function(callback) {


		callback();
	});

	this.Then(/^分社长审核图书定价印数折扣通知单$/, function(callback) {
		this.drive.switchTo().defaultContent();


		callback();
	});


	this.Then(/^社领导审核图书定价印数折扣通知单$/, function(callback) {

		callback();
	});

	this.Then(/^填写发印单$/, function(callback) {


		callback();
	});


};