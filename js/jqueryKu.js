$(document).ready(function(){

	$("#imgSlide img").hide();
	$("#statementSlide div").hide();

	$("#imgSlide img").eq(0).fadeIn("fast");
	$("#statementSlide div").eq(0).fadeIn("fast");

	go(1);

	$(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      	if (target.length) {
        		$('html,body').animate({
          		scrollTop: target.offset().top
        		}, 1000);
        		return false;
      	}
    		}
  		});
	});

	$(".circle").bind('mouseover',function(){
		$('.par').hide();
		$('#showCircle').show();
		var eqVal = $(this).index();
		$('.circleArrow').eq( eqVal ).fadeIn();
		$('.par').eq( eqVal ).fadeIn();
	});
	$(".circle").bind('mouseout',function(){
		$('.par').hide();
		$('.circleArrow').hide();
		// $('#KArrow, #SArrow').fadeOut();
		$('#showCircle').hide();
	});
	
})

function go(i) {
	var $img = $("#imgSlide img");
	var $state = $("#statementSlide div");
	setTimeout(function(){
		// $img.not(':eq('+i+')').fadeOut(400);
		// $state.not(':eq('+i+')').fadeOut(400);
		// $img.eq(i).fadeIn(500);
		// $state.eq(i).fadeIn(500);

		$img.animate({
			left: "-200px",
			opacity: "0"},
			300).fadeOut();
		$img.eq(i).fadeIn().animate({
			left: "0",
			opacity: "1"
		}, 300);

		$state.animate({
			right: "-200px",
			opacity: "0"},
			300).fadeOut();
		$state.eq(i).fadeIn().animate({
			right: "0",
			opacity: "1"
		}, 300);

 		if (i==2) i=0;    
 		else i++;
 		go(i);
 		console.log(i);
	},5000);
}