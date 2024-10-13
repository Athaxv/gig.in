
function toggleAccordion(button) {
    const content = button.parentElement.nextElementSibling;
    const isActive = content.style.display === "block";
  
    // Collapse all other open content sections
    const allContent = document.querySelectorAll('.faq-content');
    allContent.forEach((el) => {
      el.style.display = 'none';
      el.previousElementSibling.querySelector('.faq-r-toggle').classList.remove('active');
    });
  
    // Toggle the clicked content section
    content.style.display = isActive ? "none" : "block";
    button.classList.toggle('active', !isActive);
  }
  



function hide () {
    var slect = document.querySelector(".forgot")
    slect.classList.toggle('hid');
}
