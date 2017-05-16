$(document).ready(function(){

$('.readmore').click(showText);
$('.readless').click(hideText);
$('.learnmore').click(showlearnMore);

function showText(){
	event.preventDefault();
	$('#show-this-on-click').slideDown().show();
	$('.readless').show();
	$('.readmore').hide();
}

function hideText() {
	event.preventDefault();
	$('#show-this-on-click').slideUp();
	$('.readless').hide();
	$('.readmore').show('slow');
}

function showlearnMore() {
    event.preventDefault();
    $('.learnmore').hide();
    $('#learnmoretext').slideDown().show();
}


});