'use strict';

var expect = require('chai').expect;
var homePage = require('../../page_objects/base.page.js');
//编务 纸质图书配置。
var bwzztsBase = require('../../page_objects/bw/bw-zzts-base.page.js');
var bwzzts5 = require('../../page_objects/bw/bw-zzts-5.page.js');

//****************************  Scenario: 是否需要签订合同  到   图书定价印数折扣通知单  ****************************************************

module.exports = function() {

	this.World = require('../../support/world.js').World;


	this.Given(/^是否属于编校部编辑加工$/, function(callback) {
		if(bwzztsBase.ysqk == '编校部加工') {
			console.log('一审情况 选择编校部编辑加工，执行此 Scenario ');
			callback();
		}else{
			callback(new Error('一审情况属于：'+ bwzztsBase.ysqk +'，并不执行 此 Scenario'));
		}
	});

	this.Given(/^责编一审 和 责编委托一审$/, function(callback) {
		if(bwzztsBase.ysqk == '责编一审'|| bwzztsBase.ysqk == '责编委托一审') {
			console.log('一审情况 选择  责编一审 和 责编委托一审  ，执行此 Scenario ');
			callback();
		}else{
			callback(new Error('一审情况属于：'+ bwzztsBase.ysqk +'，并不执行 此 Scenario'));
		}
	});

	this.Given(/^社内文编一审  和  编校部委托一审$/, function(callback) {
		if(bwzztsBase.ysqk == '社内文编一审'|| bwzztsBase.ysqk == '编校部委托一审') {
			console.log('一审情况 选择  社内文编一审  和  编校部委托一审  ，执行此 Scenario ');
			callback();
		}else{
			callback(new Error('一审情况属于：'+ bwzztsBase.ysqk +'，并不执行 此 Scenario'));
		}
	});

	this.Given(/^选择一审内外编 且 内编二审$/, function(callback) {
		if((bwzztsBase.ysqk == '社内文编一审'|| bwzztsBase.ysqk == '编校部委托一审') &&( bwzztsBase.bjbpdes == '内编二审'||bwzztsBase.bjbzyes == '内编二审')) {
			console.log('不是一级加急，不提前申领书号，需要 在签订合同后申领书号，由自动任务1 判断。 ');
			callback();
		}else{
			callback(new Error('属于一级加急，并不执行 此 Scenario'));
		}
	});

	this.Given(/^选择一审内外编 且 分社长判断二审$/, function(callback) {
		if((bwzztsBase.ysqk == '社内文编一审'|| bwzztsBase.ysqk == '编校部委托一审') &&( bwzztsBase.bjbpdes == '分社二审'||bwzztsBase.bjbzyes == '分社二审')) {
			console.log('不是一级加急，不提前申领书号，需要 在签订合同后申领书号，由自动任务1 判断。 ');
			callback();
		}else{
			callback(new Error('属于一级加急，并不执行 此 Scenario'));
		}
	});



	this.Given(/^是否等待补贴款$/, function(callback) {
		if(bwzztsBase.sfybtk == '是' && bwzztsBase.sfylqbtk == '否' ) {
			console.log('有补贴款，并且 未申领补贴款，执行此 Scenario ');
			callback();
		}else{
			callback(new Error('没有补贴款，或补贴款已申领。不执行 此 Scenario'));
		}
	});

	this.Given(/^不是 一级加急，不提前申领书号$/, function(callback) {
		if(bwzztsBase.sfyjjj == '否') {
			console.log('不是一级加急，不提前申领书号，需要 在签订合同后申领书号，由自动任务1 判断。 ');
			callback();
		}else{
			callback(new Error('属于一级加急，并不执行 此 Scenario'));
		}
	});

};