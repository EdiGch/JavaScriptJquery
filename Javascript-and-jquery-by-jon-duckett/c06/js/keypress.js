var ele;

ele = document.getElementById('message');
ele.addEventListener('keyup', customCharCount, false);


function customCharCount(e){
    var textEntered, charDisplay, counter, lastKey, target, messageValue, targetParent;

    target = e.target;
    messageValue = target.value;
    targetParent = target.parentElement;
    charDisplay = targetParent.children[2];
    counter = (180 -(messageValue.length));
    charDisplay.textContent = counter;
}


var el;                                                    // Declare variables

function charCount(e) {                                    // Declare function
    var textEntered, charDisplay, counter, lastkey;          // Declare variables
    textEntered = document.getElementById('message').value;  // User's text
    charDisplay = document.getElementById('charactersLeft'); // Counter element
    counter = (180 - (textEntered.length));                  // Num of chars left
    charDisplay.textContent = counter;                       // Show chars left
    lastkey = document.getElementById('lastKey');            // Get last key elem
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; // Create msg
}
el = document.getElementById('message');                   // Get msg element
el.addEventListener('keyup', charCount, false);