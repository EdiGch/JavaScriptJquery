


var el = document.getElementById('shoppingList');
el.addEventListener('click', function (e) {
  itemDone(e);
},false)


function itemDone(e){
  var target, elParent, elGrandParent;
  target = e.target;
  elParent = target.parentNode;
  //console.log(target);
  //console.log(elParent);

  elGrandParent = target.parentNode.parentNode;
  //console.log(elGrandParent);
  elGrandParent.removeChild(elParent);

  if(e.preventDefault){
    e.preventDefault();
  }else{
    e.returnValue = false;
  }

}