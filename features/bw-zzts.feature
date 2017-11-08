# 编务管理 - -  纸质图书 测试用例
#纸质图书  编务流程测试。
# 用户名  xufei   密码   xufei
#*************************************************************
#*                                                           *
#*                                                           *
#*                         纸质图书                          *
#*                                                           *
#*                                                           *
#*************************************************************
#流程中，所有需要   手动录入数据的步骤  ，都在这里面配置，而其他的流程节点，包括   自动任务，java任务等  ，
#则存在，
#  1、可能在当前流程节点，需要进行 配置校验 方法  ，选择判断走哪条流程节点。
#  2、也可能不配置任何方法。


#     流程每进行一步的所有操作，都 包含到 每个方法中进行声明 ，其中包括。
#    input 输入框 输入，
#    select 选择框，
#    button
#    以及，切换iframe,切换table ，等等。



#法律社项目，编务测试用例
Feature: 法律社项目，编务测试用例
	#纸质图书测试

Background:
  #background 方法,均在 base.setp.js 中定义
  Given 用户名 "xufei" 密码 "xufei" 登录系统
  Then 打开我的任务
  Then 打开待办事项
  Then 打开所有任务

# bw-zzts-1.setp.js
@first
Scenario: 从新建立项申请，到立项确认
  #创建选题立项
  Given 创建选题立项
  #新建立项申请   新建立项申请     是否签订合同  ，是否有补贴款，是否属于丛书   ，都影响 流程步骤，需要标明，当前测试用例，用的是哪些条件。
  # 新建立项申请   选择分类，  分类 1、2、3、4  是根据分类 1 不同，选择是否显示的，我只写 我测试用的，其他需要的，以后补充  到  bw-zzts.pages.js  ctrl +  f (分类 tab 页元素)  ，我选择的分类是，1、引进版图书  和 2、中图分类法 - - 农业科学 - - 林业
  #
  #其中，分类4，是 自动补全 ，自动补全查看 xpath 的方法，参考博客。  http://blog.csdn.net/u012246342/article/details/52857971
  When 新建立项申请
  #丛书责任人意见
  Then 丛书责任人意见
  #分社长意见
  Then 分社长意见
  #中法图意见
  Then 中法图意见
#  #社领导意见
  Then 社领导意见
#  #选题论证会
  Then 选题论证会
#  #立项确认
  Then 立项确认


# bw-zzts-2.setp.js
@first
Scenario: 编辑发设计要求 到 责编意见
#编辑发设计要求 中，
#必填字段
#成品尺寸，如果选择其他，则 特殊尺寸，需要必填 。
#开本，如果选择其他，则 特殊开本 ， 需要必填。
#是否有勒口，如果选择是，则 勒口尺寸，需要必填。
  When  编辑发设计要求
  Then  美编设计
  Then  责编意见

#
# bw-zzts-3.setp.js
@first
Scenario: 是否有原稿  到   图书定价印数折扣通知单
  When  社内排出原稿
  Then  送社外排出原稿
  Then  原稿加工
  Then  社外排版
  # 一排 流程 下  ， 是否直接付型  ，是由  一排选择的二级加急决定。
  Then  一排


#一校级以下情况，需要  是社内校对，且  否二级加急前提。因此拆出单独scenario
@first
Scenario: 一校流程
  When  社内校对，并且不是二级加急
  Then  一校
  Then  申请一校付型
  Then  二改
  Then  二校
  Then  三改
  Then  三校
  Then  四改
  Then  四校

  Then  退排版
   #核红  代码出现问题。
  Then  核红
  Then  付型整理
  Then  责编确认
  Then  责任印制确认

#
# bw-zzts-4.setp.js
@first
Scenario: 是否一级加急  到  申领书号
  When  是否一级加急
  Then  填写一级加急申请
  Then  分社长审批
  Then  社领导审批
  Then  申领书号
  Then  申请CIP
###


