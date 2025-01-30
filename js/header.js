// This function loads the header from header.html and injects it into the page
function loadHeader() {
    const headerElement = document.querySelector('header'); // Find the header tag
    fetch('../header.html')
        .then(response => response.text())
        .then(data => {
            headerElement.innerHTML = data; // Inject the header content
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Load the header when the page loads
document.addEventListener('DOMContentLoaded', loadHeader);
