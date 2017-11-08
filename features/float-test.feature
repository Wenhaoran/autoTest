## 印务管理 - -  材料出库 测试用例
#
##材料出库 业务测试。
##沙磊登录系统，
##印务材料管理菜单  --》 材料出库 子菜单。
##**************************************************************
#  # 新建材料出库单信息
#  #材料出库单详情
#  #出库单审批
#  #end
##**************************************************************
#Feature: 法律社项目，印务测试用例
#  材料出库测试
#
#  Background:
#    Given use name "xufei" pwd "xufei" login system
#    Then open the to do item
#    Then open all tasks
#
#  @first
#  Scenario: xin jian li xiang shen qing
#    Given open task by
#    When  open sort
#    Then  open float
#    Then  According to the task information "编印务流程-纸质图书-123123" and task name "新建立项申请" to handle the process