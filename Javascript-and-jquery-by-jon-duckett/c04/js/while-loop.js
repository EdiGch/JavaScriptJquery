var i = 1;
var msg = '';



//document.getElementById('answer').innerHTML = msg;

var basis = 1;
var msgBasig = '';
while(basis <= 10){
    while(i <= 10){
        msgBasig += basis + ' * ' + i + ' = ' + (basis * i) + ' <br/>';
        i++;
    }
    basis++;
    i = 1
}

document.getElementById('answer').innerHTML = msgBasig;
