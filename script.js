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

function toggleHeight() {
    var cont = document.querySelector('.faq-r-p1');
    cont.classList.toggle('expanded');

    var fix = document.querySelector('.faq-r-span')
    fix.classList.toggle('open');
}

function hide () {
    var slect = document.querySelector(".forgot")
    slect.classList.toggle('hid');
}
