
let form = document.getElementById("appointmentForm");

let dateInput = document.getElementById("date");

// Get today's date in local time
function getToday() {
    let today = new Date();

    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");

    return year + "-" + month + "-" + day;
}

// Prevent past dates
dateInput.min = getToday();

// Handle form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let doctor = document.getElementById("doctor").value;
    let date = dateInput.value;

    if (date < getToday()) {
        alert("Please select a valid appointment date.");
        return;
    }

    let result = document.getElementById("result");

    result.textContent =
        "Appointment booked successfully! " +
        "Patient: " + name +
        " | Doctor: " + doctor +
        " | Date: " + date;

    alert("Appointment booked successfully!");

    form.reset();
    dateInput.min = getToday();

});
