const slide = document.querySelector(".carousel-slide");
const comentarios = document.querySelectorAll(".comentario");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let index = 1;
const total = comentarios.length;
const visible = 3;

// Actualiza la vista del carrusel
function actualizarCarrusel() {
  // Calcular desplazamiento
  const offset = -((index - 1) * (100 / visible));
  slide.style.transform = `translateX(${offset}%)`;

  // Resaltar el central
  comentarios.forEach((comentario, i) => {
    comentario.classList.remove("active");
    comentario.style.opacity = "0.5";
    comentario.style.transform = "scale(0.8)";
  });

  const central = index + 1 < total ? index + 1 : index; 
  if (comentarios[central]) {
    comentarios[central].classList.add("active");
    comentarios[central].style.opacity = "1";
    comentarios[central].style.transform = "scale(1.2)";
  }
}

// Botón siguiente
btnNext.addEventListener("click", () => {
  if (index < total - visible) {
    index++;
  } else {
    index = 0;
  }
  actualizarCarrusel();
});

// Botón anterior
btnPrev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = total - visible;
  }
  actualizarCarrusel();
});

// Movimiento automático
setInterval(() => {
  index = (index + 1) % (total - visible + 1);
  actualizarCarrusel();
}, 5000);

// Inicial
actualizarCarrusel();
