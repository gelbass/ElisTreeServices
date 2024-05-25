const btn = document.getElementById("sendEmail");

document.getElementById("formContact").addEventListener("submit", function(event) {
  event.preventDefault();

  const serviceID = "service_b0oi8x9";
  const templateID = "template_5sj22co";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire(
        'Message sent succesfully',
        'Our team will contact you shortly',
        'success'
      )
    },
    err => {
      Swal.fire(
        'Message not sent',
        'Try again later.',
        'error'
      )
    }
  );
  document.getElementById("name").value ="";
  document.getElementById("lastName").value ="";
  document.getElementById("email").value ="";
 // document.getElementById("asunto").value ="";
  document.getElementById("message").value ="";
});

document.addEventListener('DOMContentLoaded', function() {
  var scrollDown = document.querySelector('.scroll-down');
  var footer = document.querySelector('footer');

  window.addEventListener('scroll', function() {
    var scrollHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var clientHeight = document.documentElement.clientHeight;
    var footerOffset = footer.offsetTop;

    // Verifica si el usuario ha llegado al final de la página o al pie de página
    if (scrollHeight - scrollTop === clientHeight || scrollTop + clientHeight >= footerOffset) {
      scrollDown.style.display = 'none'; // Oculta la flecha si ha llegado al final o al pie de página
    } else {
      scrollDown.style.display = 'block'; // Muestra la flecha si no ha llegado al final o al pie de página
    }
  });
});
