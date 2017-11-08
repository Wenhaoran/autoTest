'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts2 = require('../../page_objects/bw/bw-zzts-2.page.js');

//****************************  Scenario: 编辑发设计要求 到 责编意见  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;


	this.When(/^编辑发设计要求$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('编辑发设计要求');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.zzsjTab(this).click();//装帧设计 tab
		//成品尺寸
		bwzzts2.cpccCheck(this).click();
		if(bwzztsBase.cpccsfqt =='否'){
			bwzzts2.cpccSelectOther(this).click();
		}else{
			bwzzts2.cpccSelectQT(this).click();
			bwzzts2.tsccInput(this).sendKeys(bwzztsBase.tscc);//特殊尺寸
		}
		//开本
		bwzzts2.kbCheck(this).click();
		if(bwzztsBase.kbsfqt =='否'){
			bwzzts2.kbSelectOther(this).click();
		}else{
			bwzzts2.kbSelectQT(this).click();
			bwzzts2.tskbInput(this).sendKeys(bwzztsBase.tscc);//特殊开本
		}
		//是否有勒口
		bwzzts2.sfylkCheck(this).click();
		if(bwzztsBase.sfylk =='否'){
			bwzzts2.sfylkSelectF(this).click();
		}else{
			bwzzts2.sfylkSelectS(this).click();
			bwzzts2.lkccInput(this).sendKeys(bwzztsBase.tscc);//勒口尺寸
		}

		//装帧形式
		bwzzts2.zzxsCheck(this).click();
		bwzzts2.zzxsSelect(this).click();

		//上架建议
		bwzzts2.sjjyInput(this).sendKeys(bwzzts2.sjjyText);//上架建议


		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);

		callback();
	});

	this.Then(/^美编设计$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('美编设计');
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


	this.Then(/^责编意见$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('责编意见');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.zzsjTab(this).click();//装帧设计 tab

		//审核结论
		bwzzts2.shjlCheck(this).click();
		bwzzts2.shjlSelectS(this).click();

		//初稿初次时间
		bwzzts2.cgccsjTimeBtn(this).click();
		bwzzts2.cgccsjSelectTime(this).click();

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);

		callback();
	});


};