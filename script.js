const text = "Hello World, I'm Anushka!";
let i = 0;

function typeWriter() {
  const target = document.getElementById("typewriter");
  target.innerHTML = "";
  i = 0;

  function typingEffect() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typingEffect, 100);
    }
  }

  typingEffect();
}

window.onload = () => {
  typeWriter();
  renderAllKuromis();
};

setInterval(() => {
  typeWriter();
}, 15000);

function fillKuromis(containerId, imageSrc) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const screenHeight = window.innerHeight;
  const kuromiHeight = 60;
  const count = Math.ceil((screenHeight * 2) / kuromiHeight);

  for (let i = 0; i < count; i++) {
    const img = document.createElement('img');
    img.src = imageSrc;
    if (i % 2 === 1) img.classList.add('rotated');
    container.appendChild(img);
  }
}

function renderAllKuromis() {
  fillKuromis('kuromiScrollLeft', 'kuromi.png');
  fillKuromis('kuromiScrollRight', 'kuromi.png');
}

window.onresize = renderAllKuromis;

document.getElementById("hamburgerMenu").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("active");
});
