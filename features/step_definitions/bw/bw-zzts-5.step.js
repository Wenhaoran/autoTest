'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts5 = require('../../page_objects/bw/bw-zzts-5.page.js');

//****************************  Scenario: 是否需要签订合同  到   图书定价印数折扣通知单  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;

	this.When(/^签订合同$/, function(callback) {
		if(bwzztsBase.sfqdht == '是'){
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('签订合同');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.xtlxTab(this).click();//选题立项 tab

			//是否签订合同完毕
			bwzzts5.sfhtqdwbCheck(this).click();
			bwzzts5.sfhtqdwbSelectS(this).click();

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^书稿初审$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('书稿初审');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************


		bwzzts5.ysqkCheck(this).click();//是否退排版 是
		if(bwzztsBase.ysqk =='责编一审'){
			bwzzts5.zbysSelectS(this).click();//是否退排版 是
		}else if(bwzztsBase.ysqk =='责编委托一审'){
			bwzzts5.zbwtysSelectS(this).click();//是否退排版 否
		}else if(bwzztsBase.ysqk =='社内文编一审'){
			bwzzts5.snwbysSelectS(this).click();//是否退排版 否
		}else if(bwzztsBase.ysqk =='编校部委托一审'){
			bwzzts5.bjbysSelectS(this).click();//是否退排版 否
		}else if(bwzztsBase.ysqk =='编校部加工'){
			bwzzts5.bjbjgSelectS(this).click();//是否退排版 否
		}

		bwzzts5.xzysqkTimeBtn(this).click();//选择一审情况时间
		bwzzts5.xzysqkInput(this).click();//选择一审情况时间

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});


	this.When(/^选择一审内外编$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('选择一审内外编');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//选择一审内外编
		bwzzts5.xzysnwbCheck(this).click();
		if(bwzztsBase.xzysnwb=='内编'){
			bwzzts5.xzysnwbSelectN(this).click();
		}else{
			bwzzts5.xzysnwbSelectW(this).click();
		}

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^内编一审$/, function(callback) {
		if(bwzztsBase.xzysnwb=='内编') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('内编一审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.fgdTab(this).click();//发稿单 tab

			bwzzts5.xtlxCheck(this).click();//选题类型
			bwzzts5.xtlxSelect(this).click();//选题类型

			//bwzzts5.bsxtzlInput(this).sendKeys(bwzzts5.bsxtzlText);
			bwzzts5.dhInput(this).sendKeys(bwzzts5.dhText);//电话

			bwzzts5.nrtyInput(this).sendKeys(bwzzts5.nrtyText);//内容提要
			bwzzts5.zzjjInput(this).sendKeys(bwzzts5.zzjjText);//作者简介

			bwzzts5.jyztcInput(this).sendKeys(bwzzts5.jyztcText);//建议主题词

			bwzzts5.tslxCheck(this).click();//图书类型
			bwzzts5.tslxSelect(this).click();//图书类型

			bwzzts5.fxfwCheck(this).click();//发行范围
			bwzzts5.fxfwSelect(this).click();//发行范围

			bwzzts5.dzdxCheck(this).click();//读者对象
			bwzzts5.dzdxSelect(this).click();//读者对象

			bwzzts5.slInput(this).sendKeys(bwzzts5.slText);//数量
			bwzzts5.bqhtdjhInput(this).sendKeys(bwzzts5.bqhtdjhText);//版权合同登记号

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^外编一审$/, function(callback) {
		if(bwzztsBase.xzysnwb=='外编') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('外编一审');
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

	this.Then(/^责编填写发稿单$/, function(callback) {
		if(bwzztsBase.xzysnwb=='外编') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('责编填写发稿单');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.fgdTab(this).click();//发稿单 tab

			bwzzts5.xtlxCheck(this).click();//选题类型
			bwzzts5.xtlxSelect(this).click();//选题类型

			//bwzzts5.bsxtzlInput(this).sendKeys(bwzzts5.bsxtzlText);
			bwzzts5.dhInput(this).sendKeys(bwzzts5.dhText);//电话

			bwzzts5.nrtyInput(this).sendKeys(bwzzts5.nrtyText);//内容提要
			bwzzts5.zzjjInput(this).sendKeys(bwzzts5.zzjjText);//作者简介

			bwzzts5.jyztcInput(this).sendKeys(bwzzts5.jyztcText);//建议主题词

			bwzzts5.tslxCheck(this).click();//图书类型
			bwzzts5.tslxSelect(this).click();//图书类型

			bwzzts5.fxfwCheck(this).click();//发行范围
			bwzzts5.fxfwSelect(this).click();//发行范围

			bwzzts5.dzdxCheck(this).click();//读者对象
			bwzzts5.dzdxSelect(this).click();//读者对象

			bwzzts5.slInput(this).sendKeys(bwzzts5.slText);//数量
			bwzzts5.bqhtdjhInput(this).sendKeys(bwzzts5.bqhtdjhText);//版权合同登记号

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^编校部判断二审$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('编校部判断二审');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************

		bwzzts5.bjbpdCheck(this).click();//读者对象
		if(bwzztsBase.bjbpdes=='分社二审') {
			bwzzts5.bjbpdSelectFS(this).click();//读者对象
		}else if(bwzztsBase.bjbpdes=='内编二审'){
			bwzzts5.bjbpdSelectNB(this).click();//读者对象
		}else if(bwzztsBase.bjbpdes=='编校部再议'){
			bwzzts5.bjbpdSelectZY(this).click();//读者对象
		}

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^编校部再议二审$/, function(callback) {
		if(bwzztsBase.bjbpdes=='编校部再议') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('编校部再议二审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			bwzzts5.bjbzyesCheck(this).click();
			if(bwzztsBase.bjbzyes == '内编二审'){
				bwzzts5.bjbzyesSelectNB(this).click();
			}else{
				bwzzts5.bjbzyesSelectFS(this).click();
			}

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.When(/^内编二审$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('内编二审');
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

	this.When(/^判断三审$/, function(callback) {
		//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('判断三审');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		bwzzts5.pdssCheck(this).click();//读者对象
		if(bwzztsBase.nbespdss =='社领导三审'){
			bwzzts5.pdssSelectSLDSS(this).click();//读者对象
		}else{
			bwzzts5.pdssSelectZLSS(this).click();//读者对象
		}

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.When(/^编校部编辑加工$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('编校部编辑加工');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//判断内外编
		bwzzts5.pdnwbCheck(this).click();//判断内外编
		if(bwzztsBase.pdnwb == "内编"){
			bwzzts5.nbSelect(this).click();//判断内外编
		}else {
			bwzzts5.wbSelect(this).click();//判断内外编
		}


		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^内编审核$/, function(callback) {
		if(bwzztsBase.pdnwb=="内编"){
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('内编审核');
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


	this.Then(/^外编审核$/, function(callback) {
		if(bwzztsBase.pdnwb=="外编") {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('外编审核');
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

	this.Then(/^编校部编辑确认审核$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('编校部编辑确认审核');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************

		bwzzts5.BJBQRSHshjlCheck(this).click();//审核结论
		bwzzts5.BJBQRSHshjlSelectTongG(this).click();//审核结论

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^书稿一审$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('书稿一审');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.sgsdTab(this).click();//书稿审读 tab

		bwzzts5.ysbgInput(this).sendKeys(bwzzts5.ysbgText);//一审报告

		bwzzts5.SGSDshjlCheck(this).click();//审核结论
		bwzzts5.SGSDshjlSelectTongG(this).click();//审核结论

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^填写发稿单$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('填写发稿单');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		//切换tab 页
		bwzztsBase.fgdTab(this).click();//发稿单 tab

		bwzzts5.xtlxCheck(this).click();//选题类型
		bwzzts5.xtlxSelect(this).click();//选题类型

		//bwzzts5.bsxtzlInput(this).sendKeys(bwzzts5.bsxtzlText);
		bwzzts5.dhInput(this).sendKeys(bwzzts5.dhText);//电话

		bwzzts5.nrtyInput(this).sendKeys(bwzzts5.nrtyText);//内容提要
		bwzzts5.zzjjInput(this).sendKeys(bwzzts5.zzjjText);//作者简介

		bwzzts5.jyztcInput(this).sendKeys(bwzzts5.jyztcText);//建议主题词

		bwzzts5.tslxCheck(this).click();//图书类型
		bwzzts5.tslxSelect(this).click();//图书类型

		bwzzts5.fxfwCheck(this).click();//发行范围
		bwzzts5.fxfwSelect(this).click();//发行范围

		bwzzts5.dzdxCheck(this).click();//读者对象
		bwzzts5.dzdxSelect(this).click();//读者对象

		bwzzts5.slInput(this).sendKeys(bwzzts5.slText);//数量
		bwzzts5.bqhtdjhInput(this).sendKeys(bwzzts5.bqhtdjhText);//版权合同登记号

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^分社长判断二审$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('分社长判断二审');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************
		bwzzts5.fszpdesCheck(this).click();//分社长判断二审
		if(bwzztsBase.fszpdes =='分社长二审'){
			bwzzts5.fszesSelect(this).click();//分社长判断二审		分社长二审，走  书稿二审
		}else{
			bwzzts5.bjdesSelect(this).click();//分社长判断二审		编辑代二审，走	分社长指定二审
		}

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

	this.Then(/^书稿二审$/, function(callback) {
		if(bwzztsBase.fszpdes =='分社长二审') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('书稿二审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGESshjlCheck(this).click();//审核结论
			if(bwzztsBase.pdss=='提交社领导助理三审'){
				bwzzts5.SGESshjlSelectZLSS(this).click();//提交社领导助理三审
			}else{
				bwzzts5.SGESshjlSelectSLDSS(this).click();//提交社领导三审
			}

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^分社长指定二审$/, function(callback) {
		if(bwzztsBase.fszpdes =='编辑代二审') {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('分社长指定二审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGESshjlCheck(this).click();//审核结论
			if(bwzztsBase.pdss=='提交社领导助理三审'){
				bwzzts5.SGESshjlSelectZLSS(this).click();//提交社领导助理三审
			}else{
				bwzzts5.SGESshjlSelectSLDSS(this).click();//提交社领导三审
			}

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^社领导三审$/, function(callback) {
		if(bwzztsBase.pdss =='提交社领导三审'|| bwzztsBase.nbespdss == '社领导三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('社领导三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SLDshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SLDshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});

	this.Then(/^书稿三审$/, function(callback) {
		//1、选择一审内外编 分社二审，编辑代二审，提交社领导助理三审。
		if((bwzztsBase.ysqk == '社内文编一审'|| bwzztsBase.ysqk == '编校部委托一审') && (( ( bwzztsBase.bjbpdes == '内编二审'|| bwzztsBase.bjbzyes == '内编二审') && bwzztsBase.nbespdss == '社领导助理三审' )||( ( bwzztsBase.bjbpdes == '分社二审'|| bwzztsBase.bjbzyes == '分社二审') && bwzztsBase.pdss == '提交社领导助理三审' ))){}
		if(bwzztsBase.pdss == '提交社领导助理三审' || bwzztsBase.nbespdss == '社领导助理三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('书稿三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGSSshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SGSSshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});


	this.When(/^等待补贴款$/, function(callback) {
//******************************************************
		//切换iframe 到所有任务中。
		this.drive.switchTo().defaultContent();
		this.drive.sleep(100);
		homePage.syrwMenu(this).click();
		this.drive.sleep(500);
		var frame = homePage.alltaskIframe(this);
		this.drive.switchTo().frame(frame);

		homePage.rwmcInput(this).sendKeys('签订合同');
		homePage.wdrwCXButton(this).click();
		this.drive.sleep(500);
		homePage.blButton(this).click();
		this.drive.sleep(500);
		//**********************************************************

		bwzzts5.sfylqbtkCheck(this).click();//是否已领取补贴款
		bwzzts5.sfylqbtkSelectS(this).click();//是否已领取补贴款

		//点击 保存并继续
		homePage.startUp(this).click();
		this.drive.sleep(5000);
		callback();
	});

//************************************* 下面是很乱的地方，我稍微说一下 文字说明 *************************************************




// ************************************    下面是   书稿一审 的  社领导三审，和 书稿三审 ****************************************

	this.Then(/^书稿一审 的 社领导三审$/, function(callback) {
		var fsxzSGSS =    bwzztsBase.pdss == '提交社领导三审';
		if (fsxzSGSS){
		//if(bwzztsBase.pdss =='提交社领导三审'|| bwzztsBase.nbespdss == '社领导三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('社领导三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGSSshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SGSSshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});


	this.Then(/^书稿一审 的 书稿三审$/, function(callback) {
		var fsxzSGSS =  bwzztsBase.pdss == '提交社领导助理三审';
		if (fsxzSGSS){
		//1、选择一审内外编 分社二审，编辑代二审，提交社领导助理三审。
		//if(bwzztsBase.pdss == '提交社领导助理三审' || bwzztsBase.nbespdss == '社领导助理三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('书稿三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGSSshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SGSSshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});








// ************************************    下面是   一审内外编的  社领导三审，和 书稿三审 ****************************************


	this.Then(/^一审内外编 的 社领导三审$/, function(callback) {
		var nbxzSGSS =  ( bwzztsBase.bjbpdes == '内编二审'|| bwzztsBase.bjbzyes == '内编二审') && bwzztsBase.nbespdss == '社领导三审' ;
		var fsxzSGSS =  ( bwzztsBase.bjbpdes == '分社二审'|| bwzztsBase.bjbzyes == '分社二审') && bwzztsBase.pdss == '提交社领导三审';
		if (nbxzSGSS || fsxzSGSS){
		//if(bwzztsBase.pdss =='提交社领导三审'|| bwzztsBase.nbespdss == '社领导三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('社领导三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SLDshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SLDshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});


	this.Then(/^一审内外编 的 书稿三审$/, function(callback) {
		//1、选择一审内外编 分社二审，编辑代二审，提交社领导助理三审。
		var nbxzSGSS =  ( bwzztsBase.bjbpdes == '内编二审'|| bwzztsBase.bjbzyes == '内编二审') && bwzztsBase.nbespdss == '社领导助理三审' ;
		var fsxzSGSS =  ( bwzztsBase.bjbpdes == '分社二审'|| bwzztsBase.bjbzyes == '分社二审') && bwzztsBase.pdss == '提交社领导助理三审';
		if (nbxzSGSS || fsxzSGSS){
		//if(bwzztsBase.pdss == '提交社领导助理三审' || bwzztsBase.nbespdss == '社领导助理三审' ) {
			//******************************************************
			//切换iframe 到所有任务中。
			this.drive.switchTo().defaultContent();
			this.drive.sleep(100);
			homePage.syrwMenu(this).click();
			this.drive.sleep(500);
			var frame = homePage.alltaskIframe(this);
			this.drive.switchTo().frame(frame);

			homePage.rwmcInput(this).sendKeys('书稿三审');
			homePage.wdrwCXButton(this).click();
			this.drive.sleep(500);
			homePage.blButton(this).click();
			this.drive.sleep(500);
			//**********************************************************
			//切换tab 页
			bwzztsBase.sgsdTab(this).click();//书稿审读 tab

			bwzzts5.SGSSshjlCheck(this).click();//书稿三审，审核结论
			bwzzts5.SGSSshjlSelectTongG(this).click();//书稿三审，审核结论

			//点击 保存并继续
			homePage.startUp(this).click();
			this.drive.sleep(5000);
		}
		callback();
	});



};