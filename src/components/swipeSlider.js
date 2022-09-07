document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let xDown = null;
let yDown = null;
 
function getTouches(evt) {
return evt.touches;
}
 
function handleTouchStart(evt) {
const firstTouch = getTouches(evt)[0];
xDown = firstTouch.clientX;
yDown = firstTouch.clientY;
};
 
function handleTouchMove(evt) {
if (!xDown) {
return;
}
 
let xUp = evt.touches[0].clientX;
let xDiff = xDown - xUp;
 
if (Math.abs( xDiff )) {
if ( xDiff < 0 ) {

} else {

}
} else {
}

xDown = null;
yDown = null;
};