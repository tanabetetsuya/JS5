$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '200px',
      'width': '100px'
    }).slideUp();
  });
});