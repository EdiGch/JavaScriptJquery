
function checkUserName(){
    var elMsg = document.getElementById('feedback');

    if(this.value.length < 5){
        elMsg.textContent = 'Nazwa użytkownika musi miec przynajmniej 5 znaków';
    }else{
        elMsg.textContent = '';
    }
}


var elUserName = document.getElementById('username');
elUserName.addEventListener('blur', checkUserName, false);
