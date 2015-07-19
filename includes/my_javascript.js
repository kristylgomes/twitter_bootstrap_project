/*  JavaScript Document                      */
/*  Written by Chris Converse for Udemy.com  */

$(document).ready(function(){
	$('.carousel').carousel({interval:6000});
	$('.typeahead').typeahead();
})


function changeSlide(slideNum){

	$('.carousel').carousel('pause');
	$('.carousel').carousel(slideNum);
}