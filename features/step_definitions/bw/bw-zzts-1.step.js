'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts1 = require('../../page_objects/bw/bw-zzts-1.page.js');

//****************************  Scenario: 从新建立项申请，到立项确认  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;


	this.Given(/^创建选题立项$/, function(callback) {
		this.drive.switchTo().defaultContent();
		bwzztsBase.xtlxglMenu(this).click();
		bwzztsBase.xtlxMenu(this).click();

		// iframe  问题。productTypeSelect
		var frame = homePage.fourIframe(this);
		//*[@id="frameTabs"]/div[2]/div[2]/div/iframe
		this.drive.switchTo().frame(frame);
		bwzzts1.waitForcplxInput(this);
		bwzzts1.cplxinput(this).click();
		//	//*[@id="treeDemo_3_check"]
		bwzzts1.waitForcpAuto(this);
		this.drive.sleep(500);
		bwzzts1.zztscheck(this).click();
		this.drive.sleep(500);
		bwzzts1.xjlxsqButton(this).click();
		bwzzts1.waitxtlxPage(this);

		//****************************************************填写 创建选题立项 基本信息
		bwzzts1.xmmcInput(this).sendKeys(bwzztsBase.projectName);//项目名称

		bwzzts1.chxzselect(this).click();//策划性质
		bwzzts1.chxzcheck(this).click();
		bwzzts1.yzselect(this).click();//语种
		bwzzts1.yzcheck(this).click();

		//点击启动按钮
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.When(/^新建立项申请$/, function(callback) {

		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		homePage.wdrwMenu(this).click();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		//homePage.syrwtabButton(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		//任务信息 编印务流程-纸质图书- + bwzztsBase.projectName   ，任务名称  新建立项申请
		var taskInfo = '编印务流程-纸质图书-'+ bwzztsBase.projectName;
		var taskName = '新建立项申请';
		var a = 0;

		//筛选 办理任务 卡壳了。
		//homePage.taskInfoEle(this, a).getText().then(function(text){
		//	return text == taskInfo;
		//}).then(function(blbtn){
		//	blbtn.click();
		//});
		//

		homePage.rwmcInput(this).sendKeys('新建立项申请');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(2000);
		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************

		//****************************************************填写 新建立项申请 基本信息**************************************
		bwzzts1.cbdInput(this).sendKeys(bwzzts1.cbdText);//出版地
		bwzzts1.djInput(this).sendKeys(bwzzts1.djText);//定价
		bwzzts1.ysInput(this).sendKeys(bwzzts1.ysText);//印数
		bwzzts1.jcsInput(this).sendKeys(bwzzts1.jcsText);//卷册书
		bwzzts1.dzdxCheck(this).click();//读者对象
		bwzzts1.dzdxSelect(this).click();
		bwzzts1.sfqdhtCheck(this).click();//是否签订合同    是
		if(bwzztsBase.sfqdht =="是"){
			bwzzts1.sfqdhtSelectS(this).click();
		}else{
			bwzzts1.sfqdhtSelectF(this).click();
		}

		bwzzts1.sfzdyxCheck(this).click();//是否重点营销
		bwzzts1.sfzdyxSelect(this).click();
		bwzzts1.sfsycsCheck(this).click();//是否属于丛书   是
		if(bwzztsBase.sfsycs =="是"){
			bwzzts1.sfsycsSelectS(this).click();
		}else{
			bwzzts1.sfsycsSelectF(this).click();
		}

		bwzzts1.sfybtkCheck(this).click();//是否有补贴款
		if(bwzztsBase.sfybtk =="是"){
			bwzzts1.sfybtkSelectS(this).click();
		}else{
			bwzzts1.sfybtkSelectF(this).click();
		}

		bwzzts1.sbryjInput(this).sendKeys(bwzzts1.sbryjText);//申报人意见
		bwzzts1.chbjInput(this).sendKeys(bwzzts1.chbjText);//策划背景
		bwzzts1.nrjjInput(this).sendKeys(bwzzts1.nrjjText);//内容简介
		bwzzts1.zzjsInput(this).sendKeys(bwzzts1.zzjsText);//作者介绍
		bwzzts1.syycInput(this).sendKeys(bwzzts1.syycText);//收益预测

		//切换到  分类  tab 页。
		bwzztsBase.flTab(this).click();//分类 tab
		bwzzts1.xzflBtn(this).click();//选择分类
		this.drive.sleep(500);
		//切换视图到 浮层上。
		this.drive.switchTo().defaultContent();

		bwzzts1.fl1Check(this).click();//分类 1
		bwzzts1.fl1SelectYjbts(this).click();//引进版图书
		this.drive.sleep(50);
		bwzzts1.bcflBtn(this).click();//保存分类
		this.drive.sleep(50);
		bwzzts1.fl1Check(this).click();//分类1
		bwzzts1.fl1SelectZtflf(this).click();//中图分类法
		bwzzts1.fl2Check(this).click();//分类2
		bwzzts1.fl2Select(this).click();//农业科学
		bwzzts1.fl3Check(this).click();//分类3
		bwzzts1.fl3Select(this).click();//林业
		bwzzts1.bcflBtn(this).click();//保存分类
		this.drive.sleep(1000);
		bwzzts1.qrflBtn(this).click();//确认分类

		this.drive.sleep(5000);
		//切换视图回到 iframe 中
		this.drive.switchTo().frame(frame);

		//切换到  作者信息  tab 页。
		bwzztsBase.zzxxTab(this).click();//作者信息 tab
		bwzzts1.zzxxBtn(this).click();//选择作者
		this.drive.sleep(500);
		//切换视图到 浮层上。
		this.drive.switchTo().defaultContent();

		bwzzts1.zzlxCheck(this).click();//作者类型
		bwzzts1.zzlxSelect(this).click();//选择作者类型
		bwzzts1.zzfsCheck(this).click();//著作方式
		bwzzts1.zzfsSlect(this).click();//选择著作方式
		bwzzts1.zzmcInput(this).sendKeys(bwzzts1.zzmcText);//输入作者名称
		bwzzts1.zzmcCxBtn(this).click();//搜索
		this.drive.sleep(1000);
		bwzzts1.zzlbBtn(this).click();// 从人员列表选择
		this.drive.sleep(50);
		bwzzts1.zzbcBtn(this).click();//保存
		//关闭浮层页
		homePage.closeX(this).click();
		this.drive.sleep(500);
//****************************************************填写 新建立项申请 基本信息  end **************************************
		//切换视图回到 iframe 中
		this.drive.switchTo().frame(frame);

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);

		callback();
	});

	this.Then(/^丛书责任人意见$/, function(callback) {
		this.drive.switchTo().defaultContent();

		if(bwzztsBase.sfsycs=='是'){
			//切换iframe 到所有任务中。
			this.drive.sleep(500);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('丛书责任人意见');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//切换tab 页
			bwzztsBase.csTab(this).click();//作者信息 tab
			bwzzts1.cszrryjInput(this).sendKeys(bwzzts1.cszrryj);//输入作者名称
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}

		callback();
	});


	this.Then(/^分社长意见$/, function(callback) {
		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();

		this.drive.sleep(500);
		homePage.syrwMenu(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		homePage.rwmcInput(this).sendKeys('分社长意见');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换tab 页
		bwzztsBase.xtlxTab(this).click();//选题立项 tab
		//分社长决定
		bwzzts1.fszjdCheck(this).click();//分社长决定
		bwzzts1.fszjdSelectTongGuo(this).click();//分社长决定  通过

		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^中法图意见$/, function(callback) {
		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();

		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		homePage.rwmcInput(this).sendKeys('中法图意见');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换tab 页
		this.drive.sleep(500);
		bwzztsBase.xtlxTab(this).click();//选题立项 tab
		//建议印数
		bwzzts1.jyysInput(this).sendKeys(bwzzts1.jyysText);//输入建议印数
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^社领导意见$/, function(callback) {
		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();

		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		homePage.rwmcInput(this).sendKeys('社领导意见');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换tab 页
		this.drive.sleep(500);
		bwzztsBase.xtlxTab(this).click();//选题立项 tab

		//社领导决定
		bwzzts1.sldjdCheck(this).click();//分社长决定 select
		if(bwzztsBase.sldjd=='上选题论证会'){
			bwzzts1.sldjdSelectSXTLZH(this).click();//分社长决定  通过
		}else if(bwzztsBase.sldjd=='通过'){
			bwzzts1.sldjdSelectTongGuo(this).click();//分社长决定  通过
		}

		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^选题论证会$/, function(callback) {
		this.drive.switchTo().defaultContent();

		if(bwzztsBase.sldjd=='上选题论证会'){
			//切换iframe 到所有任务中。
			this.drive.sleep(500);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);
			homePage.rwmcInput(this).sendKeys('选题论证会');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);

			//切换tab 页
			bwzztsBase.xtlxTab(this).click();//选题立项 tab
			bwzzts1.xthbgInput(this).sendKeys(bwzzts1.xthbgText);//选题会报告
			bwzzts1.xthchryInput(this).sendKeys(bwzzts1.xthchryText);//选题会参会人员
			bwzzts1.xthshjdCheck(this).click();//选题会审议决定
			bwzzts1.xthshjdSelectTongGuo(this).click();//选题会审议决定通过

			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^立项确认$/, function(callback) {
		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();

		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);
		homePage.rwmcInput(this).sendKeys('立项确认');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
		//切换tab 页
		bwzztsBase.xtlxTab(this).click();//选题立项 tab
		//是否已领取补贴款
		bwzzts1.sfylqbtkCheck(this).click();
		if(bwzztsBase.sfylqbtk =='是'){
			bwzzts1.sfylqbtkSelectS(this).click();
		}else{
			bwzzts1.sfylqbtkSelectF(this).click();
		}
		//是否一级加急
		bwzzts1.sfyjjjCheck(this).click();
		if(bwzztsBase.sfyjjj =='是'){
			bwzzts1.sfyjjjSelectS(this).click();
		}else{
			bwzzts1.sfyjjjSelectF(this).click();
		}
		//是否有原稿
		bwzzts1.sfyygCheck(this).click();
		if(bwzztsBase.sfyyg =='是'){
			bwzzts1.sfyygSelectS(this).click();
		}else{
			bwzzts1.sfyygSelectF(this).click();
		}
		//是否社内排原稿
		bwzzts1.sfsnpygCheck(this).click();
		if(bwzztsBase.sfsnpyg =='是'){
			bwzzts1.sfsnpygSelectS(this).click();
		}else{
			bwzzts1.sfsnpygSelectF(this).click();
		}
		//是否二级加急
		bwzzts1.sfejjjCheck(this).click();
		if(bwzztsBase.sfejjj =='是'){
			bwzzts1.sfejjjSelectS(this).click();
		}else{
			bwzzts1.sfejjjSelectF(this).click();
		}

		this.drive.sleep(500);
		bwzztsBase.pbTab(this).click();//选题立项 tab
		//是否社内排版
		bwzzts1.sfsnpbCheck(this).click();
		if(bwzztsBase.sfsnpb =='是'){
			bwzzts1.sfsnpbSelectS(this).click();
		}else{
			bwzzts1.sfsnpbSelectF(this).click();
		}
		//是否社内校对
		bwzzts1.sfsnjdCheck(this).click();
		if(bwzztsBase.sfsnjd =='是'){
			bwzzts1.sfsnjdSelectS(this).click();
		}else{
			bwzzts1.sfsnjdSelectF(this).click();
		}

		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});
};