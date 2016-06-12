$(function () {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
})

$(function() {
	$('#wrap').onclick(show);
	$('.close').onclick(show);
	$('.button-order').onclick(show);
 })
 
function show(state){

					document.getElementById('window').style.display = state;			
					document.getElementById('wrap').style.display = state; 			
			}

$('#btn-send').click(function(e) {
  $.ajax({
      url: "https://formspree.io/olka_krishtal@mail.ru",  
      method: "POST",
      error: function () {
        $('#container').html('<h1>Error!</h1>')
      },
      data: {
             email: enterEmail.value,
             name: enterName.value
             },
      dataType: "json"
  }).done(function() {
     $('#container').html('<h1>Thank you!</h1>')
  } );
  e.preventDefault();
});

$(document).ready(function() {
    var offset = 500;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.arrowUp').fadeIn(duration);
        } else {
            $('.arrowUp').fadeOut(duration);
        }
    });
    
    $('.arrowUp').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});