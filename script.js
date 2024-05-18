function showTab(tabId) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

 //  date and time
 function formatDateTime(date) {
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

document.addEventListener('DOMContentLoaded', function() {

const currentDateTimeElement = document.getElementById('current-date-time');
const now = new Date();
currentDateTimeElement.textContent = formatDateTime(now);

setInterval(() => {
    const now = new Date();
    currentDateTimeElement.textContent = formatDateTime(now);
    }, 1000);})