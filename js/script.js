const demo = document.getElementById('demo');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function() {
    const className = this.getAttribute('title');
    choose(className);
  });
});


function choose(className) {
  demo.removeAttribute('class');
  demo.classList.add(className);
}
