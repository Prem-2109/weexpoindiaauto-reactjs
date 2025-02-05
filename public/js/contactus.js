/// <reference path="jquery.js" />
/// <reference path="commondatastore.js" />

$(document).ready(function () {
    $("#getintouch_submit").click(function (e) {
        e.preventDefault();
        btnSubmitAction();
    });

    $('.close').click(function () {
        $("#modal-2").removeClass("show");
        window.location.href = "http://crdi.com/";

    });
});




function successCallBack(key, data) {
    if (key == "GETINTOUCH") {
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

function btnSubmitAction() {
    var name = $("#res_name").val();
    var mail_id = $("#res_mail").val();
    var contact = $("#example-tel-input").val();
    var message = $("#res_msg").val();
    if (name != "" && contact != "" && mail_id != "") {
        var strdata = name + "$" + mail_id + "$" + contact + "$" + message + "$";
        common_api_ajax_request("api/getintouch", "GETINTOUCH", { "data": strdata });

    } else {
        /* $("#modal_text").html("Please provide Email");*/
        if (name == "") {
            $("#modal_text").text('Enter your Name');
            $("#res_name").focus();
        }
        else if (mail_id == "") {
            $("#modal_text").text('Enter your Mail id');
            $("#res_mail").focus();
        }
        else if (contact == "") {
            $("#modal_text").text('Enter your Number');
            $("#example-tel-input").focus();
        }
    }
}
