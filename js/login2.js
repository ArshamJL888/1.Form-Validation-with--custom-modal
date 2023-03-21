let usernameElem = document.querySelector('.username');
let passwordElem = document.querySelector('.password');
let btn = document.querySelector('#button');
let modalFalse = document.querySelector('.modal');
let modalTrue = document.querySelector('.modal2');

modalFalse.style.display = 'none'
modalTrue.style.display = 'none'
btn.addEventListener('click',dataValidation);
let i = 0;
function dataValidation() {
    if(usernameElem.value.length < 12 || passwordElem.value.length < 8) {
        modalTrue.style.display = 'none'
        modalFalse.style.display = 'inline';
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 30);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          } 
    }
    else {
        modalFalse.style.display = 'none';
        modalTrue.style.display = 'inline'
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar2");
            var width = 1;
            var id = setInterval(frame, 30);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
    }
}