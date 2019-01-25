/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
(function ($) {
    $.extend($.validator.messages, {
        required: "&nbsp&nbsp该项必须填写！",
        remote: "&nbsp请修正该字段！",
        email: "&nbsp请输入正确格式的电子邮件",
        url: "&nbsp请输入合法的网址",
        date: "&nbsp请输入合法的日期",
        dateISO: "&nbsp请输入合法的日期 (ISO).如：2012-12-12",
        number: "&nbsp请输入合法的数字",
        digits: "&nbsp只能输入整数",
        creditcard: "&nbsp请输入合法的信用卡号",
        equalTo: "&nbsp请再次输入相同的值",
        accept: "&nbsp请输入拥有合法后缀名的字符串",
        maxlength: $.validator.format("&nbsp请输入一个长度最多是 {0} 的字符串"),
        minlength: $.validator.format("&nbsp请输入一个长度最少是 {0} 的字符串"),
        rangelength: $.validator.format("&nbsp请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range: $.validator.format("&nbsp请输入一个介于 {0} 和 {1} 之间的值"),
        max: $.validator.format("&nbsp请输入一个最大为 {0} 的值"),
        min: $.validator.format("&nbsp请输入一个最小为 {0} 的值")
    });
}(jQuery));

//日期验证（对日期的范围作了规定，如2012-33是错误的）
jQuery.validator.addMethod("customDate", function (value, element) {
    return this.optional(element) || /^((19|20)\d{2}-(0?[1-9]|1[0-2]))*$/.test(value);
}, "请输入正确的时间：如2012-12");

//数字验证（只能为数字，且不能为负数）
jQuery.validator.addMethod("numberTwo", function (value, element) {
    return this.optional(element) || /^([0-9]\d*|\d+\.\d+)$/.test(value);
}, "只能为非负数");

//起止年限的判断，（前面的时间必须小于后面的时间）
jQuery.validator.addMethod("TimeToTime", function (value, element) {
    return this.optional(element) || /^((19|20)\d{2}-(19|20)\d{2})$/.test(value);
}, "输入正确的格式如：2009-2013");

//只对年的格式做要求
jQuery.validator.addMethod("Year", function (value, element) {
    return this.optional(element) || /^((19|20)\d{2})$/.test(value);
}, "输入正确的格式如：2009");

//手机号验证
$.validator.addMethod("isMobile", function (value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})|(19[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");