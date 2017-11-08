'use strict';

module.exports = {

    //申请日期
    sqrqInput : function(my) {//申请日期 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_846a117c122543df8b79b16153ddbd3a"]' });
    },
    sqrqTimeBtn : function(my) {//申请日期 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_846a117c122543df8b79b16153ddbd3a_Date_Control"]/span' });
    },

    //申请理由
    sqlyText:'asdf',//申请理由
    sqlyInput : function(my) {//申请理由 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_2b5180860fe94087a578c2a7d31b6be6"]' });
    },

    //分社长审批
    fszspCheck : function(my) {//分社长审批  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_4778170912d24e6187a08cebf35d75c2"]' });
    },
    fszspSelectTongG : function(my) {//分社长审批  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_4778170912d24e6187a08cebf35d75c2"]/option[2]' });
    },
    fszspSelectTuiG : function(my) {//分社长审批  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_4778170912d24e6187a08cebf35d75c2"]/option[3]' });
    },

    //社领导审批
    sldspCheck : function(my) {//社领导审批  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c0e3c8ca1ce543eda43d3bb2fb61ef71"]' });
    },
    sldspSelectTongG : function(my) {//社领导审批  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c0e3c8ca1ce543eda43d3bb2fb61ef71"]/option[2]' });
    },
    sldspSelectTuiG : function(my) {//社领导审批  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c0e3c8ca1ce543eda43d3bb2fb61ef71"]/option[3]' });
    },

    //发稿单
    fgdText:'asdfasdfa',//发稿单
    fgdInput : function(my) {//发稿单 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_9e7042a0caccc53fb5ca65eab6592a84"]' });
    },
};