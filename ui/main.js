console.log('Loaded!');

var element = document.getElementById('new');
element.innerHTML = 'Client javascript is running..!';

var img = document.getElementById('madi');
img.onclick = function() {
    img.style.marginLeft = '100px';
}