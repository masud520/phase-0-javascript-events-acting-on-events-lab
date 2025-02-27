// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#008080";
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const maxWidth = window.innerWidth - dodger.clientWidth;
    if(left < maxWidth){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
})
