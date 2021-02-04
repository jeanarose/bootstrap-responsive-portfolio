

$(".submit-btn").on("click", function (event) {
  event.preventDefault();
  const userEmail = "jeanarose.mathis.dev@gmail.com";
  const messageInput = $("#message").val();
  const subjectInput = $("#subject").val();

  var email = userEmail;
  var subject = subjectInput;
  var emailBody = messageInput;
  window.location =
    "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
});

$(".cancel-btn").on("click", function (event) {
  event.preventDefault();
  const messageInput = $("#message");
  const subjectInput = $("#subject");

  messageInput.val("")
  subjectInput.val("")
});
