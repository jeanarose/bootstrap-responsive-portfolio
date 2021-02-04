$(".submit-btn").on("click", function (event) {
    event.preventDefault();
    console.log(this);
    const userEmail = "jeanarose.mathis.dev@gmail.com";

    var email = userEmail;
    var subject = "I saw your portfolio and want to chat!";
    var emailBody = "Your message goes here.";
    window.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  });