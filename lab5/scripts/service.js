// HERE, JQuery "LISTENING" starts
$(document).ready(function(){
    // For verifying that the user input data to all the fields.
    // SOURCE: https://www.w3schools.com/jquery/jquery_dom_get.asp
    $("#submit_booking").click(function(){
        var booking = true;
        // We use the submit button to ensure that the user gave valid info.
        if ($("#name").val() == ""){
            alert("Failed to book. Please insert your name.");
            booking=false;
        }
        else if ($("#email").val() == ""){
            alert("Failed to book. Please insert your email.");
            booking=false;
        }
        else if ($("#phone").val() == ""){
            alert("Failed to book. Please insert your phone number.");
            booking=false;
        }
        else if ($("#pet_name").val() == ""){
            alert("Failed to book. Please insert your pet's name.");
            booking=false;
        }
        else if ($("#date").val() == ""){
            alert("Failed to book. Please insert your preferred date.");
            booking=false;
        }
        else if ($("#time").val() == ""){
            alert("Failed to book. Please insert your preferred time.");
            booking=false;
        }
        else if ($("#ch_name").val() == ""){
            alert("Failed to book. Please insert your credit card holder's name.");
            booking=false;
        }
        else if ($("#cc_number").val() == ""){
            alert("Failed to book. Please insert your credit card number.");
            booking=false;
        }
        else if ($("#cvv").val() == ""){
            alert("Failed to book. Please insert your CVV.");
            booking=false;
        }
        else {
            // SOURCE: https://stackoverflow.com/questions/18712899/check-whether-the-date-entered-by-the-user-is-current-date-or-the-future-date
            var today = new Date().getTime();
            var userdate = $("#date").val();
            userdate = userdate.split("-");
            userdate = new Date(userdate[0], userdate[1] - 1, userdate[2]);
            if (userdate.getTime() < today){
                booking = false;
                alert("Failed to book. Please choose a future day for your appointment.")
                return;
            }
            if (userdate.getDay() == 0){
                booking = false;
                alert("Failed to book. The clinic is not open on Sundays for appointments.");
                return;
            }

            // Adapted from the source above
            var time = $("#time").val();
            time = time.split(":");
            if (time < 8 || time > 18){
                booking = false;
                alert("Failed to book. Our clinic is only open from 8:00 AM to 6:00 PM.")
                return;
            }

            var creditcard = $("#cc_number").val();
            if (creditcard.length != 16){
                booking = false;
                alert("Failed to book. Your credit card number was not a valid length (16).");
                console.log(creditcard);
                console.log(creditcard.length);
                return;
            }

            var ccv = $("#cvv").val();
            if (ccv.length != 3){
                booking = false;
                alert("Failed to book. Your CVV was not a valid length (3).");
                return;
            }

            var phone = $("#phone").val();
            if (phone.length != 12){
                booking = false;
                alert("Failed to book. Your phone number should be in the format XXX-XXX-XXXX");
                console.log(phone.length)
                return;
            }

            var email = $("#email").val();
            if (!validateEmail(email)){
                booking = false;
                alert("Failed to book. Your email was not valid.");
                return;
            }
        }
        if (booking) {
            alert("Your appointment is booked!");
            $("#booking").modal('hide');
        }
    });

    // Function to validate an input email.
    // SOURCE: https://www.w3resource.com/javascript/form/email-validation.php
    function validateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return true;
        }
        return false;
    }

    // Options for the modal. Allow us to only show the active form the user is working on
    // SOURCE: https://www.w3schools.com/jquery/jquery_slide.asp
    $("#appt_button").click(function(){
        $("#appt_info").slideToggle();
        $("#payment").slideUp();
        $("#personal_info").slideUp();
    });

    $("#payment_button").click(function(){
        $("#payment").slideToggle();
        $("#appt_info").slideUp();
        $("#personal_info").slideUp();
    });

    $("#personal_button").click(function(){
        $("#personal_info").slideToggle();
        $("#payment").slideUp();
        $("#appt_info").slideUp();
    });

    // Tooltips for the forms and buttons.
    // SOURCE: Provided code.
    $("#booking_button1").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#booking_button2").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#booking_button3").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#booking_button4").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#booking_button5").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#pet_name").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#date").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#time").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#service").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#doctor").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#name").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#email").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#ch_name").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cc_number").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#ccmonth").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#ccyear").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cvv").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
});