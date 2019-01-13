$(document).ready(function() {
  $('.slider').slider({
    interval: 10000
  });
  $('.slider').slider('next');
  $('.slider').slider('prev');
  $('.parallax').parallax();
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.modal').modal({
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  });
});
