$(document).ready(function () {
    $("#attendee_submit").click(function (e) {
        e.preventDefault();
        attendeeSubmit();
    });
});

function attendeeSubmit() {
    var first_name = $("#firstname").val();
    var last_name = $("#lastname").val();
    var org_name = $("#org_name").val();
    var designation = $("#designation").val();
    var email = $("#contactmailid").val();
    var contact_no = $("#contactnumber").val();
    var city = $("#id_city").val();
    var state = $("#id_state").val();
    var country = $("#id_country").val();
    if (first_name != "" && last_name != "" && designation != "" && org_name != "" && email != "" && contact_no != "" && city != "" && state != ""&& country!="") {

    } else {
        alert("Fill ");
    }
}
