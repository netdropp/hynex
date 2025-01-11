// Simple form submission handler
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

// Show/hide scroll to top button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector(".scroll-to-top").style.display = "block";
    } else {
        document.querySelector(".scroll-to-top").style.display = "none";
    }
};

// Hide loading screen after content is loaded
window.onload = function() {
    document.getElementById("loading").style.display = "none";
};