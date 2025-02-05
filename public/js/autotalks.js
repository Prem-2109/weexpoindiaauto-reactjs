/// <reference path="commondatastore.js" />
/// <reference path="jquery.js" />

$(document).ready(function () {
   
    $("#register_button").click(function (e) {
        e.preventDefault();
        buttonsubmit();
    });
    $('.close').click(function () {
        $("#modal-2").removeClass("show");
        window.location.href = "https://weexpoindiaauto.com/";

    });

});
function successCallBack(key, data) {
    if (key == "Autotalks") {
        var html_text = "";
        $("#modal-2").addClass("show");
        $('#modal-2').attr('aria-modal', 'true');
        $('#modal-2').removeAttr('aria-hidden');
        $('#modal-2').css("display", "block");
        $('#modal-2').css("padding-right", "17px");
        html_text = html_text + "<p>Shortly, we have sent you an email with all the details to attend the webinar.</p>";
        $(".modal-body").append(html_text);

    } else {
        var html_text = "";
        html_text = html_text + "<p>Try Again...!</p>";
        $(".modal-body").append(html_text);
        $('#modal-2').addClass("show");
        $('#modal-2').css("display", "block");
    }

}


function buttonsubmit() {
    var stu_name = $("#stu_name").val();
    var org_name = $("#org_name").val();
    var designation = $("#designation").val();
    var email = $("#contact_email").val();
    var contact_no = $("#contact").val();
    
    if (stu_name != "" && org_name != "" && designation != "") {
        if (phonenumber(contact_no)) {
            if (IsEmail(email)) {
                var str_data = stu_name + "$" + org_name + "$" + designation + "$" + contact_no + "$" + email + "$";   
                common_api_ajax_request("api/weexpoautotalk", "Autotalks", { "data": str_data });

            } else {
                $("#error").text('Enter valid email');
                $("#contact_email").focus();
            }
        } else {
            $("#contact").focus();
            $("#error").text('Enter 10 digit mobile number');
        }
    }
    else {
        if (designation == "") {
            $("#error").text('Enter your designation');
            $("#designation").focus();
        }
        if (org_name == "") {
            $("#error").text('Enter your Organization Name');
            $("#org_name").focus();
        }
        if (stu_name == "") {
            $("#error").text('Enter your Fullname');
            $("#stu_name").focus();
        }
    }
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

