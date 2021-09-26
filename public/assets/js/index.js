/* FUCK jQuery, we use vanilla js!
$( document ).ready(function() {
  let bg = 'https://picsum.photos/' + screen.width + '/' + screen.height;
  $( 'body' ).css( 'background-image', `url(${bg})` );
  $( ".basement" ).dblclick(function(){
    $( this ).fadeOut( "slow" );
  });
});
*/
function $(selector){
  return document.querySelector(selector);
}

function fadeOutEffect(selector, time) {
    var fadeTarget = $(selector);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, time);
}

window.onload = function(){
  let bg = 'https://picsum.photos/' + screen.width + '/' + screen.height;
  $( 'body' ).style.backgroundImage = `url(${bg})`;
  $( '.basement' ).ondblclick = fadeOutEffect( '.basement', 1000 );
}
