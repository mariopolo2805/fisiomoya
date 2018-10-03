var cookieConsent = function() {
  function initCookieConsent(url) {
    $(document).ready(function() {
      window.cookieconsent.initialise({
        "palette": {
          "popup": {
            "background": "#263238"
          },
          "button": {
            "background": "#03a9f4",
            "text": "#ffffff"
          }
        },
        "content": {
          "message": "Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. Si continua navegando, consideramos que acepta su uso.",
          "dismiss": "Aceptar",
          "link": "Más información",
          "href": url
        }
      });
    });
  }
  return {
    initCookieConsent: initCookieConsent
  };
}();
