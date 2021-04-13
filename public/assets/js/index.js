$( document ).ready(function() {
  let bg = 'https://picsum.photos/' + screen.width + '/' + screen.height;
  $( 'body' ).css( 'background-image', `url(${bg})` );
  $( ".basement" ).dblclick(function(){
    $( this ).fadeOut( "slow" );
  });
});
