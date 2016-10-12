console.log('Loaded!');

var element = document.getElementById('new');
element.innerHTML = 'Client javascript is running..!';

var img = document.getElementById('madi');
var moveleft = 0;
function moveRight(){
    moveleft = moveleft + '10';
    img.style.marginLeft = moveleft + 'px';
}
img.onclick = function() {
    var interval =  setInterval(moveRight, 100);
}