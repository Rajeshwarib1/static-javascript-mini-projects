const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'magenta') {
      body.style.backgroundColor = 'rgb(242, 91, 219)';
    }
    if (e.target.id === 'white') {
        body.style.backgroundColor = 'rgb(255, 255, 233)';
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = 'rgb(101, 101, 254)';
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = 'rgb(254, 254, 51)';
      }
  });
});
