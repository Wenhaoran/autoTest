'use strict';

var expect = require('chai').expect;
var xtlxPage = require('../../page_objects/yw/yw-clck.page.js');
var homePage = require('../../page_objects/base.page.js');

var projectName;

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.Given(/^yw-clck open the page$/, function(callback) {
		xtlxPage.xtlxglMenu(this).click();
		xtlxPage.xtlxMenu(this).click();

		// iframe  问题。productTypeSelect
		var frame = homePage.fourIframe(this);
		//*[@id="frameTabs"]/div[2]/div[2]/div/iframe
		this.drive.switchTo().frame(frame);
		this.drive.sleep(2000);
		xtlxPage.waitForcplxInput(this);
		xtlxPage.cplxinput(this).click();
		//	//*[@id="treeDemo_3_check"]
		xtlxPage.waitForcpAuto(this);
		this.drive.sleep(500);
		xtlxPage.zztscheck(this).click();
		this.drive.sleep(500000);
		xtlxPage.xjlxsqButton(this).click();
		callback();
	});

	this.When(/^yw-clck start the project$/, function(callback) {
		xtlxPage.waitxtlxPage(this);
		//填写基本信息
		projectName = 'asdf'+Math.random();
		xtlxPage.xmmcInput(this).sendKeys(projectName);//项目名称

		xtlxPage.chxzselect(this).click();//策划性质
		xtlxPage.chxzcheck(this).click();
		xtlxPage.yzselect(this).click();//语种
		xtlxPage.yzcheck(this).click();

		//点击启动按钮
		xtlxPage.startup(this).click();
		this.drive.switchTo().defaultContent();

		callback();
	});

	this.Then(/^yw-clck view tasks$/, function(callback) {

		//this.drive.switchTo().window(parent);
		this.drive.sleep(20000);
		xtlxPage.wdrwMenu(this).click();
		xtlxPage.syrwMenu(this).click();

		callback();
	});

};