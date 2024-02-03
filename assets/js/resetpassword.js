$(document).ready(function () {
    $(".reset-form .password .eyes").click(function () {
      const type =
        $(this).prev().attr("type") === "password" ? "text" : "password";
  
      $(this).prev().attr("type", type);
  
        if($(this).prev().attr("type") === "password"){
          $(this).addClass("fa-eye");
          $(this).removeClass("fa-eye-slash");
        }
  
        else{
          $(this).removeClass("fa-eye");
          $(this).addClass("fa-eye-slash");
        }
  
    });
  });
  