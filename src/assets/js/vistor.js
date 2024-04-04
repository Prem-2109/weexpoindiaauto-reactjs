/// <reference path="jquery.js" />
/// <reference path="commondatastore.js" />



$(document).ready(function () {
    $("#vistor_submit").click(function (e) {
        e.preventDefault();
        enquirySubmit();
    });

    $('.close').click(function () {
        $("#modal-2").removeClass("show");
        window.location.href = "https://weexpoindiaauto.com/";

    });
});

function successCallBack(key, data) {
    if (key == "signup-key") {
        var html_text = "";
        $("#modal-2").addClass("show");
        $('#modal-2').attr('aria-modal', 'true');
        $('#modal-2').removeAttr('aria-hidden');
        $('#modal-2').css("display", "block");
        $('#modal-2').css("padding-right", "17px");
        html_text = html_text + "<p>Thanks for Registrating </p>";
        $(".modal-body").append(html_text);

    } else {
        var html_text = "";
        html_text = html_text + "<p>Try Again...!</p>";
        $(".modal-body").append(html_text);
        $('#modal-2').addClass("show");
        $('#modal-2').css("display", "block");
    }

}


function enquirySubmit() {
    var fullname = $("#first_name").val();
    var organisation = $("#org_name").val();
    var designation = $("#designation").val();
    var emailid = $("#contactmailid").val();
    var contactno = $("#contact_number").val();
    var city = $("#id_city").val();
    if (fullname != "" && organisation != "" && designation != "" && emailid != "" && contactno != "" && city != "") {
        if (phonenumber(contactno)) {
            if (IsEmail(emailid)) {
                var str_data = fullname + "$" + organisation + "$" + designation + "$" + emailid + "$" + contactno + "$" + city + "$";
                common_api_ajax_request("api/signup", "signup-key", { "data": str_data });
            } else {
                $("#error").text('Enter valid email');
                $("#contactmailid").focus();
            }
        } else {
            $("#error").text('Enter 10 digit mobile number');
            $("#contact_number").focus();
        }

    } else {
        if (fullname == "") {
            $("#error").text('Enter your Full Name');
            $("#first_name").focus();
        }
        else if (organisation == "") {
            $("#error").text('Enter your organisation');
            $("#org_name").focus();
        }
        else if (designation == "") {
            $("#error").text('Enter your Designation');
            $("#designation").focus();
        }
        else if (emailid == "") {
            $("#error").text('Enter valid email');
            $("#contactmailid").focus();
        }
        else if (contactno == "") {
            $("#error").text('Enter 10 digit mobile number');
            $("#contact_number").focus();
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
