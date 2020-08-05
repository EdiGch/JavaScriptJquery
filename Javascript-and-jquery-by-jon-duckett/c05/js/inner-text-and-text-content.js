var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>TextContent: ' + showTextContent + '</p>';
msg += '<p>innerHTML: ' + showInnerText + '</p>';

var el = document.getElementById('scriptResults');
el.innerHTML = msg;


firstItem.textContent = 'chleb na zakwasie';

