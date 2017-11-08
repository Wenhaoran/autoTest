//'use strict';
//
//var expect = require('chai').expect;
//var homePage = require('../../page_objects/base.page.js');
////编务 纸质图书配置。
//var xtlxPage = require('../page_objects/bw/bw-zzts.page-base.js');
//
//
//
//module.exports = function() {
//
//	this.World = require('../../support/world.js').World;
//
//	this.Given(/^创建选题立项$/, function(callback) {
//		this.drive.switchTo().defaultContent();
//		xtlxPage.xtlxglMenu(this).click();
//		xtlxPage.xtlxMenu(this).click();
//
//		// iframe  问题。productTypeSelect
//		var frame = homePage.fourIframe(this);
//		//*[@id="frameTabs"]/div[2]/div[2]/div/iframe
//		this.drive.switchTo().frame(frame);
//		xtlxPage.waitForcplxInput(this);
//		xtlxPage.cplxinput(this).click();
//		//	//*[@id="treeDemo_3_check"]
//		xtlxPage.waitForcpAuto(this);
//		this.drive.sleep(500);
//		xtlxPage.zztscheck(this).click();
//		this.drive.sleep(500);
//		xtlxPage.xjlxsqButton(this).click();
//		xtlxPage.waitxtlxPage(this);
//
//		//****************************************************填写 创建选题立项 基本信息
//		xtlxPage.xmmcInput(this).sendKeys(xtlxPage.projectName);//项目名称
//
//		xtlxPage.chxzselect(this).click();//策划性质
//		xtlxPage.chxzcheck(this).click();
//		xtlxPage.yzselect(this).click();//语种
//		xtlxPage.yzcheck(this).click();
//
//		//点击启动按钮
//		homePage.startUp(this).click();
//		this.drive.sleep(5000);
//		this.drive.switchTo().defaultContent();
//		callback();
//	});
//
//	this.When(/^新建立项申请$/, function(callback) {
//
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//		homePage.wdrwMenu(this).click();
//		this.drive.sleep(100);
//		homePage.syrwMenu(this).click();
//		//homePage.syrwtabButton(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//		//任务信息 编印务流程-纸质图书- + xtlxPage.projectName   ，任务名称  新建立项申请
//		var taskInfo = '编印务流程-纸质图书-'+ xtlxPage.projectName;
//		var taskName = '新建立项申请';
//		var a = 0;
//
//		//筛选 办理任务 卡壳了。
//		//homePage.taskInfoEle(this, a).getText().then(function(text){
//		//	return text == taskInfo;
//		//}).then(function(blbtn){
//		//	blbtn.click();
//		//});
//		//
//		homePage.blButton(this).click();
//		this.drive.sleep(2000);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//
//		//****************************************************填写 新建立项申请 基本信息**************************************
//		xtlxPage.cbdInput(this).sendKeys(xtlxPage.cbdText);//出版地
//		xtlxPage.djInput(this).sendKeys(xtlxPage.djText);//定价
//		xtlxPage.ysInput(this).sendKeys(xtlxPage.ysText);//印数
//		xtlxPage.jcsInput(this).sendKeys(xtlxPage.jcsText);//卷册书
//		xtlxPage.dzdxCheck(this).click();//读者对象
//		xtlxPage.dzdxSelect(this).click();
//		xtlxPage.sfqdhtCheck(this).click();//是否签订合同    是
//		if(xtlxPage.sfqdht =="是"){
//			xtlxPage.sfqdhtSelectS(this).click();
//		}else{
//			xtlxPage.sfqdhtSelectF(this).click();
//		}
//
//		xtlxPage.sfzdyxCheck(this).click();//是否重点营销
//		xtlxPage.sfzdyxSelect(this).click();
//		xtlxPage.sfsycsCheck(this).click();//是否属于丛书   是
//		if(xtlxPage.sfsycs =="是"){
//			xtlxPage.sfsycsSelectS(this).click();
//		}else{
//			xtlxPage.sfsycsSelectF(this).click();
//		}
//
//		xtlxPage.sfybtkCheck(this).click();//是否有补贴款
//		if(xtlxPage.sfybtk =="是"){
//			xtlxPage.sfybtkSelectS(this).click();
//		}else{
//			xtlxPage.sfybtkSelectF(this).click();
//		}
//
//		xtlxPage.sbryjInput(this).sendKeys(xtlxPage.sbryjText);//申报人意见
//		xtlxPage.chbjInput(this).sendKeys(xtlxPage.chbjText);//策划背景
//		xtlxPage.nrjjInput(this).sendKeys(xtlxPage.nrjjText);//内容简介
//		xtlxPage.zzjsInput(this).sendKeys(xtlxPage.zzjsText);//作者介绍
//		xtlxPage.syycInput(this).sendKeys(xtlxPage.syycText);//收益预测
//
//		//切换到  分类  tab 页。
//		xtlxPage.flTab(this).click();//分类 tab
//		xtlxPage.xzflBtn(this).click();//选择分类
//		this.drive.sleep(500);
//		//切换视图到 浮层上。
//		this.drive.switchTo().defaultContent();
//
//		xtlxPage.fl1Check(this).click();//分类 1
//		xtlxPage.fl1SelectYjbts(this).click();//引进版图书
//		this.drive.sleep(50);
//		xtlxPage.bcflBtn(this).click();//保存分类
//		this.drive.sleep(50);
//		xtlxPage.fl1Check(this).click();//分类1
//		xtlxPage.fl1SelectZtflf(this).click();//中图分类法
//		xtlxPage.fl2Check(this).click();//分类2
//		xtlxPage.fl2Select(this).click();//农业科学
//		xtlxPage.fl3Check(this).click();//分类3
//		xtlxPage.fl3Select(this).click();//林业
//		xtlxPage.bcflBtn(this).click();//保存分类
//		this.drive.sleep(1000);
//		xtlxPage.qrflBtn(this).click();//确认分类
//
//		this.drive.sleep(5000);
//		//切换视图回到 iframe 中
//		this.drive.switchTo().frame(frame);
//
//		//切换到  作者信息  tab 页。
//		xtlxPage.zzxxTab(this).click();//作者信息 tab
//		xtlxPage.zzxxBtn(this).click();//选择作者
//		this.drive.sleep(500);
//		//切换视图到 浮层上。
//		this.drive.switchTo().defaultContent();
//
//		xtlxPage.zzlxCheck(this).click();//作者类型
//		xtlxPage.zzlxSelect(this).click();//选择作者类型
//		xtlxPage.zzfsCheck(this).click();//著作方式
//		xtlxPage.zzfsSlect(this).click();//选择著作方式
//		xtlxPage.zzmcInput(this).sendKeys(xtlxPage.zzmcText);//输入作者名称
//		xtlxPage.zzmcCxBtn(this).click();//搜索
//		this.drive.sleep(1000);
//		xtlxPage.zzlbBtn(this).click();// 从人员列表选择
//		this.drive.sleep(50);
//		xtlxPage.zzbcBtn(this).click();//保存
//		//关闭浮层页
//		homePage.closeX(this).click();
//		this.drive.sleep(500);
////****************************************************填写 新建立项申请 基本信息  end **************************************
//		//切换视图回到 iframe 中
//		this.drive.switchTo().frame(frame);
//
//		//点击 保存并继续
//		homePage.startUp(this).click();
//		this.drive.sleep(5000);
//
//		callback();
//	});
//
//	this.Then(/^丛书责任人意见$/, function(callback) {
//		this.drive.switchTo().defaultContent();
//
//		if(xtlxPage.sfsycs=='是'){
//			//切换iframe 到所有任务中。
//			this.drive.sleep(10000);
//			homePage.syrwMenu(this).click();
//			this.drive.sleep(500);
//			var frame = homePage.alltaskIframe(this);
//			this.drive.switchTo().frame(frame);
//			homePage.blButton(this).click();
//			this.drive.sleep(500);
//			//切换tab 页
//			xtlxPage.csTab(this).click();//作者信息 tab
//			xtlxPage.cszrryjInput(this).sendKeys(xtlxPage.cszrryj);//输入作者名称
//			homePage.startUp(this).click();
//			this.drive.sleep(5000);
//		}
//
//		callback();
//	});
//
//
//	this.Then(/^分社长意见$/, function(callback) {
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//
//		this.drive.sleep(500);
//		homePage.syrwMenu(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//
//		homePage.blButton(this).click();
//		this.drive.sleep(500);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换tab 页
//		xtlxPage.xtlxTab(this).click();//选题立项 tab
//		//分社长决定
//		xtlxPage.fszjdCheck(this).click();//作者信息 tab
//		xtlxPage.fszjdSelectTongGuo(this).click();//作者信息 tab
//
//		homePage.startUp(this).click();
//
//		callback();
//	});
//
//	this.Then(/^中法图意见$/, function(callback) {
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//
//		this.drive.sleep(100);
//		homePage.syrwMenu(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//
//		homePage.blButton(this).click();
//		this.drive.sleep(500);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换tab 页
//		this.drive.sleep(500);
//		xtlxPage.xtlxTab(this).click();//选题立项 tab
//		//建议印数
//		xtlxPage.jyysInput(this).sendKeys(xtlxPage.jyysText);//输入建议印数
//		homePage.startUp(this).click();
//
//		callback();
//	});
//
//	this.Then(/^社领导意见$/, function(callback) {
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//
//		this.drive.sleep(100);
//		homePage.syrwMenu(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//
//		homePage.blButton(this).click();
//		this.drive.sleep(500);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换tab 页
//		this.drive.sleep(500);
//		xtlxPage.xtlxTab(this).click();//选题立项 tab
//		//建议印数
//		xtlxPage.jyysInput(this).sendKeys(xtlxPage.jyysText);//输入建议印数
//		homePage.startUp(this).click();
//
//		callback();
//	});
//
//	this.Then(/^选题论证会$/, function(callback) {
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//
//		this.drive.sleep(100);
//		homePage.syrwMenu(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//
//		homePage.blButton(this).click();
//		this.drive.sleep(500);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换tab 页
//		this.drive.sleep(500);
//		xtlxPage.xtlxTab(this).click();//选题立项 tab
//		//建议印数
//		xtlxPage.jyysInput(this).sendKeys(xtlxPage.jyysText);//输入建议印数
//		homePage.startUp(this).click();
//
//		callback();
//	});
//
//	this.Then(/^立项确认$/, function(callback) {
//		//*********************************  以下 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换iframe 到所有任务中。
//		this.drive.switchTo().defaultContent();
//
//		this.drive.sleep(100);
//		homePage.syrwMenu(this).click();
//		var frame = homePage.alltaskIframe(this);
//		this.drive.switchTo().frame(frame);
//
//		homePage.blButton(this).click();
//		this.drive.sleep(500);
//		//*********************************  以上 代码块 重复利用太多，需要 封装成 根据  任务信息，任务名称 点击 对应 流程 的办理 按钮 ************************************
//		//切换tab 页
//		this.drive.sleep(500);
//		xtlxPage.xtlxTab(this).click();//选题立项 tab
//		//建议印数
//		xtlxPage.jyysInput(this).sendKeys(xtlxPage.jyysText);//输入建议印数
//		homePage.startUp(this).click();
//
//		callback();
//	});
//};