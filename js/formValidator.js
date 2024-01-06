function validateForm() {
    var name = document.forms["myBookingForm"]["name"].value;
    var name = document.forms["myBookingForm"]["email"].value;
    var name = document.forms["myBookingForm"]["date"].value;
    var name = document.forms["myBookingForm"]["time"].value;

    if(name == ""){
        alert("Name must be filled out");
        return false;
    }

    if(email == ""){
        alert("Email must be filled out");
        return false;
    }

    if(date == ""){
        alert("Please select appointment date");
        return false;
    }

    if(time == ""){
        alert("Appointment time must be chosen");
        return false;
    }
}