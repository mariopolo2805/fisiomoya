$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    var name = encodeURIComponent($("input[name='name']").val());
    var email = encodeURIComponent($("input[name='email']").val());
    var message = encodeURIComponent($("textarea[name='message']").val());

    $(location).attr('href', 'mailto:info@fisioeffect.es?subject=Info&body=' + message + '%0D%0A%0D%0A' + name + '%0D%0A' + email);

    event.preventDefault();
  });
});
