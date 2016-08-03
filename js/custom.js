$('.navbar-toggle').click(function(){
  if( $(this).hasClass('collapsed') ){
    $(this).removeClass('collapsed');
  }else{
    $(this).addClass('collapsed');
  }
 })
