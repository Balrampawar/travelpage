// JavaScript code to handle form submission
const tripForm = document.getElementById("trip-form");

tripForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = document.getElementById("destination").value;
    const dates = document.getElementById("dates").value;
    const people = document.getElementById("people").value;
    const person = document.getElementById("person").value;

    // You can add further processing logic here, e.g., sending the booking request to a server

    // Display a confirmation message
    const confirmation = `
        <h2>Booking Confirmed!</h2>
        <p>${person} have booked a trip by ${destination} for ${people} people on ${dates}.</p>
    `;
    document.getElementById("booking-form").innerHTML = confirmation;
});
