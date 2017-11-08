'use strict';

module.exports = {
		
	/* 
	 *    Web Elements
	 */
//获取当前页面 标题  title
	pageTitle : function(my) {
		return my.drive.getTitle();        
	},
//登录用户名
	enterUserName : function(my) {
		return my.drive.findElement({ id : 'name' });
	},

//登录密码
	enterUserPwd : function(my) {
		return my.drive.findElement({ id : 'pass' });
	},

	//验证码
	enterUserCode : function(my) {
		return my.drive.findElement({ id : 'validateCode' });
	},

	//登录按钮
	clickButton : function(my) {
		return my.drive.findElement({ xpath : '//*[@id="login-box"]/div/div/form/fieldset/div[2]/a' });
	},

	//主页
	zyMenu : function(my) {//主页
		return my.drive.findElement({ xpath : '//*[@id="menuList"]/li[1]/a' });
	},

	//我的任务
	wdrwMenu : function(my) {//我的任务菜单
		return my.drive.findElement({ xpath : '//*[@id="menuList"]/li[2]/a' });
	},
	dbsxMenu : function(my) {//待办事项 子菜单
		return my.drive.findElement({ xpath : '//*[@id="menuList"]/li[2]/ul/li[1]/a' });
	},
	syrwMenu : function(my) {//所有任务 子菜单
		return my.drive.findElement({ xpath : '//*[@id="menuList"]/li[2]/ul/li[2]/a' });
	},

	//tab页 按钮，
	// 主页
	zytabButton : function(my) {//tab页 按钮，
		return my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[1]/div[3]/ul/li[1]/a[1]' });
	},
	//待办事项
	dbsxtabButton : function(my) {//tab页 按钮，
		return my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[1]/div[3]/ul/li[2]/a[1]' });
	},
	//所有任务
	syrwtabButton : function(my) {//tab页 按钮， //*[@id="frameTabs"]/div[1]/div[3]/ul/li[3]/a[1]
		return my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[1]/div[3]/ul/li[3]/a[1]' });
	},
	//第四个tab页的button
	fourtabButton : function(my) {//tab页 按钮，
		return my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[1]/div[3]/ul/li[4]/a[1]' });
	},


	//iframe窗口
	//主页的iframe
	indexIframe : function(my) {
		return	my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[2]/div[1]/div/iframe' });
	},
	//待办事项 iframe
	todoIframe : function(my) {
		return	my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[2]/div[2]/div/iframe' });
	},
	//所有任务 iframe
	alltaskIframe : function(my) {
		return	my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[2]/div[3]/div/iframe' });
	},
	//第四个tab页的 iframe
	fourIframe : function(my) {
		return	my.drive.findElement({ xpath : '//*[@id="frameTabs"]/div[2]/div[4]/div/iframe' });
	},

	//所有任务列表页  中  任务信息，任务名称
	taskInfoEle :function(my,row){//任务信息
		return my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-'+row+'"]/td[2]/div' });
	},
	taskNameEle :function(my,row){//任务名称
		return  my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-'+row+'"]/td[3]/div' });
	},
	taskButtonEle :function(my,row){//办理按钮
		return  my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-'+row+'"]/td[5]/div/div/button[1]' });
	},
	nestPageEle :function(my){// 翻页按钮。
		return  my.drive.findElement({ xpath : '//*[@id="page-content"]/div/div[2]/div[5]/div/div[2]/table/tbody/tr/td[10]/a' });
	},

	//新建页面 启动按钮，流程办理页面，保存并继续按钮
	startUp : function(my) {//启动选题立项
	    return my.drive.findElement({ xpath : '//*[@id="saveAndGoOn"]' });
	},


//*****************************浮层操作  ***************************************************
	//*[@id="dragDialog1"]/div[1]/div/button
	//*[@id="dragDialog2"]/div[1]/div/button

	//*[@id="dragDialog1"]/div[3]
	//*[@id="dragDialog2"]/div[3]

	//所有浮层 右上角 关闭按钮 的xpath ，都是  //*[@id="dragDialog1"]/div[1]/div/button   如果，当前浮层没关闭，又新开图层 ，则 id 变为 dragDialog2 即 xpath 是  //*[@id="dragDialog2"]/div[1]/div/button
	//下面 双击关闭 的  同理 ，分别是 //*[@id="dragDialog1"]/div[3]   和 //*[@id="dragDialog2"]/div[3]
	//操作浮层元素，需要  先 this.drive.switchTo().defaultContent();   因为，图层元素 覆盖整个页面，并不是 在 iframe 中。

	closeX :function(my){// 右上角关闭 X
		return  my.drive.findElement({ xpath : '//*[@id="dragDialog1"]/div[1]/div/button' });
	},
	doubleClickClose :function(my){// 浮层 下方 双击关闭 div
		return  my.drive.findElement({ xpath : '//*[@id="dragDialog1"]/div[3]' });
	},


	//*******************************************************我的任务 页面 ***********************************************
	//任务名称 输入框
	rwmcInput :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="form"]/div[1]/div/div/input' });
	},
	//查询  按钮
	wdrwCXButton : function(my) {//启动选题立项
		return my.drive.findElement({ xpath : '//*[@id="form"]/div[2]/button[1]' });
	},


