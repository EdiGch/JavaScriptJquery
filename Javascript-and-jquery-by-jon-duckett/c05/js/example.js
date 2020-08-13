var listItems = document.querySelectorAll('li');
for(var i = 0; i<listItems.length; i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');



var headingText = heading.firstChild.nodeValue;

var totalItems = listItems.length;

var newHeading = headingText + '<span>' + totalItems + '</span>';

heading.innerHTML = newHeading;