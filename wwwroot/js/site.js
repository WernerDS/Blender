'use strict';

// Page Loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});

// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar-nav li a[href="' + document.location.pathname + '"]').parent('li').addClass('active');
});

// We put modals out of wrapper to working properly
$(document).ready(function(){
	$('.modal').appendTo("body");
});

// Tooltips and Popovers
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('[rel="tooltip"]').tooltip();
});


// Scroller
$(document).ready(function () {
	if($('.scrollbar-inner')[0]) {
        $('.scrollbar-inner').scrollbar().scrollLock();
    }
});

// Clock
'use strict';
$(document).ready(function () {
    if($('.clock')[0]) {
        var newDate = new Date();
        newDate.setDate(newDate.getDate());

        setInterval( function() {
            var seconds = new Date().getSeconds();
            $('.time__sec').html(( seconds < 10 ? '0' : '' ) + seconds);
        },1000);

        setInterval( function() {
            var minutes = new Date().getMinutes();
            $('.time__min').html(( minutes < 10 ? '0' : '' ) + minutes);
        },1000);

        setInterval( function() {
            var hours = new Date().getHours();
            $('.time__hours').html(( hours < 10 ? '0' : '' ) + hours);
        }, 1000);
    }
});