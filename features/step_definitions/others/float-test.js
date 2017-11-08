'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//var zztsPage = require('../page_objects/bw-zzts.page-base.js');

module.exports = function() {

	this.World = require('../../support/world.js').World;

	//var getBLButton = function(taskInfop,taskNamep){
	//	var buttonElement;
	//	do {
	//		for (var a = 0; a < 10; a++) {
	//			var taskInfo = homePage.taskInfoEle(this, a).getText();
	//				if (taskInfo == taskInfop) {
	//					var taskName = homePage.taskNameEle(this, a).getText();
	//						if (taskName == taskNamep) {
	//							buttonElement = homePage.taskButtonEle(this, a);
	//						}
	//				}
	//		}
	//	}while(buttonElement ===null);
	//};

//open task by taskInfo "编印务流程-纸质图书-asdf" taskName "新建立项申请" in lixiang
	this.Given(/^open task by/, function(callback) {
		// iframe  问题。切换 到 所有任务的iframe
		var frame = homePage.alltaskIframe(this);
		//*[@id="frameTabs"]/div[2]/div[2]/div/iframe
		this.drive.switchTo().frame(frame);
		//var btnEle ;
		//do {
		//	btnEle = homePage.getBLButton('','',this);
		//	console.log(btnEle);
		//	homePage.nestPageEle(this).click();
        //
		//} while (btnEle === null);
		//*[@id="saveAndGoOn"]


		//循环获取按钮元素
		//var buttonElement;
		//do {
		//	for (var a = 0; a < 10; a++) {
		//		var taskInfo = homePage.taskInfoEle(this, a).getText();
		//		if (taskInfo == '编印务流程-纸质图书-123123') {
		//			var taskName = homePage.taskNameEle(this, a).getText();
		//			if (taskName == '新建立项申请') {
		//				buttonElement = homePage.taskButtonEle(this, a);
		//				homePage.taskButtonEle(this, a).click();
		//			}
		//		}
		//	}
		//}while(buttonElement === undefined);
        //
		//console.log(buttonElement);




		homePage.blButton(this).click();

		callback();
	});

	this.When(/^open sort$/, function(callback) {

		// iframe  问题。productTypeSelect
		homePage.flButton(this).click();
		homePage.xzflButton(this).click();
		this.drive.sleep(500);


		callback();
	});

	this.Then(/^open float$/, function(callback) {//		所有任务xpath 	//*[@id="menuList"]/li[2]/ul/li[2]/a
		this.drive.switchTo().defaultContent();
		homePage.fcflButton(this).click();
		//homePage.fcflButton(this).click
		//homePage.sjgbfc(this).doubleClick();
		//homePage.wdrwMenu(this).click();
		this.drive.sleep(300);

		callback();
	});

};