'use strict';

module.exports = {

    //收到原稿时间
    sdygsjTimeBtn : function(my) {//收到原稿时间  时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_f381487b63f44ec4858c8f351ad1d639_Date_Control"]/span' });
    },
    sdygsjInput : function(my) {//收到原稿时间  输入框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_f381487b63f44ec4858c8f351ad1d639"]' });
    },

    //是否二级加急
    ypsfejjjCheck : function(my) {//是否二级加急  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9791961c455b9845ceddda9afce2"]' });
    },
    ypsfejjjSelectS : function(my) {//是否二级加急  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9791961c455b9845ceddda9afce2"]/option[2]' });
    },
    ypsfejjjSelectF : function(my) {//是否二级加急  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_c2bd9791961c455b9845ceddda9afce2"]/option[3]' });
    },


    //是否退排版
    sftpbCheck : function(my) {//是否退排版  选择框//*[@id="productCustom_8956ca6c55a142c8890e4ce2950fbad4"]
        return my.drive.findElement({ xpath : '//*[@id="productCustom_8956ca6c55a142c8890e4ce2950fbad4"]' });
    },
    sftpbSelectS : function(my) {//是否退排版  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_8956ca6c55a142c8890e4ce2950fbad4"]/option[2]' });
    },
    sftpbSelectF : function(my) {//是否退排版  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_8956ca6c55a142c8890e4ce2950fbad4"]/option[3]' });
    },

    //是否三改
    sfsanGCheck : function(my) {//是否三改  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_1014a33d56c049b9b59e8e7363d3553c"]' });
    },
    sfsanGSelectS : function(my) {//是否三改  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_1014a33d56c049b9b59e8e7363d3553c"]/option[2]' });
    },
    sfsanGSelectF : function(my) {//是否三改  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_1014a33d56c049b9b59e8e7363d3553c"]/option[3]' });
    },

    //是否四改
    sfsiGCheck : function(my) {//是否四改  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fbf5d506dd584e48a3f8f50a76422482"]' });
    },
    sfsiGSelectS : function(my) {//是否四改  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fbf5d506dd584e48a3f8f50a76422482"]/option[2]' });
    },
    sfsiGSelectF : function(my) {//是否四改  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fbf5d506dd584e48a3f8f50a76422482"]/option[3]' });
    },

    //是否社内核红
    sfsnhhCheck : function(my) {//是否社内核红  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a38c8d547f4e4a6085a68f97712cee1a"]' });
    },
    sfsnhhSelectS : function(my) {//是否社内核红  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a38c8d547f4e4a6085a68f97712cee1a"]/option[2]' });
    },
    sfsnhhSelectF : function(my) {//是否社内核红  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a38c8d547f4e4a6085a68f97712cee1a"]/option[3]' });
    },

    swhhgshryText:'216516',//社外核红公司或人员
    swhhgshryInput : function(my) {//社外核红公司或人员 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_e1ef6fb5a07a4071b939531c14d204bc"]' });
    },

    //开始时间
    hhkssjInput : function(my) {//开始时间 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_22e683b84c244e0b831b47baf334fe85"]' });
    },
    hhkssjTimeBtn : function(my) {//开始时间 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_22e683b84c244e0b831b47baf334fe85_Date_Control"]/span' });
    },

    //结束时间
    hhjssjInput : function(my) {//结束时间 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_ae849d2a354f460a83a8d234c134a55a"]' });
    },
    hhjssjTimeBtn : function(my) {//结束时间 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_ae849d2a354f460a83a8d234c134a55a_Date_Control"]/span' });
    },



    //是否社内付型整理
    sfsnfxzlCheck : function(my) {//是否社内付型整理  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_92564b40c5e0448e923ffb96ce7e99db"]' });
    },
    sfsnfxzlSelectS : function(my) {//是否社内付型整理  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_92564b40c5e0448e923ffb96ce7e99db"]/option[2]' });
    },
    sfsnfxzlSelectF : function(my) {//是否社内付型整理  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_92564b40c5e0448e923ffb96ce7e99db"]/option[3]' });
    },

    //社外整理公司或人员
    swzlgshryText:'asdf',//社外核红公司或人员
    swzlgshryInput : function(my) {//社外核红公司或人员 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_29ffee484a644ad89d0aaf1e4dc21ccd"]' });
    },

    //付型整理开始时间
    fxzlkssjInput : function(my) {//开始时间 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_da6bb658e5214a57b02df97ba32dda40"]' });
    },
    fxzlkssjTimeBtn : function(my) {//开始时间 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_da6bb658e5214a57b02df97ba32dda40_Date_Control"]/span' });
    },

    //付型整理结束时间
    fxzljssjInput : function(my) {//结束时间 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_1a6b3eddacb849c786682694d1a3f790"]' });
    },
    fxzljssjTimeBtn : function(my) {//结束时间 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_1a6b3eddacb849c786682694d1a3f790_Date_Control"]/span' });
    },

    //审核结论
    shjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_ea18c96d89314a4cb359308cd05daa73"]' });
    },
    shjlSelectTongG : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_ea18c96d89314a4cb359308cd05daa73"]/option[2]' });
    },
    shjlSelectTuiG : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_ea18c96d89314a4cb359308cd05daa73"]/option[3]' });
    },

    //责编收付型样日期
    zbsfxyrqInput : function(my) {//责编收付型样日期 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_eec2cc8c5fac4bfab2be168865085350"]' });
    },
    zbsfxyrqTimeBtn : function(my) {//责编收付型样日期 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_eec2cc8c5fac4bfab2be168865085350_Date_Control"]/span' });
    },
};