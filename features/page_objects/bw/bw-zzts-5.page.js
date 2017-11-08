'use strict';

module.exports = {

    //是否合同签订完毕
    sfhtqdwbCheck : function(my) {//是否合同签订完毕  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd6b5ddd11e49151025041000001"]' });
    },
    sfhtqdwbSelectS : function(my) {//是否合同签订完毕  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd6b5ddd11e49151025041000001"]/option[2]' });
    },

    //一审情况
    ysqkCheck : function(my) {//一审情况  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]' });
    },
    zbysSelectS : function(my) {//一审情况  责编一审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]/option[2]' });
    },
    zbwtysSelectS : function(my) {//一审情况  责编委托一审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]/option[3]' });
    },
    snwbysSelectS : function(my) {//一审情况  社内文编一审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]/option[4]' });
    },
    bjbysSelectS : function(my) {//一审情况  编校部委托一审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]/option[5]' });
    },
    bjbjgSelectS : function(my) {//一审情况  编校部加工      编校部编辑加工
        return my.drive.findElement({ xpath : '//*[@id="productCustom_a8e6f4c02afa49be90556425be425950"]/option[6]' });
    },

    //选择一审情况时间
    xzysqkInput : function(my) {//选择一审情况时间 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_2c90809e4ee76c10014ee76c116d0088"]' });
    },
    xzysqkTimeBtn : function(my) {//选择一审情况时间 时间控件
        return my.drive.findElement({ xpath : '//*[@id="productCustom_2c90809e4ee76c10014ee76c116d0088_Date_Control"]/span' });
    },

    //判断内外编
    pdnwbCheck : function(my) {//判断内外编  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_69834d795e7111e49151025041000001"]' });
    },
    nbSelect : function(my) {//判断内外编  内编
        return my.drive.findElement({ xpath : '//*[@id="productCustom_69834d795e7111e49151025041000001"]/option[2]' });
    },
    wbSelect : function(my) {//判断内外编  外编
        return my.drive.findElement({ xpath : '//*[@id="productCustom_69834d795e7111e49151025041000001"]/option[3]' });
    },

    //编校部确认审核  审核结论
    BJBQRSHshjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe935ddd11e49151025041000001"]' });
    },
    BJBQRSHshjlSelectTongG : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe935ddd11e49151025041000001"]/option[2]' });
    },
    BJBQRSHshjlSelectTuiG : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fe935ddd11e49151025041000001"]/option[3]' });
    },

    //书稿审读
    ysbgText:'asdf',//一审报告
    ysbgInput : function(my) {//一审报告 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fea75ddd11e49151025041000001"]' });
    },

    SGSDshjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2feaf5ddd11e49151025041000001"]' });
    },
    SGSDshjlSelectTongG : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2feaf5ddd11e49151025041000001"]/option[2]' });
    },
    SGSDshjlSelectTuiG : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2feaf5ddd11e49151025041000001"]/option[3]' });
    },

    //********************填写发稿单
    //选题类型
    xtlxCheck : function(my) {//选题类型  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ff1e5ddd11e49151025041000001"]' });
    },
    xtlxSelect : function(my) {//选题类型
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ff1e5ddd11e49151025041000001"]/option[2]' });
    },

    //本社选题种类
    bsxtzlText:'asdf',//本社选题种类
    bsxtzlInput : function(my) {//本社选题种类 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ff375ddd11e49151025041000001"]' });
    },

    //电话   最少 8为 数字
    dhText:'11111111',//本社选题种类
    dhInput : function(my) {//电话 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffbe5ddd11e49151025041000001"]' });
    },

    //内容提要(不得少于100字)
    nrtyText:'这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.',//本社选题种类
    nrtyInput : function(my) {//内容提要 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffc75ddd11e49151025041000001"]' });
    },

    //作者简介(不得少于50字)
    zzjjText:'这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.这是十个字么,应该够了吧.',//本社选题种类
    zzjjInput : function(my) {//作者简介 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffcb5ddd11e49151025041000001"]' });
    },

    //建议主题词
    jyztcText:'asdfasssss',//建议主题词
    jyztcInput : function(my) {//建议主题词 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffd35ddd11e49151025041000001"]' });
    },

    //图书类型
    tslxCheck : function(my) {//图书类型  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffdb5ddd11e49151025041000001"]' });
    },
    tslxSelect : function(my) {//图书类型
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2ffdb5ddd11e49151025041000001"]/option[2]' });
    },

    //发行范围
    fxfwCheck : function(my) {//发行范围  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fff05ddd11e49151025041000001"]' });
    },
    fxfwSelect : function(my) {//发行范围
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fff05ddd11e49151025041000001"]/option[2]' });
    },

    //读者对象
    dzdxCheck : function(my) {//读者对象  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300005ddd11e49151025041000001"]' });
    },
    dzdxSelect : function(my) {//读者对象
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300005ddd11e49151025041000001"]/option[3]' });
    },

    //本次印量
    bcylText:'666',//本次印量
    bcylInput : function(my) {//本次印量 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300105ddd11e49151025041000001"]' });
    },

    //数量
    slText:'666',//数量
    slInput : function(my) {//数量 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f3008c5ddd11e49151025041000001"]' });
    },

    //版权合同登记号
    bqhtdjhText:'666',//数量
    bqhtdjhInput : function(my) {//版权合同登记号 input
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f300ac5ddd11e49151025041000001"]' });
    },



    //*******************************************************分社长判断二审 ******************************

    //分社长判断二审
    fszpdesCheck : function(my) {//分社长判断二审  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fc974f386308436b9f0878e24b763b75"]' });
    },
    fszesSelect : function(my) {//分社长判断二审   分社长二审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fc974f386308436b9f0878e24b763b75"]/option[2]' });
    },
    bjdesSelect : function(my) {//分社长判断二审   编辑待二审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_fc974f386308436b9f0878e24b763b75"]/option[3]' });
    },


    //书稿二审 , 提交三审 ，审核结论
    SGESshjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fedd5ddd11e49151025041000001"]' });
    },
    SGESshjlSelectZLSS : function(my) {//审核结论  助理三审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fedd5ddd11e49151025041000001"]/option[2]' });
    },
    SGESshjlSelectSLDSS : function(my) {//审核结论  社领导三审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fedd5ddd11e49151025041000001"]/option[3]' });
    },


    //书稿三审
    SGSSshjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fef95ddd11e49151025041000001"]' });
    },
    SGSSshjlSelectTongG : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fef95ddd11e49151025041000001"]/option[2]' });
    },
    SGSSshjlSelectTuiG : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fef95ddd11e49151025041000001"]/option[3]' });
    },

    //是否已领取补贴款
    sfylqbtkCheck : function(my) {//是否已领取补贴款  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]' });
    },
    sfylqbtkSelectS : function(my) {//是否已领取补贴款  是
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]/option[2]' });
    },
    sfylqbtkSelectF : function(my) {//是否已领取补贴款  否
        return my.drive.findElement({ xpath : '//*[@id="productCustom_84f2fd7c5ddd11e49151025041000001"]/option[3]' });
    },


    //选择一审内外编
    xzysnwbCheck : function(my) {//选择一审内外编  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_5ed0fcd1a76044ddb90fa7cfc1d3673f"]' });
    },
    xzysnwbSelectN : function(my) {//选择一审内外编  内编
        return my.drive.findElement({ xpath : '//*[@id="productCustom_5ed0fcd1a76044ddb90fa7cfc1d3673f"]/option[2]' });
    },
    xzysnwbSelectW : function(my) {//选择一审内外编  外编
        return my.drive.findElement({ xpath : '//*[@id="productCustom_5ed0fcd1a76044ddb90fa7cfc1d3673f"]/option[3]' });
    },

    //编校部判断二审
    bjbpdCheck : function(my) {//编校部判断二审  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_283f2ca726894cceac339dfda272b533"]' });
    },
    bjbpdSelectFS : function(my) {//编校部判断二审  分社
        return my.drive.findElement({ xpath : '//*[@id="productCustom_283f2ca726894cceac339dfda272b533"]/option[2]' });
    },
    bjbpdSelectNB : function(my) {//编校部判断二审  内编
        return my.drive.findElement({ xpath : '//*[@id="productCustom_283f2ca726894cceac339dfda272b533"]/option[3]' });
    },
    bjbpdSelectZY : function(my) {//编校部判断二审  再议
        return my.drive.findElement({ xpath : '//*[@id="productCustom_283f2ca726894cceac339dfda272b533"]/option[4]' });
    },


    //内编二审，判断三审
    pdssCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_55b40f86fb0e477baedcb7ba4a203fc1"]' });
    },
    pdssSelectSLDSS : function(my) {//审核结论  社领导三审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_55b40f86fb0e477baedcb7ba4a203fc1"]/option[2]' });
    },
    pdssSelectZLSS : function(my) {//审核结论  助理三审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_55b40f86fb0e477baedcb7ba4a203fc1"]/option[3]' });
    },


    //编校部再议二审
    bjbzyesCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_7a588f0b8b794f01bbeb73c76af8c86e"]' });
    },
    bjbzyesSelectNB : function(my) {//审核结论  内编二审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_7a588f0b8b794f01bbeb73c76af8c86e"]/option[2]' });
    },
    bjbzyesSelectFS : function(my) {//审核结论  分社二审
        return my.drive.findElement({ xpath : '//*[@id="productCustom_7a588f0b8b794f01bbeb73c76af8c86e"]/option[3]' });
    },

    //社领导三审
    SLDshjlCheck : function(my) {//审核结论  选择框
        return my.drive.findElement({ xpath : '//*[@id="productCustom_0ee0fc966bf24c52b939fe8b61bad554"]' });
    },
    SLDshjlSelectTongG : function(my) {//审核结论  通过
        return my.drive.findElement({ xpath : '//*[@id="productCustom_0ee0fc966bf24c52b939fe8b61bad554"]/option[2]' });
    },
    SLDshjlSelectTuiG : function(my) {//审核结论  退改
        return my.drive.findElement({ xpath : '//*[@id="productCustom_0ee0fc966bf24c52b939fe8b61bad554"]/option[3]' });
    },

};