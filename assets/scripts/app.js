const Portfolio = function() {
	function makeWords() {
		var words = [
 			{
				text: "fortran",
				weight: 8
			}, {
				text: "ruby",
				weight: 14
			}, {
				text: "c language",
				weight: 3
			}, {
				text: "programming",
				weight: 25
			}, {
				text: "PYTHON",
				weight: 10
			}, {
				text: "JAVA",
				weight: 9
			}, {
				text: "javascript",
				weight: 7
			}, {
				text: "MYSQL",
				weight: 17
			}, {
				text: "django",
				weight: 9
			}, {
				text: "assembly",
				weight: 12
			}, {
				text: "databases",
				weight: 10
			}, {
				text: "html",
				weight: 6
			}, {
				text: "flask",
				weight: 14
			}, {
				text: "APIs",
				weight: 12.3
			}, {
				text: "WEB SCRAPING",
				weight: 9
			}, {
				text: "REST",
				weight: 8
			}, {
				text: "CSS",
				weight: 6
			}, {
				text: "postgres",
				weight: 3
			}, {
				text: "SMTP",
				weight: 10
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 500; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a programmer.", "love everything about code.", "am always improving.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#1e90ff"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	function navigate() {
			document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {edge:'right'});
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation,
		navigate: navigate
	}

}();

Portfolio.navigate();
Portfolio.typeAnimation();
Portfolio.displayWordCloud();


