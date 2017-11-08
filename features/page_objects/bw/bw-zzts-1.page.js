'use strict';

module.exports = {

	//iframe 中
	cplxinput : function(my) {//产品类型 选择框
		return my.drive.findElement({ xpath : '//*[@id="productTypeSelect"]' });
	},
	zztscheck : function(my) {//纸质图书 单选按钮
		return my.drive.findElement({ xpath : '//*[@id="treeDemo_3_check"]' });
	},
	xjlxsqButton : function(my) {//新建立项申请按钮
		return my.drive.findElement({ xpath : '//*[@id="appAddButton"]' });
	},



	//********************************************** 新建立项申请 参数  ********************************************************************************************
	//  输入必填的基本信息。
	xmmcInput : function(my) {//项目名称
		return my.drive.findElement({ xpath : '//*[@id="title"]' });
	},
	chxzselect : function(my) {//策划性质下拉框
		return my.drive.findElement({ xpath : '//*[@id="proposalProperty"]' });
	},
	chxzcheck : function(my) {//选择策划性质
		return my.drive.findElement({ xpath : '//*[@id="proposalProperty"]/option[3]' });
	},
	yzselect : function(my) {//语种下拉框
		return my.drive.findElement({ xpath : '//*[@id="language"]' });
	},
	yzcheck : function(my) {//选择语种
		return my.drive.findElement({ xpath : '//*[@id="language"]/option[3]' });
	},



//********************************************** 新建选题立项 参数  ********************************************************************************************
	//新建立项申请  选题立项  tab页，分类 tab页，   作者信息 tab页。
	//出版地  //*[@id="productCustom_84f2fcbf5ddd11e49151025041000001"]
	cbdText :'出版地随便写',
	cbdInput : function(my) {//出版地  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fcbf5ddd11e49151025041000001"]' });
	},
	//定价（估）
	djText:'1234',
	djInput : function(my) {//定价  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fccb5ddd11e49151025041000001"]' });
	},
	//印数（估）
	ysText:'5678',
	ysInput : function(my) {//印数  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fce85ddd11e49151025041000001"]' });
	},
	//卷册数
	jcsText:'9012',
	jcsInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fcfc5ddd11e49151025041000001"]' });
	},
	//
	//S 读者对象（法律社）
	dzdxCheck : function(my) {//读者对象  选择框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd045ddd11e49151025041000001"]' });
	},
	dzdxSelect : function(my) {//读者对象  选项
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd045ddd11e49151025041000001"]/option[2]' });
	},
	//S 是否签订合同	*******************************************是否签订合同   影响 流程  是否需要签订合同   分支。

	sfqdhtCheck : function(my) {//是否签订合同  选择框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd295ddd11e49151025041000001"]' });
	},
	sfqdhtSelectS : function(my) {//是否签订合同 是 选项
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd295ddd11e49151025041000001"]/option[2]' });
	},
	sfqdhtSelectF : function(my) {//是否签订合同  否  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd295ddd11e49151025041000001"]/option[3]' });
	},
	//S 是否重点营销
	sfzdyxCheck : function(my) {//是否重点营销  选择框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd4e5ddd11e49151025041000001"]' });
	},
	sfzdyxSelect : function(my) {//是否重点营销  选项
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd4e5ddd11e49151025041000001"]/option[2]' });
	},
	//S 是否属于丛书 ********************************是否属于丛书，影响 丛书责任人意见   这一步。

	sfsycsCheck : function(my) {//是否属于丛书  选择框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd8c5ddd11e49151025041000001"]' });
	},
	sfsycsSelectS : function(my) {//是否属于丛书 是  选项
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd8c5ddd11e49151025041000001"]/option[2]' });
	},
	sfsycsSelectF : function(my) {//是否属于丛书 否  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd8c5ddd11e49151025041000001"]/option[3]' });
	},
	//S 是否有补贴款 *********************************************是否有补贴款  影响流程   是否签订合同   后部  是否有补贴款 自动判定任务

	sfybtkCheck : function(my) {//是否有补贴款  选择框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd735ddd11e49151025041000001"]' });
	},
	sfybtkSelectS : function(my) {//是否有补贴款 是  选项
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd735ddd11e49151025041000001"]/option[2]' });
	},
	sfybtkSelectF : function(my) {//是否有补贴款 否  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd735ddd11e49151025041000001"]/option[3]' });
	},
	//
	//申报人意见
	sbryjText:'申报人意见aaaa',
	sbryjInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdb15ddd11e49151025041000001"]' });
	},
	//策划背景
	chbjText:'策划背景vvvv',
	chbjInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdb95ddd11e49151025041000001"]' });
	},
	//内容简介
	nrjjText:'内容简介bbbb',
	nrjjInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdc15ddd11e49151025041000001"]' });
	},
	//作者介绍
	zzjsText:'作者介绍zzzz',
	zzjsInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdca5ddd11e49151025041000001"]' });
	},
	//收益预测
	syycText:'收益预测ssss',
	syycInput : function(my) {//项目名称  输入框
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_f8121bbf463f446a8ce34759cec92747"]' });
	},


	//分社长决定
	fszjdCheck : function(my) {//分社长决定  选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdfb5ddd11e49151025041000001"]' });
	},
	fszjdSelectTongGuo : function(my) {//分社长决定 通过  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdfb5ddd11e49151025041000001"]/option[2]' });
	},
	fszjdSelectTuiGai : function(my) {//分社长决定 退改  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdfb5ddd11e49151025041000001"]/option[3]' });
	},
	fszjdSelectBTG : function(my) {//分社长决定 不通过  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fdfb5ddd11e49151025041000001"]/option[4]' });
	},


	//中法图意见
	jyysText:'10086',
	jyysInput : function(my) {//项目名称  输入框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe285ddd11e49151025041000001"]' });
	},

	//社领导决定
	sldjdCheck : function(my) {//社领导决定  选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe495ddd11e49151025041000001"]' });
	},
	sldjdSelectTongGuo : function(my) {//社领导决定 通过  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe495ddd11e49151025041000001"]/option[2]' });
	},
	sldjdSelectTuiGai : function(my) {//社领导决定 退改  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe495ddd11e49151025041000001"]/option[3]' });
	},
	sldjdSelectSXTLZH : function(my) {//社领导决定 上选题论证会  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe495ddd11e49151025041000001"]/option[4]' });
	},
	sldjdSelectBTG : function(my) {//社领导决定 不通过  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe495ddd11e49151025041000001"]/option[5]' });
	},

	//选题论证会
	xthbgText:'666',//选题会报告
	xthbgInput : function(my) {//选题会报告  输入框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe5d5ddd11e49151025041000001"]' });
	},

	//中法图意见
	xthchryText:'温浩然，我是温浩然',//选题会参会人员
	xthchryInput : function(my) {//选题会参会人员  输入框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe665ddd11e49151025041000001"]' });
	},
	xthshjdCheck : function(my) {//选题会审核决定  选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe765ddd11e49151025041000001"]' });
	},
	xthshjdSelectTongGuo : function(my) {//选题会审核决定 通过  选项
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe765ddd11e49151025041000001"]/option[2]' });
	},



	//立项确认
	sfylqbtkCheck : function(my) {//是否已领取补贴款 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]' });
	},
	sfylqbtkSelectS : function(my) {//是否已领取补贴款 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]/option[2]' });
	},
	sfylqbtkSelectF : function(my) {//是否已领取补贴款 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]/option[3]' });
	},

	sfyjjjCheck : function(my) {//是否一级加急 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_e661ae215c1b485caaa9a63522c9fb5f"]' });
	},
	sfyjjjSelectS : function(my) {//是否一级加急 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_e661ae215c1b485caaa9a63522c9fb5f"]/option[2]' });
	},
	sfyjjjSelectF : function(my) {//是否一级加急 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_e661ae215c1b485caaa9a63522c9fb5f"]/option[3]' });
	},

	sfyygCheck : function(my) {//是否有原稿 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_5d1087d7c6ba49d185a45c822bb63502"]' });
	},
	sfyygSelectS : function(my) {//是否有原稿 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_5d1087d7c6ba49d185a45c822bb63502"]/option[2]' });
	},
	sfyygSelectF : function(my) {//是否有原稿 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_5d1087d7c6ba49d185a45c822bb63502"]/option[3]' });
	},

	sfsnpygCheck : function(my) {//是否社内排原稿 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0c7f167607ff488b895d45f967d64a94"]' });
	},
	sfsnpygSelectS : function(my) {//是否社内排原稿 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0c7f167607ff488b895d45f967d64a94"]/option[2]' });
	},
	sfsnpygSelectF : function(my) {//是否社内排原稿 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0c7f167607ff488b895d45f967d64a94"]/option[3]' });
	},

	sfejjjCheck : function(my) {//是否二级加急
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0f529ae1cc524919a66307c02f85de15"]' });
	},
	sfejjjSelectS : function(my) {//是否二级加急
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0f529ae1cc524919a66307c02f85de15"]/option[2]' });
	},
	sfejjjSelectF : function(my) {//是否二级加急
		return my.drive.findElement({ xpath : '//*[@id="productCustom_0f529ae1cc524919a66307c02f85de15"]/option[3]' });
	},
