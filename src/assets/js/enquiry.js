/// <reference path="jquery.js" />
/// <reference path="commondatastore.js" />


$(document).ready(function () {
    $("#id_otp").click(function (e) {
        $("#id_otp_session").removeClass("hidden");
        $(".id_otp").text("Resend OTP");
    });
   
});


function verifynumber() {
    var name = $("#Id_fullname").val();
    var email = $("#id_mail").val();
    var mobile = $("#id_mobile").val();

}




function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (phoneno.test(inputtxt)) {
        return true;
    }
    else {
        return false;
    }
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
