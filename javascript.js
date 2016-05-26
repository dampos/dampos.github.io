
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});



$("#toggle").click(function(){$("body").toggleClass("open")});
$("#nav").click(function(){$("body").removeClass("open")});
$('html').removeClass('no-js');

/*----map------*/ 
