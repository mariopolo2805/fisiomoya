$(document).ready(function() {
  $('.slider').slider({
    interval: 10000
  });
  $('.parallax').parallax();
  $('select').formSelect();
  $('.sidenav').sidenav();
  $('.modal').modal({
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  });
});
