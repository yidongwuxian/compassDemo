var dfbx = dfbx || {};
	
	dfbx.init = function() {
	    this.topDropMenu()
	},
	//顶部导航下拉菜单
dfbx.topDropMenu = function() {
	var subList  = $(".sub-list");
	subList.mouseenter(function(){
		var _self = $(this);
		clearTimeout(_self.timer);
		_self.timer = setTimeout(function(){
			_self.addClass("active").find(".sub-nav").show();
		},10);
	}).mouseleave(function(){
		var _self = $(this);
		clearTimeout(_self.timer);
		_self.timer = setTimeout(function(){
			_self.find(".sub-nav").hide().parent().removeClass("active");
		},50);
	});
	
};

if ($.fn.DataTable) {
	$.extend(true, $.fn.DataTable.defaults, {
		//汉化dataTable	
		language: {
			info: "显示第 _START_ - _END_ 条记录，共 _TOTAL_ 条",
            lengthMenu: "显示 _MENU_ 条记录",
            zeroRecords: "没有符合条件的记录",
            infoEmpty: " ",
            emptyTable:"没有符合条件的记录",
            search: "查询：",
            paginate: {
                first: "", last: "",previous: "&lt;", next: "&gt;"
            }
		}
	});
};

function tabs(obj,event){
	var tabsBtn = obj.find(".tabs-btn  li");
	var tabsCon = obj.find(".tabs-con");
	var initShow = tabsBtn.eq(0).attr("data-role");
	
	//处理关于我们、东方咨询等页面通过链接进入时展示当前tab页
	var page =$("#page").val();
	if(page && page != ""){
		var $page = "#"+ page;
		tabsBtn.removeClass("current");
		$(".tabs-btn li[data-role ="+$page+"]").addClass("current");
		$("#tabs").find($page).addClass("current").siblings().removeClass("current");	
	}else{//默认展示第一项
		obj.find(initShow).addClass("current");	
		tabsBtn.eq(0).addClass("current");
	}
	tabsBtn.on(event,function(){
		$(this).addClass("current").siblings().removeClass("current");
		var curShow = tabsBtn.eq($(this).index()).attr("data-role");
		tabsCon.removeClass("current");
		obj.find(curShow).addClass("current");
	})
};		
$(function(){
	dfbx.init();
	if($("#tabs").length != 0){
		tabs($("#tabs"),"click");//统一调用tab切换
	}
});
// 格式化货币
function formatCurrency(num) {
	var sign = "";
	if (isNaN(num)) {
		num = 0;
	}
	if (num < 0) {
		sign = "-";
	}
	/*if(num.toString().indexOf(".") >0){
		num = parseFloat(num).toFixed(2);
	}*/
	num = parseFloat(num).toFixed(2);
	var strNum = num + "";
	var arr1 = strNum.split(".");
	var hasPoint = false;// 是否有小数部分
	var piontPart = "";// 小数部分
	var intPart = strNum;// 整数部分
	if (arr1.length >= 2) {
		hasPoint = true;
		piontPart =arr1[1];
		intPart = arr1[0];
	}

	var res = '';// 保存添加逗号的部分
	var intPartlength = intPart.length;// 整数部分长度
	var maxcount = Math.ceil(intPartlength / 3);// 整数部分需要添加几个逗号
	for (var i = 1; i <= maxcount; i++)// 每三位添加一个逗号
	{
		var startIndex = intPartlength - i * 3;// 开始位置
		if (startIndex < 0)// 开始位置小于0时修正为0
		{
			startIndex = 0;
		}
		var endIndex = intPartlength - i * 3 + 3;// 结束位置
		var part = intPart.substring(startIndex, endIndex) + ",";
		res = part + res;
	}
	res = res.substr(0, res.length - 1);// 去掉最后一个逗号
	if (hasPoint) {
		return sign + res + "." + piontPart;
	} else {
		return sign + res;
	}

}
 
//参考 http://segmentfault.com/q/1010000000473230/a-1020000002475808/revision#r3
// @author wh
// @lastModified 2015-10-21 18:53:44
$.extend({
	standardFormSubmit: function(url, args, method, scope) {
        var $scope = $(scope || document.body);
        var $form = $("<form/>").attr({"method": (method || "post")}).attr({"action": url});
        $.each(args, function(key, value) {
            var $input = $("<input type='hidden'>").attr({"name": key}).val(value);
            $form.append(input);
        });
        $form.appendTo($scope).submit().remove();
    }
});
