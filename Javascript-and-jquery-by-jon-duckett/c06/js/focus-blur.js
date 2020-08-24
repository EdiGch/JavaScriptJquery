var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkUsername, false);


function checkUsername(){
    console.log('Nieaktywny');
    var username = el.value;

    if(username < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Nazwa użytkownika nadal jest zbyt krótka..';
    }else{
        elMsg.textContent = '';
    }
}

function tipUsername(){
    console.log('Jest aktywny');
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Nazwa użytkownika musi mieć przynajmiej 5 znaków';
};