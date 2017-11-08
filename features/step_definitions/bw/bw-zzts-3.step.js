'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts3 = require('../../page_objects/bw/bw-zzts-3.page.js');

//****************************  Scenario: 是否有原稿  到   图书定价印数折扣通知单  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.When(/^社内排出原稿$/, function(callback) {
		if(bwzztsBase.sfyyg =='否' && bwzztsBase.sfsnpyg == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('社内排出原稿');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^送社外排出原稿$/, function(callback) {
		if(bwzztsBase.sfyyg =='否' && bwzztsBase.sfsnpyg == '否') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('送社外排出原稿');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});


	this.Then(/^原稿加工$/, function(callback) {
		if(bwzztsBase.sfyyg =='否') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('原稿加工');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.pbTab(this).click();//排版 tab
			//收到原稿时间
			bwzzts3.sdygsjTimeBtn(this).click();
			bwzzts3.sdygsjInput(this).click();

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^社外排版$/, function(callback) {
		if(bwzztsBase.sfsnpb =='否') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('社外排版');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^一排$/, function(callback) {
		if(bwzztsBase.sfsnpb =='是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('一排');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.pbTab(this).click();//排版 tab
			//一排   是否二级加急
			bwzzts3.ypsfejjjCheck(this).click();//是否二级加急 select
			if(bwzztsBase.ypsfejjj =='是'){
				bwzzts3.ypsfejjjSelectS(this).click();//是否二级加急 是
			}else{
				bwzzts3.ypsfejjjSelectF(this).click();//是否二级加急 否
			}

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});




	this.When(/^社内校对，并且不是二级加急$/, function(callback) {
		if((bwzztsBase.sfsnpb == '否' && bwzztsBase.sfsnjd == '是' )|| (bwzztsBase.sfsnpb == '是'&& bwzztsBase.ypsfejjj == '否')) {
			console.log('流程执行一校 及其以下流程，有两种情况');
			console.log('1、社外排版，社内校对   即  sfsnpb == "否"  和  sfsnjd == "是"  ');
			console.log('1、一排，一排二级加急   即  sfsnpb == "是"  和  ypsfejjj == "否"  ');
			callback();
		}else{
			callback(new Error('当前流程，并不执行 此 Scenario'));
		}
	});

	this.Then(/^一校$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('一校');
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

	this.Then(/^申请一校付型$/, function(callback) {
		if(bwzztsBase.sfejjj == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('申请一校付型');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.jdTab(this).click();//校对 tab
			//是否退排版
			bwzzts3.sftpbCheck(this).click();//是否退排版 select
			if(bwzztsBase.sftpb =='是'){
				bwzzts3.sftpbSelectS(this).click();//是否退排版 是
			}else{
				bwzzts3.sftpbSelectF(this).click();//是否退排版 否
			}

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^二改$/, function(callback) {
		if(bwzztsBase.sfejjj == '否') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('二改');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^二校$/, function(callback) {
		if(bwzztsBase.sfejjj == '否') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('二校');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.jdTab(this).click();//校对 tab
			//是否三改
			bwzzts3.sfsanGCheck(this).click();//是否三改 select
			if(bwzztsBase.sfsanG =='是'){
				bwzzts3.sfsanGSelectS(this).click();//是否三改 是
			}else{
				bwzzts3.sfsanGSelectF(this).click();//是否三改 否
				//是否退排版
				bwzzts3.sftpbCheck(this).click();//是否退排版 select
				if(bwzztsBase.sftpb =='是'){
					bwzzts3.sftpbSelectS(this).click();//是否退排版 是
				}else{
					bwzzts3.sftpbSelectF(this).click();//是否退排版 否
				}
			}
			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^三改$/, function(callback) {
		if(bwzztsBase.sfejjj == '否' && bwzztsBase.sfsanG == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('三改');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^三校$/, function(callback) {
		if(bwzztsBase.sfejjj == '否' && bwzztsBase.sfsanG == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('三校');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.jdTab(this).click();//校对 tab
			//是否四改
			bwzzts3.sfsiGCheck(this).click();//是否四改 select
			if(bwzztsBase.sfsiG =='是'){
				bwzzts3.sfsiGSelectS(this).click();//是否四改 是
			}else{
				bwzzts3.sfsiGSelectF(this).click();//是否四改 否
				//是否退排版
				bwzzts3.sftpbCheck(this).click();//是否退排版 select
				if(bwzztsBase.sftpb =='是'){
					bwzzts3.sftpbSelectS(this).click();//是否退排版 是
				}else{
					bwzzts3.sftpbSelectF(this).click();//是否退排版 否
				}
			}
			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^四改$/, function(callback) {
		if(bwzztsBase.sfejjj == '否' && bwzztsBase.sfsanG == '是' && bwzztsBase.sfsiG == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('四改');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^四校$/, function(callback) {
		if(bwzztsBase.sfejjj == '否' && bwzztsBase.sfsanG == '是' && bwzztsBase.sfsiG == '是'){
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('四校');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.jdTab(this).click();//校对 tab

			//是否退排版
			bwzzts3.sftpbCheck(this).click();//是否退排版 select
			if(bwzztsBase.sftpb =='是'){
				bwzzts3.sftpbSelectS(this).click();//是否退排版 是
			}else{
				bwzzts3.sftpbSelectF(this).click();//是否退排版 否
			}
			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});



	this.Then(/^退排版$/, function(callback) {
		if(bwzztsBase.sftpb == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('退排版');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^核红$/, function(callback) {
		if(bwzztsBase.sfejjj == '是') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('核红');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.hhTab(this).click();//核红 tab

			//是否社内核红
			bwzzts3.sfsnhhCheck(this).click();//是否退排版 select
			if(bwzztsBase.sfsnhh =='是'){
				bwzzts3.sfsnhhSelectS(this).click();//是否退排版 是
			}else{
				bwzzts3.sfsnhhSelectF(this).click();//是否退排版 否
				bwzzts3.swhhgshryInput(this).sendKeys(bwzzts3.swhhgshryText);
			}

			//开始时间
			bwzzts3.hhkssjTimeBtn(this).click();//开始时间 是
			bwzzts3.hhkssjInput(this).click();//开始时间 是

			//结束时间
			bwzzts3.hhjssjTimeBtn(this).click();//开始时间 是
			bwzzts3.hhjssjInput(this).click();//开始时间 是

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^付型整理$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('付型整理');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.fxzlTab(this).click();//付型整理 tab

		//是否社内付型整理
		bwzzts3.sfsnfxzlCheck(this).click();//是否退排版 select
		if(bwzztsBase.sfsnfxzl =='是'){
			bwzzts3.sfsnfxzlSelectS(this).click();//是否退排版 是
		}else{
			bwzzts3.sfsnfxzlSelectF(this).click();//是否退排版 否
			bwzzts3.swzlgshryInput(this).sendKeys(bwzzts3.swzlgshryText);
		}

		//开始时间
		bwzzts3.fxzlkssjTimeBtn(this).click();//开始时间 是
		bwzzts3.fxzlkssjInput(this).click();//开始时间 是

		//结束时间
		bwzzts3.fxzljssjTimeBtn(this).click();//开始时间 是
		bwzzts3.fxzljssjInput(this).click();//开始时间 是
		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^责编确认$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('责编确认');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.fxzlTab(this).click();//付型整理 tab

		//审核结论
		bwzzts3.shjlCheck(this).click();//开始时间 是
		bwzzts3.shjlSelectTongG(this).click();//开始时间 是

		//责编收付型样日期
		bwzzts3.zbsfxyrqTimeBtn(this).click();//开始时间 是
		bwzzts3.zbsfxyrqInput(this).click();//开始时间 是

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^责任印制确认$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('责任印制确认');
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