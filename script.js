function toggleAccordion(button) {
    const content = button.closest('.faq-r-1').querySelector('.faq-r-p1');
    const parent = button.closest('.faq-r-1');

    // Toggle content visibility
    if (content.style.display === "block") {
        content.style.display = "none"; // Collapse the content
        parent.classList.remove('active'); // Remove active class
    } else {
        content.style.display = "block"; // Expand the content
        parent.classList.add('active'); // Add active class
    }
}