// Select all project cards
const projectCards = document.querySelectorAll(".project-card");

// Create an observer
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            // Show the card
            entry.target.classList.add("show");
        } else {
            // Hide the card
            entry.target.classList.remove("show");
        }

    });

}, {
    threshold: 0.15
});

// Watch each project card
projectCards.forEach((card) => {
    observer.observe(card);
});

// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Select the sections linked from the navigation
const sections = document.querySelectorAll("#home, #projects, #about");

// Create an observer for the page sections
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            // Remove the active class from all navigation links
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Find the link that matches the visible section
            const activeLink = document.querySelector(
                `.nav-link[href="#${entry.target.id}"]`
            );

            // Highlight the matching navigation link
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, {
    rootMargin: "-20% 0px -60% 0px"
});

// Watch each page section
sections.forEach((section) => {
    navObserver.observe(section);
});

// Select the mobile menu button and navigation list
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

// Toggle the mobile menu when the button is clicked
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");

    // Update the button's accessibility state
    const isOpen = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after selecting a link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
