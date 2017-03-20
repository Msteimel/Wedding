$(function() {


/*Smooth Scrolling */
$('a[href^="#home"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
   });

$('a[href^="#story"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

$('a[href^="#wedding"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

$('a[href^="#party"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

$('a[href^="#registry"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

$('a[href^="#rsvp"]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

/*Fade in effect */
 $(window).scroll(function() { 
  	$('.fadeInBlock').each( function(i) {
  		var bottom_of_object = $(this).position().top + $(this).outerHeight();
  		var bottom_of_window = $(window).scrollTop() + $(window).height();

  		bottom_of_window = bottom_of_window + 200;

  		if (bottom_of_window > bottom_of_object) {
  			$(this).animate({'opacity':'1'},1000);
  		}
  	});
  });

 $(window).scroll(function() { 
  	$('.fadeInBlockFast').each( function(i) {
  		var bottom_of_object = $(this).position().top + $(this).outerHeight();
  		var bottom_of_window = $(window).scrollTop() + $(window).height();

  		bottom_of_window = bottom_of_window + 200;

  		if (bottom_of_window > bottom_of_object) {
  			$(this).animate({'opacity':'1'},1500);
  		}
  	});
  });

 $(window).scroll(function() { 
  	$('.fadeInBlockMed').each( function(i) {
  		var bottom_of_object = $(this).position().top + $(this).outerHeight();
  		var bottom_of_window = $(window).scrollTop() + $(window).height();

  		bottom_of_window = bottom_of_window + 200;

  		if (bottom_of_window > bottom_of_object) {
  			$(this).animate({'opacity':'1'},2000);
  		}
  	});
  });

 $(window).scroll(function() { 
  	$('.fadeInBlockSlow').each( function(i) {
  		var bottom_of_object = $(this).position().top + $(this).outerHeight();
  		var bottom_of_window = $(window).scrollTop() + $(window).height();

  		bottom_of_window = bottom_of_window + 200;

  		if (bottom_of_window > bottom_of_object) {
  			$(this).animate({'opacity':'1'},2500);
  		}
  	});
  });

});
