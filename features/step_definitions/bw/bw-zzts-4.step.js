'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts4 = require('../../page_objects/bw/bw-zzts-4.page.js');

//****************************  Scenario: 是否一级加急  到   申领书号  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.When(/^是否一级加急$/, function(callback) {
		if(bwzztsBase.sfyjjj == '是') {
			console.log('是一级加急，执行当前 Scenario ，不是一级加急，跳过 此 Scenario');
			callback();
		}else{
			callback(new Error('当前流程，并不执行 此 Scenario  “一级加急”'));
		}

	});

	this.Then(/^填写一级加急申请$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('填写一级加急申请');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.yjjjTab(this).click();//一级加急 tab

		//申请日期
		bwzzts4.sqrqTimeBtn(this).click();
		bwzzts4.sqrqInput(this).click();

		bwzzts4.sqlyInput(this).sendKeys(bwzzts4.sqlyText);

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^分社长审批$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('分社长审批');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.yjjjTab(this).click();//一级加急 tab

		//分社长审批
		bwzzts4.fszspCheck(this).click();
		bwzzts4.fszspSelectTongG(this).click();

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);		callback();
	});


	this.Then(/^社领导审批$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('社领导审批');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.yjjjTab(this).click();//一级加急 tab

		//分社长审批
		bwzzts4.sldspCheck(this).click();
		bwzzts4.sldspSelectTongG(this).click();

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});


	this.Then(/^申领书号$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('申领书号');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.fgdTab(this).click();//发稿单 tab

		bwzzts4.fgdInput(this).sendKeys(bwzzts4.fgdText);

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^申请CIP$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('申请CIP');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});
};