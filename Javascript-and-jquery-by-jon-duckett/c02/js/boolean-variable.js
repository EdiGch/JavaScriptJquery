// create variables and assign their values
var inStock;
var shipping;
var today = new Date();
var hourNow = today.getHours();
var isAvailableConsultant;
var noteMessage;
inStock = true;
shipping = false;

if( hourNow > 7 &&  hourNow < 16){
    isAvailableConsultant = true;
    noteMessage = 'Rozpocznij czat z konsultantem.';
}else{
    isAvailableConsultant = false;
    noteMessage = 'Nasze biuro obsługi kienta jest już zamknięte. Zapraszamy jutro';
}

// get the element that has an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;

// get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;

var elConsultant = document.getElementById('chatWithConsultant');
elConsultant.className = isAvailableConsultant;

var elNote = document.getElementById('note');
elNote.innerHTML = noteMessage;