//**********************************************************************选题立项tab页 end *******************************************************


////**************************************************************************** 排版 *****************切换 tab页 *************************************************************

	sfsnpbCheck : function(my) {//是否社内排版 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_ed155fad5d694ea69e76d7aafc1c573d"]' });
	},
	sfsnpbSelectS : function(my) {//是否社内排版 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_ed155fad5d694ea69e76d7aafc1c573d"]/option[2]' });
	},
	sfsnpbSelectF : function(my) {//是否社内排版 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_ed155fad5d694ea69e76d7aafc1c573d"]/option[3]' });
	},

	sfsnjdCheck : function(my) {//是否社内校对 选择框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9891961c455b9845ceddda9afce2"]' });
	},
	sfsnjdSelectS : function(my) {//是否社内校对 是
		return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9891961c455b9845ceddda9afce2"]/option[2]' });
	},
	sfsnjdSelectF : function(my) {//是否社内校对 否
		return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9891961c455b9845ceddda9afce2"]/option[3]' });
	},

////**************************************************************************** 排版 ***************** end *************************************************************




	////****************************************************************************分类 *****************切换 tab页 *************************************************************

	//F 选择分类	************************** 分类这里，分类 2、3、4，是根据分类 1 不同，选择是否显示的，我只写 我测试用的，其他需要的，以后补充。
	//其中，分类4，是 自动补全 ，自动补全，查看 xpath 的方法，参考博客。  http://blog.csdn.net/u012246342/article/details/52857971

	//  必须 选择  两个 以上 分类条件，并且  中图分类法比选。
	xzflBtn : function(my) {// 选择分类 按钮
	    return my.drive.findElement({ xpath : '//*[@id="productCustom_84f306cd5ddd11e49151025041000001_click"]' });
	},
	//S 分类1
	fl1Check : function(my) {//分类1  选择框
		return my.drive.findElement({ xpath : '//*[@id="fenlei"]' });
	},
	fl1SelectYjbts : function(my) {//分类1 引进版图书  选项
		return my.drive.findElement({ xpath : '//*[@id="fenlei"]/option[3]' });
	},
	fl1SelectZtflf : function(my) {//分类1 中图分类法  选项
		return my.drive.findElement({ xpath : '//*[@id="fenlei"]/option[9]' });
	},

	//S 分类2
	fl2Check : function(my) {//分类2  选择框
		return my.drive.findElement({ xpath : '//*[@id="select2"]' });
	},
	fl2Select : function(my) {//分类2  选项
		return my.drive.findElement({ xpath : '//*[@id="select2"]/option[6]' });
	},

	//S 分类3
	fl3Check : function(my) {//分类3  选择框
		return my.drive.findElement({ xpath : '//*[@id="select3"]' });
	},
	fl3Select : function(my) {//分类3  选项
		return my.drive.findElement({ xpath : '//*[@id="select3"]/option[13]' });
	},

	//S 分类4
	fl4Check :'', // 分类 4 输入框
	fl4Select : function(my) {//分类4   选项   永远取  分类4 所有选项 的第一项。
		return my.drive.findElement({ xpath : '//*[@id="ui-id-1"]/li[1]' });
	},

	// 保存分类 按钮
	bcflBtn : function(my) {// 保存分类 按钮
		return my.drive.findElement({ xpath : '//*[@id="form"]/div[1]/div/button' });
	},
	// 确认分类 按钮
	qrflBtn : function(my) {// 确认分类 按钮
		return my.drive.findElement({ xpath : '//*[@id="form"]/div[4]/button[1]' });
	},
	////****************************************************************************分类 *****************切换 tab页 end *************************************************************




	////**************************************************************************** 作者信息 *****************切换 tab页 *************************************************************
	//F 选择作者
	zzxxBtn : function(my) {// 选择作者 按钮
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f3057c5ddd11e49151025041000001_click"]' });
	},
	//作者类型
	zzlxCheck : function(my) {// 作者类型 选择框
		return my.drive.findElement({ xpath : '//*[@id="authorTypeId"]' });
	},
	zzlxSelect : function(my) {// 作者类型 选项   我用  第一作者
		return my.drive.findElement({ xpath : '//*[@id="authorTypeId"]/option[2]' });
	},

	//著作方式  *****************著作方式，根据 作者类型 变化  而 变化，需要 用什么类型测试 ，自己补充
	zzfsCheck : function(my) {// 著作方式 选择框
		return my.drive.findElement({ xpath : '//*[@id="authorModeId"]' });
	},
	zzfsSlect : function(my) {// 著作方式 选项     我用 主编
		return my.drive.findElement({ xpath : '//*[@id="authorModeId"]/option[6]' });
	},
	//作者名称
	zzmcText:'杨微波',
	zzmcInput : function(my) {// 作者名称 输入框
		return my.drive.findElement({ xpath : '//*[@id="query_module_name"]' });
	},
	//查询按钮
	zzmcCxBtn : function(my) {//根据作者名称查询   按钮
		return my.drive.findElement({ xpath : '//*[@id="form"]/div/div[2]/button[1]' });
	},
	//列表选择人员
	zzlbBtn : function(my) {// 作者列表  单选
		return my.drive.findElement({ xpath : '//*[@id="datagrid-row-r2-2-0"]/td[1]/div/label' });
	},

	//列表选择人员
	zzbcBtn : function(my) {// 作者列表  单选
		return my.drive.findElement({ xpath : '//*[@id="page-content"]/div/div[5]/div[1]/button' });
	},
	////****************************************************************************作者信息 *****************切换 tab页 end *************************************************************

	cszrryj:'神说：要有光',
	cszrryjInput : function(my) {//项目名称  输入框
		return my.drive.findElement({ xpath : '//*[@id="productCustom_84f3063d5ddd11e49151025041000001"]' });
	},

	/*
	 *    Actions
	 */
	waitForcplxInput : function(my) {
		return my.waitForXpath('//*[@id="page-content"]/div', '选题立项 iframe');
	},
	waitForcpAuto : function(my) {
		return my.waitForXpath('//*[@id="treeDemo_1"]', '产品类型自动补全');
	},

	waitxtlxPage : function(my) {
		return my.waitForXpath('//*[@id="saveAndGoOn"]', '新建选题立项页面');
	},

};