/*global $, alert, console*/

$(function(t){

    'use strict'
    // adjust header height 
    $('.header').height($(window).height());
    $(window).resize(function(){
    $('.header').height($(window).height());
    })
});