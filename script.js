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
