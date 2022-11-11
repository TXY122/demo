$(function(){
	//小屏分页
	$(".plus").click(function() {
		if (!$(this).children("span").hasClass("span")) {
			$(this).children("span").addClass("span")
				.parents("li").siblings().children(".plus").children("span").removeClass("span")
			$(this).siblings().show(300)
				.parents("li").siblings().children(".particulars").hide(300)
		} else {
			$(this).children("span").removeClass("span")
			$(this).siblings().hide(300)
		}
	})
	// 小屏点击
	$(".navbar").click(function() {
		$(this).siblings(".navwrap").addClass("home")
			.siblings(".navbg").addClass("miss")
	})
	$(".navbg").click(function() {
		$(this).siblings(".navwrap").removeClass("home")
		$(this).removeClass("miss")
	})
	// 底部 点击出现
	$(".footerb .r .select").click(function() {
		$(this).children("ul").slideToggle("small")
	})
	/*768以下点击回到顶部*/
	$('.back').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
});