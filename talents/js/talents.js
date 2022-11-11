$(function() {
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
$(function() {
	/*json*/
	$.getJSON("js/talents.json", function(data) {
		// console.log(data) 
		var $three = $(".join2b-three")
		var $ul = $("<ul></ul>")
		$.each(data, function(i, v) {
			var $li = $("<li></li>")
			var $p1 = $("<p>" + v.post + "</p>")
			var $p2 = $("<p>" + v.people + "</p>")
			var $p3 = $("<p>" + v.region + "</p>")
			var $p4 = $("<p>" + v.date + "</p>")
			console.log($p1)
			$li.append($p1)
			$li.append($p2)
			$li.append($p3)
			$li.append($p4)
			$ul.append($li)
		})
		$three.append($ul)
	})
	$.getJSON("js/talents-two.json", function(data) {
		// console.log(data) 
		var $four = $(".join2b-four")
		var $ul = $("<ul></ul>")
		$.each(data, function(i, v) {
			var $li = $("<li></li>")
			var $p1 = $("<p>" + v.post + "</p>")
			var $p2 = $("<p>" + v.people + "</p>")
			var $p3 = $("<p>" + v.region + "</p>")
			var $p4 = $("<p>" + v.date + "</p>")
			console.log($p1)
			$li.append($p1)
			$li.append($p2)
			$li.append($p3)
			$li.append($p4)
			$ul.append($li)
		})
		$four.append($ul)
	})
	$(".join2t>a").click(function(){
		var index = $(".join2t>a").index(this)
		$(this).addClass("active")
		.siblings().removeClass("active")
		$(".join2b>div").eq(index).css("display","block")
		.siblings().css("display","none")
	})
})
