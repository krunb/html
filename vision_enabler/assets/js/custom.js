 
	/*------------------------------------
		Fixed Navbar
		----------------------------------------*/ 
		$(document).scroll(function () {
			var scroll = $(this).scrollTop();
			var topDist = $(".header").position();
			if (scroll > (topDist.top + 1 )) {
				$(".header").addClass("fixed-top");
			} else {
				$(".header").removeClass("fixed-top"); 
			}

			if (scroll > (topDist.top + 800 )) {
				$(".scroll-to-top").addClass("show");
			} else {
				$(".scroll-to-top").removeClass("show"); 
			}
		});

	/*------------------------------------
		Scroll To Top
		----------------------------------------*/ 
		$(".scroll-to-top").click(function() {
			$("html, body").animate({ scrollTop: 0 }, "slow");
				return false;
		}); 