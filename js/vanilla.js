// Detectar el evento de scroll
window.addEventListener('scroll', function() {
    // Obtener todas las imágenes con la clase kenburns-top
    const images = document.querySelectorAll('.kenburns-top');
  
    // Iterar a través de las imágenes
    images.forEach(image => {
      // Verificar si la imagen es visible en la pantalla
      if (isElementInViewport(image)) {
        // Añadir la clase para activar el efecto
        image.classList.add('active');
      } else {
        // Quitar la clase si la imagen no es visible
        image.classList.remove('active');
      }
    });
  });
  
  // Función para verificar si un elemento está visible en la pantalla
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  