#*************************************************************
#*                                                           *
#*                                                           *
#*             下面属于   bw-zzts-5.setp.js                  *
#*                                                           *
#*                                                           *
#*************************************************************
## bw-zzts-5.setp.js
##************************************* 是否需要签订合同  到   图书定价印数折扣通知单 ************************************************************************************************************************************************
@first
Scenario: 是否需要签订合同  到   图书定价印数折扣通知单
  When  签订合同
  Then  书稿初审
#******************************************** 书稿初审 选择 一审情况  一审情况，有三种子 分支     从  书稿初审 （一审情况） 到     三审结束（是否有补贴款）  ******************************
# 一审情况 分支1
@first
Scenario: 编校部编辑加工
  Given 是否属于编校部编辑加工
  When  编校部编辑加工
  Then  内编审核
  Then  外编审核
  Then  编校部编辑确认审核
  Then  书稿一审
  Then  填写发稿单
  Then  分社长判断二审
  Then  书稿二审
  Then  分社长指定二审
  Then  书稿一审 的 社领导三审
  Then  书稿一审 的 书稿三审

#
# 一审情况 分支2
@first
Scenario: 责编一审 和 责编委托一审
  Given 责编一审 和 责编委托一审
  When  书稿一审
  Then  填写发稿单
  Then  分社长判断二审
  Then  书稿二审
  Then  分社长指定二审
  Then  书稿一审 的 社领导三审
  Then  书稿一审 的 书稿三审
#
#
##
### 一审情况 分支3
@first
Scenario: 社内文编一审  和  编校部委托一审
  Given 社内文编一审  和  编校部委托一审
  When  选择一审内外编
  Then  内编一审
  Then  外编一审
  Then  责编填写发稿单
  Then  编校部判断二审
  Then  编校部再议二审
##
###一审情况 中，   内编二审  和  分社长二审  情况太多，流程太乱，因此 再分 scenario   分别为两种情况 1 、内编二审   2、分社长判断二审
##**************************************一审情况，分支3 ******************************************
#1 、内编二审
@first
Scenario: 选择一审内外编 且 内编二审
  Given 选择一审内外编 且 内编二审
  When 内编二审
  Then 判断三审
  Then 一审内外编 的 书稿三审
  Then 一审内外编 的 社领导三审

#
##2、分社长判断二审
@first
Scenario: 选择一审内外编 且 分社长判断二审
  Given 选择一审内外编 且 分社长判断二审
  When  分社长判断二审
  Then  书稿二审
  Then  分社长指定二审
  Then  一审内外编 的 社领导三审
  Then  一审内外编 的 书稿三审
##**************************************一审情况，分支3 ******************************************
##
##
###********************************************   从  书稿初审 （一审情况） 到     三审结束（是否有补贴款）  **********  end  ********************
#
@first
  Scenario: 有补贴款，并且，未领取补贴款 sfybtk:'是' && sfylqbtk:'否'
  Given 是否等待补贴款
  When 等待补贴款
#
#
@first
  Scenario: 不是一级加急，在 是否需要签订合同 流程后，执行 申领书号和申请CIP
  Given 不是 一级加急，不提前申领书号
  Then 申领书号
  Then 申请CIP

#
##************************************* 是否需要签订合同  到   图书定价印数折扣通知单  **********************  end  **************************
#
#*************************************************************
#*                                                           *
#*                                                           *
#*                        end                                *
#*                                                           *
#*                                                           *
#*************************************************************






## bw-zzts-6.setp.js
##图书定价印数折扣通知单  到  填写发印单
#@first
#Scenario: 图书定价印数折扣通知单  到  填写发印单
#  When  图书定价印数折扣通知单
#  Then  分社长审核图书定价印数折扣通知单
#  Then  社领导审核图书定价印数折扣通知单
#  Then  填写发印单
#


## bw-zzts-7.setp.js
#@first
#Scenario: 检查样书印装  到  end
#  When  检查样书印装
#  Then  检查样书内容及印装
#  Then  修改样书错误
#  Then  印务确认