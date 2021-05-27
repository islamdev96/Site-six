/*global $, alert, console, jquery, var  */

$(function () {

    'use strict';

    $(window).scroll(function () {
        var nav = $('.navbar');
        if ($(window).scrollTop() >= nav.height()) {
            nav.addClass('scrolled');

        } else {
            nav.removeClass('scrolled');
        }
    });
    // Deal With Tode
    $('.tab-switch li').click(function () {
      // Add selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
      // Hide All Divs
        $('.tabs-section .tabs-content > div').Hide();
      // show div connected with this link
        $($(this).data('Class')).show();

    });


});
