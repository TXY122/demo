$(function() {
	// 导航
	$(".header").hover(function() {
		$(".img img").attr("src", "./images/logo.png")
		$(".icon .wx a>img").attr("src", "images/header_wx2.png")
		$(".icon .email a>img").attr("src", "images/header_email2.png")
	}, function() {
		$(".img img").attr("src", "./images/logo2.png")
		$(".icon .wx a>img").attr("src", "images/header_wx.png")
		$(".icon .email a img").attr("src", "images/header_email.png")
	})
	$(".nav .icon .wx a>img").hover(function() {
		$(this).attr("src", "images/header_wx1.png")
	}, function() {
		$(this).attr("src", "images/header_wx2.png")
	})
	$(".nav .icon .email a>img").hover(function() {
		$(this).attr("src", "images/header_email1.png")
	}, function() {
		$(this).attr("src", "images/header_email2.png")
	})
	//大屏按钮
	var num = 0;
	$(".wrong a").click(function() {
		num++;
		if (num % 2 == 1) {
			$('.wrong a').children("span").css("transform", " translate3d(240px, 0, 0)")
			$('.wrong a').append(
				"<style>.wrong a:before{display: block; transform: rotate(45deg);transition-delay: .1s;}</style>"
			)
			$('.wrong a').append(
				"<style>.wrong a:after{display: block; transform: rotate(-45deg);transition-delay: .2s;}</style>"
			)
			$(".nav").css("opacity", "1")
		} else {
			$('.wrong a').children("span").css("transform", " translate3d(0px, 0, 0)")
			$('.wrong a').append(
				"<style>.wrong a:before{display: block; transform: rotate(45deg) translate3d(400px, 0, 0);transition-delay: .1s;}</style>"
			)
			$('.wrong a').append(
				"<style>.wrong a:after{display: block; transform: rotate(-45deg) translate3d(400px, 0, 0);transition-delay: .2s;}</style>"
			)
			$(".nav").css("opacity", "0")
		}
	})
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
	//第二屏
	$('.counter').countUp({
		delay: 10,
		time: 400,
		live: true,
	})
	// 第三屏
	$(".ind6i ul li").hover(function() {
		$(this).addClass("act")
			.siblings().removeClass("act")
	})
	//第四屏
	$(".ind4_i").hover(function() {
		$(this).css("width", "60%")
			.siblings().addClass("ind4_e")
		$(this).children(".video").children(".video-strat").css("opacity", "0")
		$(this).children(".common_tito").children(".common_tbt").css({
			"top": "-0.5rem",
			"opacity": "0"
		})
		var index = $(this).index()
		var video = document.getElementById('video' + (index + 1))
		video.controls = false
		video.muted = true
		video.loop = -1
		video.play()
	}, function() {
		$(this).css("width", "33.3%").siblings().removeClass("ind4_e")
		$(this).children(".video").children(".video-strat").css("opacity", "1")
		$(this).children(".common_tito").children(".common_tbt").css({
			"top": "0",
			"opacity": "1"
		})
	})
	//第五屏
	$(".center-tab>div ul li").hover(function() {
		$(this).addClass("end")
			.siblings().removeClass("end").css("width", "26%")
			.parent().css("width", "100%");
	})
	var div = $(".center-tab>div").length;
	var ul = $(".center-tab")
	var width = $(".tab-botton").width();
	// var body = $("body").width()
	// console.log(width)
	var minor = 0;
	$(".right-tab").click(function() {
		if (minor == 8) {
			minor == 8;
			$(".center-tab").css({
				"left": -width * 8

			})
			console.log(width * 8)
		} else {
			minor++;
			$(".center-tab").css({
				"left": -width * minor
			})
			console.log(minor)
		}
	})
	$(".left-tab").click(function() {
		if (minor == 0) {
			minor == 0;
			$(".center-tab").css({
				"left": -width * 1

			})
			console.log(width * 1)
		} else {
			minor--;
			$(".center-tab").css({
				"left": -width * minor
			})
			console.log(minor)
		}
	})
	/*底部*/
	$(".footerb .r .select").click(function() {
		$(this).children("ul").slideToggle("small")
	})
	/*720小屏*/
	$("body").hover(function() {
		var width = $("body").width()
		// console.log(width)
		if (width <= 768) {
			$("body").removeClass(
					"top fp-scroll-mac fp-viewing-page1 fp-viewing-page2 fp-viewing-page3 fp-viewing-page4 fp-viewing-page5 fp-viewing-5"
				)
				.addClass("overflow")
			$("html").removeClass("fp-enabled").addClass("overflow")
		} else {
			$("body").addClass("top fp-scroll-mac fp-viewing-page1")
				.removeClass("overflow")
			$("html").addClass("fp-enabled").removeClass("overflow")
		}
	})

})
//fullpage
$(function() {
	$('#ido').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		// scrollBar:true;
		onLeave: function(index, nextIndex, direction) {
			// var video = $("#video").get(0);
			if (nextIndex.index == 1) {
				$(".header").css("display", "block")
				$(".right").css("display", "block")
				$(".container .logo a p").css("color", "#f39800")
				$(".logo a p span").css("border-left", "1px solid #f39800")
				$(".header a").css("color", "#333")
				$(".img img").attr("src", "./images/logo.png")
				$(".icon .wx a>img").attr("src", "images/header_wx2.png")
				$(".icon .email a>img").attr("src", "images/header_email2.png")
				$(" .wrong a span").css("background-color", "#333")
				$(".header").css("display", "block").hover(function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a>img").attr("src", "images/header_email2.png")
				}, function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a img").attr("src", "images/header_email2.png")
				})
				$('.wrong a').append(
					"<style>.wrong a:before{background: #333 !important;}</style>"
				)
				$('.wrong a').append(
					"<style>.wrong a:after{background: #333 !important;}</style>"
				)
			} else if (nextIndex.index == 0) {
				// $(".header").css("display", "block")
				$(".right").css("display", "block")
				$(".container .logo a p").css("color", "#fff")
				$(".logo a p span").css("border-left", "1px solid #fff")
				$(".header a").css("color", "#fff")
				$(".img img").attr("src", "./images/logo2.png")
				$(".icon .wx a>img").attr("src", "images/header_wx.png")
				$(".icon .email a img").attr("src", "images/header_email.png")
				$(" .wrong a span").css("background-color", "#fff")
				$(".header").css("display", "block").hover(function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a>img").attr("src", "images/header_email2.png")
				}, function() {
					$(".img img").attr("src", "./images/logo2.png")
					$(".icon .wx a>img").attr("src", "images/header_wx.png")
					$(".icon .email a img").attr("src", "images/header_email.png")
				})
				$('.wrong a').append(
					"<style>.wrong a:before{background: #fff !important;}</style>"
				)
				$('.wrong a').append(
					"<style>.wrong a:after{background: #fff !important;}</style>"
				)
				var video = document.getElementById('vid')
				video.controls = false
				video.muted = true
				video.loop = 1
				video.play()
			} else if (nextIndex.index == 2) {
				// $(".header").css("display", "block")
				$(".right").css("display", "block")
				$(".container .logo a p").css("color", "#f39800")
				$(".logo a p span").css("border-left", "1px solid #f39800")
				$(".header a").css("color", "#333")
				$(".img img").attr("src", "./images/logo.png")
				$(".icon .wx a>img").attr("src", "images/header_wx2.png")
				$(".icon .email a>img").attr("src", "images/header_email2.png")
				$(" .wrong a span").css("background-color", "#333")
				$(".header").css("display", "block").hover(function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a>img").attr("src", "images/header_email2.png")
				}, function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a img").attr("src", "images/header_email2.png")
				})
				$('.wrong a').append(
					"<style>.wrong a:before{background: #333 !important;}</style>"
				)
				$('.wrong a').append(
					"<style>.wrong a:after{background: #333 !important;}</style>"
				)
			} else if (nextIndex.index == 3) {
				// $(".header").css("display", "block")
				$(".right").css("display", "block")
				$(".container .logo a p").css("color", "#fff")
				$(".logo a p span").css("border-left", "1px solid #fff")
				$(".header a").css("color", "#fff")
				$(".img img").attr("src", "./images/logo2.png")
				$(".icon .wx a>img").attr("src", "images/header_wx.png")
				$(".icon .email a img").attr("src", "images/header_email.png")
				$(" .wrong a span").css("background-color", "#fff")
				$(".header").css("display", "block").hover(function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a>img").attr("src", "images/header_email2.png")
				}, function() {
					$(".img img").attr("src", "./images/logo2.png")
					$(".icon .wx a>img").attr("src", "images/header_wx.png")
					$(".icon .email a img").attr("src", "images/header_email.png")
				})
				$('.wrong a').append(
					"<style>.wrong a:before{background: #fff !important;}</style>"
				)
				$('.wrong a').append(
					"<style>.wrong a:after{background: #fff !important;}</style>"
				)
			} else if (nextIndex.index == 4) {
				$(".right").css("display", "block")
				$(".container .logo a p").css("color", "#f39800")
				$(".logo a p span").css("border-left", "1px solid #f39800")
				$(".header a").css("color", "#333")
				$(".img img").attr("src", "./images/logo.png")
				$(".icon .wx a>img").attr("src", "images/header_wx2.png")
				$(".icon .email a>img").attr("src", "images/header_email2.png")
				$(" .wrong a span").css("background-color", "#333")
				$(".header").css("display", "block").hover(function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a>img").attr("src", "images/header_email2.png")
				}, function() {
					$(".img img").attr("src", "./images/logo.png")
					$(".icon .wx a>img").attr("src", "images/header_wx2.png")
					$(".icon .email a img").attr("src", "images/header_email2.png")
				})
				$('.wrong a').append(
					"<style>.wrong a:before{background: #333 !important;}</style>"
				)
				$('.wrong a').append(
					"<style>.wrong a:after{background: #333 !important;}</style>"
				)
			} else if (nextIndex.index == 5) {
				$(".header").css("display", "none")
				$(".right").css("display", "none")
			}
		}
	});

});
// 轮播图
$(function() {
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		autoplay: {
			delay: 8000,
			disableOnInteraction: false
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		on: {
			slideChangeTransitionEnd: function() {
				// console.log(this.realIndex);
				if (this.realIndex == 2) {
					$(".txt2 .stt").addClass("stt-one")
					$(".ilt").children("a").addClass("ilt-one")
					$(".irt").children("a").addClass("ilt-one")
				} else {
					$(".txt2 .stt").removeClass("stt-one")
					$(".ilt").children("a").removeClass("ilt-one")
					$(".irt").children("a").removeClass("ilt-one")
				};

				if (this.realIndex == 1) {
					$(".srt .stt").addClass("stt-one")
					$(".level .sen").addClass("sen-one")
					$(".srt .xian").addClass("xian-one")
					$(".abtn").addClass("abtn-one")
				} else {
					$(".srt .stt").removeClass("stt-one")
					$(".level .sen").removeClass("sen-one")
					$(".srt .xian").removeClass("xian-one")
					$(".abtn").removeClass("abtn-one")
				};
			}
		},
	});
})
$(function() {
	// 轮播图第一屏
	$(".text").children("h4").css({
		"opacity": "1",
		"padding-top": "0rem"
	}).siblings("h6").css({
		"opacity": "1",
		"padding-top": "0rem"
	})
})
$(function() {
	/*768以下*/
	var swiper = new Swiper(".Swiper", {
		pagination: {
			el: ".swiper-pagination",
		},
	});
	$('.back').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
})
// $(function(){
// 	scheduleX({
// 	    fulfill: 100, //进度条,开始数字
// 	    // listAll: 100, //总数
// 	    speed: 30, //动画速度，可选，默认25,越小越快
// 	    again: true, //选择数改变动画是否从零开始，默认true从零开始
// 	    // bgColor: "#7a7a7a", //底部颜色
// 	    listColor: "#fdcf12", //伸缩条颜色
// 	    scWidth: "1.6", //进度条宽度
// 	    scHeight: "0.02", //进度条高度
// 	    // WateringTree: WateringTrees //点击
// 	});
// })
// $(function(){
// 		$("#loading").addClass("hide")
// 		// .css("display","none")
// })
