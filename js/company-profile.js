$(function() {
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
	/*第一屏hover效果*/
	$(".container-one ul li").hover(function() {
		$(this).children(".subbox").toggleClass("subbox-one")
	})
	$(".subbox").hover(function() {
		$(this).addClass("subbox-one")
	})
	/*导航高度*/
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if (scrollTop > 100) {
			$(".header").addClass("header-one")
			$(".home>li").hover(function() {
				$(this).children(".profile").addClass("top")
			}, function() {
				$(this).children(".profile").removeClass("top")
			})
		}else if (scrollTop < 100) {
			$(".header").removeClass("header-one")
		}
	}
	/*wow*/
	wow = new WOW({
		boxClass: 'wow', // default 盒子类名
		animateClass: 'animated', // default 为animate.css触发css动画的库
		offset: 0, // default 偏移量
		mobile: true, // default 是否支持手机
		live: true // default 检查新元素
	})
	wow.init();
	/*左右点击按钮*/
	var li = $(".portion ul li").width()
	var portion = $(".portion").width()
	var w = 0;
	var body = $("body").width()
	$(".next").click(function() {
		w++;
		if (body>768) {
			if (w > 34) {
				w = 34;
				$(".portion ul").stop(true,true).animate({
					marginLeft: '-='+0
				}, 400);
			} else {
				var li = $(".portion ul li").width()
				$(".portion ul").stop(true,true).animate({
					marginLeft: '-='+(li + 30)
				}, 400);
				console.log(w)
			}
		}else{
			if (w > 38) {
				w = 38;
				$(".portion ul").stop(true,true).animate({
					marginLeft: '-=' + 0
				}, 400);
			} else {
				var li = $(".portion ul li").width()
				$(".portion ul").stop(true,true).animate({
					marginLeft: '-=' +(li+10)
				}, 400);
			}
		}
	})
	$(".prev").click(function() {
		w--;
		if(body>768){
			if (w < 0) {
			w = 0;
			$(".portion ul").stop(true).animate({
				marginLeft: '+=' +0
			}, 400);
		} else {
			var li = $(".portion ul li").width()
			$(".portion ul").stop(true).animate({
				marginLeft: '+='+(li + 30)
			}, 400);
		}
		}else{
			if (w < 0) {
				w = 0;
				$(".portion ul").stop(true).animate({
					marginLeft: '+=' + 0
				}, 400);
			} else {
				var li = $(".portion ul li").width()
				$(".portion ul").stop(true).animate({
					marginLeft: '+=' + (li+10) 
				}, 400);
			}
		}
		
	})
	/*点击跳动*/
	$(".about2 .abtn li").click(function() {
		var index = $(".about2 .abtn li").index(this)
		$(this).addClass("act").siblings().removeClass("act")
		var body = $("body").width()
		console.log(body)
		if(body>768){
			if (index == 0) {
			$(".portion ul").stop().css({
				marginLeft: (li * 0)
			});
			w = 0;
		} else if (index == 1) {
			w = 12;
			$(".portion ul").stop().css({
				marginLeft: -((li + 30) * 12)
			});
		} else if (index == 2) {
			w = 21;
			$(".portion ul").stop().css({
				marginLeft: -((li + 30) * 21)
			});
		} else if (index == 3) {
			w = 31;
			$(".portion ul").stop().css({
				marginLeft: -((li + 30) * 31)
			});
		}
		}else{
			if (index == 0) {
				$(".portion ul").stop().css({
					marginLeft: (li * 0)
				});
				w = 0;
			} else if (index == 1) {
				w = 12;
				$(".portion ul").stop().css({
					marginLeft: -((li + 10) * 12)
				});
			} else if (index == 2) {
				w = 21;
				$(".portion ul").stop().css({
					marginLeft: -((li + 10) * 21)
				});
			} else if (index == 3) {
				w = 31;
				$(".portion ul").stop().css({
					marginLeft: -((li + 10) * 31)
				});
			}
		}
		
	})
	/*数字滚动*/
	$('.counter').countUp({
		delay: 10,
		time: 800,
		live: true,
	})
	/*about4*/
	$(".about4 .year li").click(function(){
		$(this).addClass("year-one")
		.siblings().removeClass("year-one")
		var index = $(".about4 .year li").index(this)
		$(".about4 .art li").eq(index).css("display","block")
		.siblings().css("display","none")
	})
	$(".about4 .lrt div").hover(function(){
		var index =$(".about4 .lrt div").index(this)
		$(this).addClass("act")
		.siblings().removeClass("act")
		$(".about4 .llt img").eq(index).css("display","block")
		.siblings().css("display","none")
	})
	/*about5 tab切换*/
	$(".about5 .abtn span").click(function(){
		var index = $(".about5 .abtn span").index(this)
		console.log(index)
		$(this).addClass("act")
		.siblings().removeClass("act")
		$(".about5 .tc div").eq(index).css("display","block")
		.siblings().css("display","none")
		$(".about5 .dl1>div").eq(index).css("display","block")
		.siblings().css("display","none")
	})
	/*about5 第二屏tab 切换*/
	$(".about5 .dl1 .dbtn span").click(function(){
		var index = $(".about5 .dl1 .dbtn span").index(this)
		$(this).addClass("att")
		.siblings().removeClass("att")
		$(".about5 .dl1 .drt .ul1 li").eq(index).fadeIn(100)
		.siblings().fadeOut(100)
	})
});
