//Counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //make a request and store it in a variable
    var request = new XMLHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
    if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        //not necessary
        }
    };
    //make the request
    request.open('GET', 'http://asathalmannan.imad.hasura-app.io/counter');
    request.send(null);
};
