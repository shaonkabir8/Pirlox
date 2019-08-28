$(document).ready(function() {


	// Isotope Initialization
	$('.portfolio-item').isotope();


	// Testimonial Carousel Section
	$('.testimonial-carousel').owlCarousel({
		items:1,
		nav:false,
		autoplay:false,
		dots:true,
		loop:true
	});


	
	// Active Class Changing for Menu
	$('.mainmenu li').on('click' , function() {
		$('.mainmenu li.active').removeClass('active');
		$(this).addClass('active');
	});
});


// Animated Projects Statistics
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};

		$('#number1').jQuerySimpleCounter({end: 548,duration: 4000});
		$('#number2').jQuerySimpleCounter({end: 1465,duration: 3000});
		$('#number3').jQuerySimpleCounter({end: 612,duration: 4100});
		$('#number4').jQuerySimpleCounter({end: 735,duration: 4300});

	

	//Portfolio Page Scripts::

	// Typed Js

	var type = new Typed('.type', {
    strings: [
		    'Designer',
		    'Developer',
		    'Coder',
		    'Tech Entuasiast',
      		],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
  });

	// Another Typed Js for displaying more text 

	var typeing = new Typed('.typeing', {
    strings: [
    			'Check My Latest Work Sample. <br />All of these are my portfolio item. <br />To Know more, Please Feel free to Contact Me. <br /> Bye............'
    		],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    showCursor: true,
    cursorChar: '__',
    autoInsertCss: true
  });
    

