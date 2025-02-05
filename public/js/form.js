/// <reference path="../../js/pagescripts/commondatastore.js" />
/// <reference path="../../js/jquery.js" />

var ajax_ws_co = "ws_webinar.asmx/";
$(document).ready(function () {

    if ($(window).width() <= 800) {
        $(".banner_img_ctrl").hide();
        $(".header-extras").hide();
        $(".left_panel").removeClass(' p-l-50');
    }
    $("#exhibitor_submit").click(function (e) {
        e.preventDefault();
        btnSubmit();
    });
    $('.close').click(function () {
        $("#modal-2").removeClass("show");
        window.location.href = "http://www.weexpoindia.com";

    });

});
function successCallBack(key, data) {

    if (key == "Registration") {
        if (data.data == "INSERTED" || data.data == "UPDATED") {
            var html_text = "";
            $("#modal-2").addClass("show");
            $('#modal-2').attr('aria-modal', 'true');
            $('#modal-2').removeAttr('aria-hidden');
            $('#modal-2').css("display", "block");
            $('#modal-2').css("padding-right", "17px");
            html_text = html_text + "<p>Shortly, we have sent you an email with all the details to attend the webinar. </p>";
            $(".modal-body").append(html_text);

        } else {
            var html_text = "";
            html_text = html_text + "<p>Try Again...!</p>";
            $(".modal-body").append(html_text);
            $('#modal-2').addClass("show");
            $('#modal-2').css("display", "block");
        }
    }
}

function btnSubmit() {
    /*alert("kjshdkjf");*/
    var stu_name = $("#first_name").val();
    var ins_name = $("#ins_name").val();
    var location = $("#txt_studies").val();
    var student_loc = $("#stu_loca").val();
    var email = $("#contact_email").val();
    var contact_no = $("#contact").val();
    var catagory = "1022";

    $.each($('form :input'), function () {
        $(this).blur().change();
    });

    if (stu_name.length > 2 && ins_name.length > 1 && student_loc.length > 2 && IsEmail(email) && contact_no.length > 6 && location.length > 2) {
        var str_data = stu_name + "$" + ins_name + "$" + student_loc + "$" + email + "$" + contact_no + "$" + location + "$" + catagory;
        common_api_ajax_request("api/webinar_registration", "Registration", { "data": str_data });
    }
}

function buttonSubmit() {
    /*alert("kjshdkjf");*/
    var stu_name = $("#stu_name").val();
    var ins_name = $("#ins_name").val();
    var location = $("#txt_studies").val();
    var student_loc = $("#stu_loca").val();
    var email = $("#contact_email").val();
    var contact_no = $("#contact").val();
    var catagory = "1023";

    $.each($('form :input'), function () {
        $(this).blur().change();
    });

    if (stu_name.length > 2 && ins_name.length > 1 && student_loc.length > 2 && IsEmail(email) && contact_no.length > 6 && location.length > 2) {
        var str_data = stu_name + "$" + ins_name + "$" + student_loc + "$" + email + "$" + contact_no + "$" + location + "$" + catagory;
        common_api_ajax_request("api/webinar_registration", "Registration", { "data": str_data });
    }
}