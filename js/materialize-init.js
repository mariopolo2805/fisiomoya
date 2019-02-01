$(document).ready(function() {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $('.modal').modal({
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
  });
  $('.collapsible').collapsible();
});
