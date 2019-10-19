$('#btns').on('click',function(){
  $('.toast').toggleClass('show')
});

$('.close').on('click',function(){
  $('.toast').removeClass('show');
});