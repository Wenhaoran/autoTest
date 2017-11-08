'use strict';

module.exports = {
    //成品尺寸
    cpccCheck : function(my) {//成品尺寸  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300fa5ddd11e49151025041000001"]' });
    },
    cpccSelectQT : function(my) {//成品尺寸  其他
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300fa5ddd11e49151025041000001"]/option[17]' });
    },
    cpccSelectOther : function(my) {//成品尺寸
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300fa5ddd11e49151025041000001"]/option[5]' });
    },

    //特殊尺寸
    tsccText:'666',//特殊尺寸
    tsccInput : function(my) {//特殊尺寸  输入框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_2c90809e4ee76c10014ee76c116d0080"]' });
    },

    //开本
    kbCheck : function(my) {//开本  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_cac36e9c08ef40a2a620c583c4708ad3"]' });
    },
    kbSelectQT : function(my) {//开本  其他
        return my.drive.findElement({ xpath : '//*[@id="productCustom_cac36e9c08ef40a2a620c583c4708ad3"]/option[14]' });
    },
    kbSelectOther : function(my) {//开本
        return my.drive.findElement({ xpath : '//*[@id="productCustom_cac36e9c08ef40a2a620c583c4708ad3"]/option[5]' });
    },

    //特殊开本
    tskbText:'666',//特殊开本
    tskbInput : function(my) {//特殊开本  输入框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_2c90809e4ee76c10014ee76c116d0081"]' });
    },

    //装帧形式
    zzxsCheck : function(my) {//装帧形式  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301035ddd11e49151025041000001"]' });
    },
    zzxsSelect : function(my) {//装帧形式
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301035ddd11e49151025041000001"]/option[3]' });
    },

    //是否有勒口
    sfylkCheck : function(my) {//是否有勒口  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425951"]' });
    },
    sfylkSelectS : function(my) {//是否有勒口  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425951"]/option[2]' });
    },
    sfylkSelectF : function(my) {//是否有勒口  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425951"]/option[3]' });
    },

    //勒口尺寸
    lkccText:'666',//勒口尺寸
    lkccInput : function(my) {//勒口尺寸  输入框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301095ddd11e49151025041000001"]' });
    },

    //上架建议
    sjjyText:'666',//上架建议
    sjjyInput : function(my) {//上架建议  输入框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301980ddd11e49151025041000001"]' });
    },

    //审核结论
    shjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301e45ddd11e49151025041000001"]' });
    },
    shjlSelectS : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301e45ddd11e49151025041000001"]/option[2]' });
    },
    shjlSelectF : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301e45ddd11e49151025041000001"]/option[3]' });
    },

    //初稿初次时间
    cgccsjTimeBtn : function(my) {//初稿初次时间
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f301725dds11e49151025041000001_Date_Control"]/span/i' });
    },
    cgccsjSelectTime : function(my) {//初稿初次时间
        return my.drive.findElement({ xpath : '/html/body/div[8]/div/div[1]/table/tbody/tr[3]/td[4]' });
    },

};