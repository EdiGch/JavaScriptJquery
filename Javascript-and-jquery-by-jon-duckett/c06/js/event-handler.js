function checkUsername() {                            // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elUsername = document.getElementById('username'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()







feedback = document.createElement('div');
feedback.setAttribute("id", "feedback");
elementAdd = document.getElementById('commentform');
elementAdd.appendChild(feedback);

function checkCustomUsername() {                            // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elCustomUsername = document.getElementById('author'); // Get username input
elUsername.onblur = checkCustomUsername;