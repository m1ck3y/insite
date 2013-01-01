$(window).scroll(function () { 
	if($(window).width() > 850) {
		var offset = window.pageYOffset;
			if(offset <= 0) {
				var newHeight = 50 + (offset * -1);
				$("header").animate({ height: newHeight }, 5, function() {
					$("h1.home").animate({ lineHeight: newHeight + "px" }, 5, function() {
						$("header ul li").animate({ lineHeight: newHeight + "px"}, 5);
					});
				});
	  		}
			else if(offset > 0 && offset < 100) {
				$("header").animate({ height: "50px" }, 5, function() {
					$("h1.home").animate({ lineHeight: "50px" }, 5, function() {
						$("header ul li").animate({ lineHeight: "50px"}, 5);
					});
				});
			}
			else {
				$("header").animate({ height: "40px" }, 5, function() {
					$("h1.home").animate({ lineHeight: "40px" }, 5, function() {
						$("header ul li").animate({ lineHeight: "40px"}, 5);
					});
				});
			}
	}
});

$("#show-hide-navigation").on("click",
	function() {
		$("body").toggleClass("show-nav");
	})