'use strict';

var expect = require('chai').expect;
var homePage = require('../page_objects/base.page.js');

module.exports = function() {

	this.World = require('../support/world.js').World;

	////从所有任务中，找到 需要处理的 对应的任务的 办理按钮。
	//var getBLButton = function(taskInfo,taskName){
	//	var taskInfoEle ,taskNameEle,taskButtonEle;
	//	while(taskButtonEle == null){
	//		for(var row = 0;row < 10;row ++){
	//			taskInfoEle = homePage.taskInfoEle(this,row);
	//			taskNameEle = homePage.taskNameEle(this,row);
	//			var taskInfoText ;
	//			taskInfoEle.getText().then(function(txt){
	//				taskInfoText = txt;
	//			});
	//			var taskNameText ;
	//			taskNameEle.getText().then(function(txt){
	//				taskNameText = txt;
	//			});
	//			if(taskInfo == taskInfoEle && taskName == taskNameEle){
	//				taskButtonEle = homePage.taskButtonEle(this,row);
	//				return taskButtonEle;
	//			}
	//		}
	//		//点击下一页。
	//		homePage.nestPageEle(this).click();
    //
	//	}
	//};

	//登录系统
	this.Given(/^用户名 "([^"]*)" 密码 "([^"]*)" 登录系统$/, function(user,pwd,callback) {
		homePage.load(this);
		console.log(user);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('登录');
		});
		homePage.waitForUnserName(this);
		homePage.enterUserName(this).sendKeys(user);
		homePage.enterUserPwd(this).sendKeys(pwd);
		//homePage.enterUserCode(this).sendKeys('asdf');
		this.drive.sleep(500);
		homePage.clickButton(this).click();
		this.drive.sleep(300);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('后台管理');
		});
		callback();
	});

	//打开主页
	this.Then(/^open the home page$/, function(callback) {//		主页xpath  //*[@id="menuList"]/li[1]/a
		this.drive.switchTo().defaultContent();
		homePage.zyMenu(this).click();

		callback();
	});

	//我的任务  xpath  //*[@id="menuList"]/li[2]/a
	//打开   待办事项
	this.Then(/^打开我的任务$/, function(callback) {//		待办事项xpath	//*[@id="menuList"]/li[2]/ul/li[1]/a
		this.drive.switchTo().defaultContent();
		homePage.wdrwMenu(this).click();

		callback();
	});
	//打开   待办事项
	this.Then(/^打开待办事项$/, function(callback) {//		待办事项xpath	//*[@id="menuList"]/li[2]/ul/li[1]/a
		this.drive.switchTo().defaultContent();
		this.drive.sleep(300);
		homePage.dbsxMenu(this).click();

		callback();
	});
	//打开   所有任务
	this.Then(/^打开所有任务$/, function(callback) {//		所有任务xpath 	//*[@id="menuList"]/li[2]/ul/li[2]/a
		this.drive.switchTo().defaultContent();
		this.drive.sleep(300);
		homePage.syrwMenu(this).click();

		callback();
	});

	//切换到  主页  的 iframe 中。
	this.Then(/^switch to the home page$/, function(callback) {
		this.drive.switchTo().defaultContent();
		homePage.logoutMenu(this).click();
		var frame = homePage.todoIframe(this);
		this.drive.switchTo().frame(frame);

		callback();
	});


	//切换到  待办事项  的iframe 中。
	this.Then(/^switch to to do item$/, function(callback) {
		this.drive.switchTo().defaultContent();
		homePage.dbsxtabButton(this).click();
		var frame = homePage.todoIframe(this);
		this.drive.switchTo().frame(frame);

		callback();
	});


	//切换到   所有任务   的iframe中。
	this.Then(/^switch to all tasks$/, function(callback) {
		this.drive.switchTo().defaultContent();
		homePage.syrwtabButton(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		this.drive.sleep(10000);
		callback();
	});


	//According to the task information '' and task name '' to handle the process
	//根据 任务信息  和  任务名称  办理对应的  流程任务。
	this.Then(/^According to the task information "([^"]*)" and task name "([^"]*)" to handle the process$/, function(taskInfo,taskName,callback) {
		//this.drive.switchTo().defaultContent();
		//homePage.syrwtabButton(this).click();
		//var frame = homePage.alltaskIframe(this);
		//this.drive.switchTo().frame(frame);
		this.drive.sleep(10000);
		callback();
	});

	//退出系统
	this.Then(/^exit program$/, function(callback) {
		homePage.logoutMenu(this).click();
		homePage.waitForLogoutButton(this);
		homePage.logoutButton(this).click();
		homePage.waitForLogoutFloat(this);
		homePage.logoutfloatYes(this).click();
		this.drive.sleep(3000);
		homePage.pageTitle(this).then(function(title) {
			expect(title).to.equal('登录');
		});
		callback();
	});

};