var passExam = 65;    // Score
var yorScore = 70;
var missingPoints = 0;
var msg = '';      // Message

// function congratulate() {
//   msg += 'Gratulacje! ';
// }
// if (passExam >= 50) {  // If passExam is 50 or more
//   congratulate();
//   msg += 'Proceed to the next round.';
// }

function checkTest(passExam){
  if (yorScore >= passExam) {  // If score is 50 or more
    msg += 'Gratulacje! ';
    return msg += 'Przechodzisz do kolejnej rundy.';
  }else{
    msg += 'Przykro mi! ';
    missingPoints = passExam - yorScore;
    return msg += 'Zabrakowało Ci '+ missingPoints +' punktów do zaliczenia tesu.';
  }
}

var el = document.getElementById('answer');
el.innerHTML = checkTest(passExam);