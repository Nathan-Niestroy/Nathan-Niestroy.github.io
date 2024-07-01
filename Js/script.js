// script.js

// Select all navigation links with class .nav-link
const navLinks = document.querySelectorAll('.nav-link');
// Select all tab content sections
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');

        // Hide all tab content sections
        tabContents.forEach(tab => tab.style.display = 'none');
        // Display the corresponding tab content section
        const tabId = this.getAttribute('href').substring(1); // Get tab ID without '#'
        document.getElementById(tabId).style.display = 'block';
    });
});
