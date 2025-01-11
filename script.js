// Simple form submission handler (you can extend it to connect to a database or email service)
document.getElementById('waitlist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for signing up, ${email}! You'll be notified soon.`);
        document.getElementById('email').value = '';  // Reset the form
    } else {
        alert("Please enter a valid email.");
    }
});