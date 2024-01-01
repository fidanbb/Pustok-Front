$(document).ready(function () {
  $(".login-form .password .eyes").click(function () {
    const type =
      $(this).prev().attr("type") === "password" ? "text" : "password";

    $(this).prev().attr("type", type);
  });
});
