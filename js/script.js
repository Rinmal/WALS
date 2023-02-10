/*global $*/
$('#logo, #page-lind a[href*="#"]').click(function(){
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});

$(function(){
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
