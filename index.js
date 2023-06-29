
$("#email").on("input",function(){
  if($("#email").val()==""){
    $("#error").css("display","none");
    $("#email").css("border","1px solid black");
    $("#email").css("color","black").val();
  }
});

$(".subscribe").on("click",function(e){
     e.preventDefault();

    function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
    if (!ValidateEmail($("#email").val())) {
            $(".error").css("display","block");
            $("#email").css("border","2px solid red");
            $("#email").css("color","red").val();
        }
        else {
            $(".sign-up-form").css("display","none");
          $(".success-message").css("display","block");
          $(".subscriber").text() = $(".email").val();
        }
  });

  $(".dismiss-btn").on("click",function(){
    $(".sign-up-form").css("display","block");
        $("#email").val("");
    $(".success-message").css("display","none");
  });
