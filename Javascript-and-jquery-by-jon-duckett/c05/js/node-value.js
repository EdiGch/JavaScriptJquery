var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts', 'kapusta');
itemTwo.firstChild.nodeValue = elText;