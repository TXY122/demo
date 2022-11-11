$(function(){
	/*第一屏hover效果*/
	$(".container-one ul li").hover(function() {
		$(this).children(".subbox").toggleClass("subbox-one")
	})
	$(".subbox").hover(function() {
		$(this).addClass("subbox-one")
	})
	/*wow*/
	wow = new WOW({
		boxClass: 'wow', // default 盒子类名
		animateClass: 'animated', // default 为animate.css触发css动画的库
		offset: 0, // default 偏移量
		mobile: true, // default 是否支持手机
		live: true // default 检查新元素
	})
	wow.init();
	
})