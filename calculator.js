
const butons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < butons.length; i++) {
  butons[i].addEventListener('click', function() {

    let number = butons[i].getAttribute('data-num');
    screen.value += number;
  })
}

equalBtn.addEventListener('click', function() {

  if (screen.value === '') {
    alert('input is empty');
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }

})

clearBtn.addEventListener('click', function() {
  screen.value = '';
})