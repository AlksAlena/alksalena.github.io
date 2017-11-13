$(document).ready(function() {

  var cw = $('.circle_center_bg').width();
    $('.circle_center_bg').css({'height':cw+'px'});

  var cw = $('.circle_center').width();
    $('.circle_center').css({'height':cw+'px'});
    
  $(window).resize(function() {
      var cw = $('.circle_center_bg').width();
    $('.circle_center_bg').css({'height':cw+'px'});

    var cw = $('.circle_center').width();
    $('.circle_center').css({'height':cw+'px'});
  }); 

});