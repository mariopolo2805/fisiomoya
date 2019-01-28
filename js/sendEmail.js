(document).ready(function () {
  $("#send").click(function () {
      //first email list
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var isValid = true;

      //validate the first email address
      if (emailAddress1 == "") {
          $("#email_address1_error").text("this address is required");
          isValid = false;
      } else {
          $("#email_address1").next().text("");
      }
      //validate the second email address
      if (emailAddress2 == "") {
          $("#email_address2_error").text("this address is required");
          isValid = false;
      } else if (emailAddress1 !== emailAddress2) {
          $("#email_address2_error").text("the two emails have to be the same");
          isValid = false;
      } else {
          $("#email_address2_error").text("");
      }
      //validate the first Name
      if (firstName == "") {
          $("#first_name_error").text("name is required");
          isValid = false;
      } else {
          $("#first_name_error").text("");
      }
      //submit the form
      if (isValid) {
          $("#email_form").submit();
      }
  });
  //focus the cursor on the first email address
  $("#email_address1").focus();
});
