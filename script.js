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
}, 1000);








fetch('https://coding-week-2024-api.onrender.com/api/data')
            .then(response => response.json())
            .then(data => {
                for (let i = 1; i < 11; i++) { 
                    const apiEntry = document.getElementById(`newsheading${i}`);
                    const apiEntr = document.getElementById(`tareek${i}`);


                    if (apiEntry) {
                        apiEntry.textContent = data[i-1].headline;
                        apiEntr.textContent = data[i-1].date;

                    }
                }
                for (let i = 1; i < 5; i++) { 
                    const apiEntry = document.getElementById(`categirl${i}`);
                    if (apiEntry) {
                        apiEntry.textContent = data[i-1].type;
                    }
                }
                


            })
            .catch(error => {
                console.error('Error fetching the API data:', error);
                for (let i = 1; i < 11; i++) { 
                    const apiEntry = document.getElementById(`newsheading${i}`);
                    if (apiEntry) {
                        apiEntry.textContent = 'API Error';
                    }
                }
                for (let i = 1; i < 5; i++) { 
                    const apiEntry = document.getElementById(`categirl${i}`);
                    if (apiEntry) {
                        apiEntry.textContent = 'API Error';
                    }
                }
            });
        });
fetch('https://coding-week-2024-api.onrender.com/api/data')
        .then(response => response.json())
        .then(data => {     
            const imageIds = ['box1', 'box2', 'box3','box4','box5','box6','box7','box8','box9','box10'];
            for (let i = 0; i < 11; i++) {
                const imageUrl = data[i].image;
                const element = document.getElementById(imageIds[i]);
                element.style.backgroundImage = `url(${imageUrl})`;
            }
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });






           







//blog appering



document.addEventListener('DOMContentLoaded', () => {
    const blogItems = document.querySelectorAll('.rudra');
    const blogContentBox = document.getElementById('blogContentBox');
    const blogContent = document.getElementById('blogContent');

    blogItems.forEach(item => {
        item.addEventListener('click', () => {
            const blogId = item.id;
            const i = blogId.slice(-1);
            console.log(blogId);
            console.log(i);


            fetch(`https://coding-week-2024-api.onrender.com/api/data/`)
            .then(response => response.json())
            .then(data => {
                if (i == 0 ){
                    content = `
                    <h2>${data[9].headline}</h2>
                    <p>${data[9].content}</p>
                    `;
                    blogContent.innerHTML=content;
                    blogContentBox.style.display = 'block';
                    
                }else{
                content = `
                <h2>${data[i-1].headline}</h2>
                <p>${data[i-1].content}</p>
                `;
                blogContent.innerHTML=content;
                blogContentBox.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error fetching blog content:', error);
                blogContent.innerHTML = '<p>Failed to load content. Please try again later.</p>';
                blogContentBox.style.display = 'block';
            });

           
        });
    });
});

function closeBlogContentBox() {
    const blogContentBox = document.getElementById('blogContentBox');
    blogContentBox.style.display = 'none';
}
