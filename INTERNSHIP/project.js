document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('hover-effect'); 
        });
  
        button.classList.add('active');
  
        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        activeContent.classList.remove('hidden');
  
        activeContent.classList.add('hover-effect');
      });
    });
  });
  