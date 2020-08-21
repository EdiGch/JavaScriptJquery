const minLengthElUserName = 5;
var elUserName = document.getElementById('username');
var elMsg = document.getElementById('feedback');

elUserName.addEventListener('blur', function () {
    checkUserName(minLengthElUserName);
});

function checkUserName(minLength){
    if(elUserName.value.length < minLength){
        elMsg.textContent = 'Nazwa użytkownika musi mieć przynajmniej ' + minLength + ' znaków.';
    }else{
        elMsg.innerText = '';
    }
}