//****************************		others - float-test.js		************************************************
	//测试浮层   办理按钮
	blButton :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-0"]/td[5]/div/div/button[1]' });
	},

	//测试浮层   分类按钮
	flButton :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="productCustom_84f306c45ddd11e49151025041000001_click"]/a' });
	},

	//测试浮层   选择分类按钮
	xzflButton :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="productCustom_84f306cd5ddd11e49151025041000001_click"]' });
	},
	//测试浮层   选择分类按钮
	fcflButton :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="fenlei"]' });
	},
	//测试浮层   选择分类按钮
	sjgbfc :function(my){
		return  my.drive.findElement({ xpath : '//*[@id="dragDialog1"]/div[3]' });
	},

	//****************************************************************************

	//退出菜单
	logoutMenu : function(my) {
		return my.drive.findElement({ xpath : '//*[@id="user_info"]/small' });
	},

	//退出按钮
	logoutButton : function(my) {
		return my.drive.findElement({ xpath : '//*[@id="user_menu"]/li[5]/a' });
	},

	//是否退出   是
	logoutfloatYes : function(my) {
		return my.drive.findElement({ xpath : '/html/body/div[12]/div/div/button[1]' });
	},


    // **********************************************************************

	/*
	 *    Actions
	 */

	load : function(my) {
		my.drive.get(this.baseUrl());
	},

	waitForUnserName : function(my) {
		return my.waitForId('name', '用户名');
	},

	waitForwdrwOpen : function(my) {
		return my.waitForXpath('//*[@id="user_menu"]/li[5]/a', '退出');
	},

	waitForLogoutButton : function(my) {
		return my.waitForXpath('//*[@id="user_menu"]/li[5]/a', '退出');
	},

	waitForLogoutFloat : function(my) {
		return my.waitForXpath('/html/body/div[12]', '退出页面');
	},

	
    // **********************************************************************

	/*
	 *    Utilities
	 */
	
	baseUrl : function() {   
		return 'http://192.168.0.165:9005/webgate/';
	},	
		
	waitForTimeout : function() {
		return 70;      
	},

	getBLButton : function(taskInfo,taskName,my){
		for(var row = 0;row < 10;row ++){
			var taskInfoEle = my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-'+row+'"]/td[2]/div' });
			var taskNameEle = my.drive.findElement({ xpath : '//*[@id="datagrid-row-r1-2-'+row+'"]/td[3]/div' });

			var taskInfoText  = taskInfoEle.getText();
			var taskNameText = taskNameEle.getText();

			if(taskInfo == taskInfoEle && taskName == taskNameEle){
				return row;
			}
		}
		return '0000';
	}


};