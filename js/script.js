document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const tema = document.getElementById("tema");
    const mensaje = document.getElementById("mensaje");
    const acepto = document.getElementById("acepto");

    let valido = true;

    [nombre, email, tema, mensaje, acepto].forEach(campo => {
      campo.classList.remove("is-invalid");
    });

    if (nombre.value.trim().length < 3) {
      nombre.classList.add("is-invalid");
      valido = false;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailValido) {
      email.classList.add("is-invalid");
      valido = false;
    }

    if (!tema.value) {
      tema.classList.add("is-invalid");
      valido = false;
    }

    if (mensaje.value.trim().length < 20) {
      mensaje.classList.add("is-invalid");
      valido = false;
    }

    if (!acepto.checked) {
      acepto.classList.add("is-invalid");
      valido = false;
    }

    if (!valido) {
      message.className = "alert alert-danger";
      message.textContent = "Revisa los campos marcados antes de enviar.";
      return;
    }

    message.className = "alert alert-success";
    message.textContent = "¡Formulario validado correctamente! Este portal es un proyecto académico.";
    form.reset();
  });
});
