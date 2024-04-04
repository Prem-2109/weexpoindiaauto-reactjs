/// <reference path="jquery.js" />
/// <reference path="commondatastore.js" />


$(document).ready(function () {
    $("#exhibitor_submit").click(function (e) {
        e.preventDefault();
        exhibitorSubmit();
    });
    $("#Press_submit").click(function (e) {
        e.preventDefault();
        delegateSubmit();
    });
    $('.close').click(function () {
        $("#modal-2").removeClass("show");
        window.location.href = "";

    });
});

function successCallBack(key, data) {
    if (key == "Exhibitor-Registration") {
        var html_text = "";
        $("#modal-2").addClass("show");
        $('#modal-2').attr('aria-modal', 'true');
        $('#modal-2').removeAttr('aria-hidden');
        $('#modal-2').css("display", "block");
        $('#modal-2').css("padding-right", "17px");
        html_text = html_text + "<p>Thank you for your interest in WEEXPOINDIA Auto show - Our team will touch base with you shortly. </p>";
        $(".modal-body").append(html_text);

    }
    else {
        var html_text = "";
        html_text = html_text + "<p>Try Again...!</p>";
        $(".modal-body").append(html_text);
        $('#modal-2').addClass("show");
        $('#modal-2').css("display", "block");
    }

}



function exhibitorSubmit() {
    var full_name = $("#first_name").val();
    var org_name = $("#org_name").val();
    var designation = $("#designation").val();
    var email = $("#contactmailid").val();
    var contact_no = $("#contact_number").val();
    var city = $("#id_city").val();
    var message = $("#res_msg").val();
    if (full_name != "" && org_name != "" && designation != "" && email != "" && contact_no != "" && city != "") {
        if (phonenumber(contact_no)) {
            if (IsEmail(email)) {
                var str_data = full_name + "$" + org_name + "$" + designation + "$" + email + "$" + contact_no + "$" + city + "$" + message + "$";
                common_api_ajax_request("api/newRegistration", "Exhibitor-Registration", { "data": str_data });
            } else {
                $("#error").text('Enter valid email');
                $("#contactmailid").focus();
            }
        } else {
            $("#error").text('Enter 10 digit mobile number');
            $("#contact_number").focus();
        }

    } else {
        if (full_name == "") {
            $("#error").text('Enter your Full Name');
            $("#first_name").focus();
        }
        else if (org_name == "") {
            $("#error").text('Enter your Organization Name');
            $("#org_name").focus();
        }
        else if (designation == "") {
            $("#error").text('Enter your designation');
            $("#designation").focus();
        }
        else if (email == "") {
            $("#error").text('Enter your Email Id');
            $("#contactmailid").focus();
        }
        else if (contact_no == "") {
            $("#error").text('Enter your Mobile No ');
            $("#contact_number").focus();
        }
        else if (city == "") {
            $("#error").text('Enter your City');
            $("#id_city").focus();
        }
    }
}




function delegateSubmit() {
    var full_name = $("#id_Fullname").val();
    var media_name = $("#id_Nameofmedia").val();
    var designation = $("#id_designation").val();
    var email = $("#id_emailid").val();
    var contact_no = $("#id_contactpersonno").val();
    var city = $("#id_city").val();
    var message = $("#res_msg").val();
    category = "1001";
    if (full_name != "" && media_name != "" && designation != "" && email != "" && contact_no != "" && city != "") {
        if (phonenumber(contact_no)) {
            if (IsEmail(email)) {
                var str_data = full_name + "$" + media_name + "$" + designation + "$" + email + "$" + contact_no + "$" + city + "$" + category + "$" + message + "$";
                common_api_ajax_request("api/newRegistration", "Exhibitor-Registration", { "data": str_data });
            } else {
                $("#error").text('Enter valid email');
                $("#id_emailid").focus();
            }
        } else {
            $("#error").text('Enter 10 digit mobile number');
            $("#id_contactpersonno").focus();
        }

    } else {
        if (full_name == "") {
            $("#error").text('Enter your Full Name');
            $("#first_name").focus();
        }
        else if (media_name == "") {
            $("#error").text('Enter your Media Name');
            $("#id_Nameofmedia").focus();
        }
        else if (designation == "") {
            $("#error").text('Enter your designation');
            $("#id_designation").focus();
        }
        else if (email == "") {
            $("#error").text('Enter your Email Id');
            $("#id_emailid").focus();
        }
        else if (contact_no == "") {
            $("#error").text('Enter your Mobile No ');
            $("#id_contactpersonno").focus();
        }
        else if (city == "") {
            $("#error").text('Enter your City');
            $("#id_city").focus();
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
