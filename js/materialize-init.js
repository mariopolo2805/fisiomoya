$(document).ready(function() {
  $('.slider').slider({
    interval: 10000
  });
  $('.slider').slider('next');
  setTimeout(function() {
    $('.slider').slider('prev');
  }, 100);
  $('.parallax').parallax();
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.modal').modal({
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  });
});
