const demo = document.getElementById('demo');

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function() {
    const className = this.getAttribute('title');
    const activeBox = document.querySelector('.box.active');
    if (activeBox) {
      activeBox.classList.remove('active');
    }
    this.classList.add('active');
    choose(className);
  });
});

const cssOutput = document.getElementById('cssOutput');

function updateCSSOutput() {
  const cssOutput = document.getElementById('cssOutput');
  const styles = window.getComputedStyle(demo);
  let output = ".fancy {\n";

  const backgroundProperties = ['background-image', 'background-color'];

  for (let property of backgroundProperties) {
    let value = styles.getPropertyValue(property);
    if (!(property === 'background-color' && value === 'rgba(0, 0, 0, 0)')) {
      output += `  ${property}: ${value};\n`;
    }
  }

  output += "}";

  output = output.replaceAll(/rgba\(0, 0, 0, 0\)/g, 'transparent');
  output = output.replaceAll("radial-gradient", "\n    radial-gradient");

  cssOutput.textContent = output;
}

function choose(className) {
  demo.removeAttribute('class');
  demo.classList.add(className);
  updateCSSOutput();
}

updateCSSOutput();
