const boxes = document.querySelectorAll('.box');
document.getElementById('btn').addEventListener('click', change);

function change() {
  let x = Math.floor(Math.random() * 24);
  let y = Math.round(Math.random() * 1);
  console.log(y);
  if(y === 0) {
    boxes[x].style.background = `rgb(${random()}, ${random()}, ${random()})`;
  } else {
    let z = Math.round(Math.random() * 1);
    console.log(z);
    if(z === 0) {
      boxes[x].classList.add('turn-counter');
    } else {
      boxes[x].classList.add('turn-clock');
    }
  }
}

function random() {
  return Math.floor(Math.random() * 256);
}
