// Function to update the time and date
function updateTimeAndDate() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const now = new Date();

    // Format time as HH:MM:SS AM/PM
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedTime = `${String(hours % 12 || 12).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;

    // Format date as Day, Month Date, Year
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString(undefined, options);

    // Update the elements
    timeElement.textContent = formattedTime;
    dateElement.textContent = formattedDate;
}

// Call the function every second
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate(); // Initial call

// Shop Form Submission
document.getElementById('shopForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const weight = document.getElementById('weight').value;

    // Validate form
    if (!name || !phone || !email || !address || !weight) {
        alert('Please fill out all fields.');
        return;
    }

    // Calculate total price based on selected weight
    let totalPrice;
    switch (weight) {
        case '1kg': totalPrice = 65; break;
        case '3kg': totalPrice = 120; break;
        case '5kg': totalPrice = 200; break;
        default: totalPrice = 0;
    }

    // Display receipt
    document.getElementById('receiptName').textContent = name;
    document.getElementById('receiptPhone').textContent = phone;
    document.getElementById('receiptEmail').textContent = email;
    document.getElementById('receiptAddress').textContent = address;
    document.getElementById('receiptWeight').textContent = weight;
    document.getElementById('receiptPrice').textContent = totalPrice.toFixed(2);

    // Show receipt
    document.getElementById('receipt').style.display = 'block';
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    }, 1000);
});