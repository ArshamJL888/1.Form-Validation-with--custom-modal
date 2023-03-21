let usernameInput = document.querySelector('.username');
let passwordInput = document.querySelector('.password');
let modal = document.querySelector('.modal')
let modal2 = document.querySelector('.modal2')
modal.style.display = 'none';
modal2.style.display = 'none';
function dataValidation() {
    let usernameValue = usernameInput.value;
    let passwordValue = passwordInput.value;
    var i = 0, j = 0;
    if (usernameValue.length < 12 || passwordValue.length < 8) {
        modal.style.display = 'inline';
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
        modal2.style.display = 'inline'
        if (j == 0) {
            j = 1;
            var elem = document.getElementById("myBar2");
            var width = 1;
            var id = setInterval(frame, 30);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                j = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
    }
    setTimeout(function () {
        modal.style.display = 'none';
        modal2.style.display = 'none';
    }, 3000)
}