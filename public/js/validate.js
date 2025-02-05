
function student_name() {
    var stu_name = $("#stu_name").val();
    if (stu_name.length <= 1) {
        $("#stu_name").addClass("is-invalid");
        $('#stu_name').attr('aria-describedby', 'username-error');
        $('#stu_name').attr('aria-invalid', 'true');
        $("#stu_name").attr("style", "border-color: #dc3545 !important");
        $('#username-error').css("display", "block");
        return false;
    }
    else {
        $("#stu_name").removeClass("is-invalid");
        $("#stu_name").addClass("is-valid");
        $('#stu_name').attr('aria-invalid', 'false');
        $("#stu_name").attr("style", "border-color: #28a745 !important");
        $('#username-error').css("display", "none");

        return true;
    }

}

function institute() {
    var ins_name = $("#ins_name").val();
    if (ins_name.length <= 2) {
        $("#ins_name").addClass("is-invalid");
        $('#ins_name').attr('aria-describedby', 'username-error');
        $('#ins_name').attr('aria-invalid', 'true');
        $("#ins_name").attr("style", "border-color: #dc3545 !important");
        $('#school-error').css("display", "block");
        return false;
    }
    else {
        $("#ins_name").removeClass("is-invalid");
        $("#ins_name").addClass("is-valid");
        $('#ins_name').attr('aria-invalid', 'false');
        $("#ins_name").attr("style", "border-color: #28a745 !important");
        $('#school-error').css("display", "none");
        return true;

    }
}



function student_city() {
    var student_loc = $("#stu_loca").val();
    if (student_loc.length <= 2) {
        $("#stu_loca").addClass("is-invalid");
        $('#stu_loca').attr('aria-describedby', 'city-error');
        $('#stu_loca').attr('aria-invalid', 'true');
        $("#stu_loca").attr("style", "border-color: #dc3545 !important");
        $('#city-error').css("display", "block");
        return false;
    }
    else {
        $("#stu_loca").removeClass("is-invalid");
        $("#stu_loca").addClass("is-valid");
        $('#stu_loca').attr('aria-invalid', 'false');
        $("#stu_loca").attr("style", "border-color: #28a745 !important");
        $('#city-error').css("display", "none");
        return true;

    }
}

function student_dob() {
    var dob = $("#dob").val();
    if (dob.length <= 2) {
        $("#dob").addClass("is-invalid");
        $('#dob').attr('aria-describedby', 'dateofbirth-error');
        $('#dob').attr('aria-invalid', 'true');
        $("#dob").attr("style", "border-color: #dc3545 !important");
        $('#dateofbirth-error').css("display", "block");
        return false;
    }
    else {
        $("#dob").removeClass("is-invalid");
        $("#dob").addClass("is-valid");
        $('#dob').attr('aria-invalid', 'false');
        $("#dob").attr("style", "border-color: #28a745 !important");
        $('#dateofbirth-error').css("display", "none");
        return true;

    }
}

function student_email() {
    var email = $("#contact_email").val();
    if (!IsEmail(email)) {
        $("#contact_email").addClass("is-invalid");
        $('#contact_email').attr('aria-describedby', 'email-error');
        $('#contact_email').attr('aria-invalid', 'true');
        $("#contact_email").attr("style", "border-color: #dc3545 !important");
        $('#email-error').css("display", "block");
        return false;
    }
    else {
        $("#contact_email").removeClass("is-invalid");
        $("#contact_email").addClass("is-valid");
        $('#contact_email').attr('aria-invalid', 'false');
        $("#contact_email").attr("style", "border-color: #28a745 !important");
        $('#email-error').css("display", "none");
        return true;

    }
}

function contactno() {
    var contact_no = $("#contact").val();
    if (contact_no.length < 6) {
        $("#contact").addClass("is-invalid");
        $('#contact').attr('aria-describedby', 'telephone-error');
        $('#contact').attr('aria-invalid', 'true');
        $("#contact").attr("style", "border-color: #dc3545 !important");
        $('#telephone-error').css("display", "block");
        return false;
    }
    else {
        $("#contact").removeClass("is-invalid");
        $("#contact").addClass("is-valid");
        $('#contact').attr('aria-invalid', 'false');
        $("#contact").attr("style", "border-color: #28a745 !important");
        $('#telephone-error').css("display", "none");
        return true;
    }
}
function student_gender() {

    var gender = $('#txt_gender :selected').text();
    if (gender != 'Male' && gender != 'Female') {
        $("#txt_gender").addClass("is-invalid");
        $('#txt_gender').attr('aria-describedby', 'gender-error');
        $('#txt_gender').attr('aria-invalid', 'true');
        $("#txt_gender").attr("style", "border-color: #dc3545 !important");
        $('#gender-error').css("display", "block");
        return false;
    }
    else {
        $("#txt_gender").removeClass("is-invalid");
        $("#txt_gender").addClass("is-valid");
        $('#txt_gender').attr('aria-invalid', 'false');
        $("#txt_gender").attr("style", "border-color: #28a745 !important");
        $('#gender-error').css("display", "none");
        return true;
    }
}
function studies() {
    var studies = $("#txt_studies").val();
    if (studies.length <= 2) {
        $("#txt_studies").addClass("is-invalid");
        $('#txt_studies').attr('aria-describedby', 'course-error');
        $('#txt_studies').attr('aria-invalid', 'true');
        $("#txt_studies").attr("style", "border-color: #dc3545 !important");
        $('#course-error').css("display", "block");
        return false;
    }
    else {
        $("#txt_studies").removeClass("is-invalid");
        $("#txt_studies").addClass("is-valid");
        $('#txt_studies').attr('aria-invalid', 'false');
        $("#txt_studies").attr("style", "border-color: #28a745 !important");
        $('#course-error').css("display", "none");
        return true;
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



