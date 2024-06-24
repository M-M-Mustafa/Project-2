
// for Nav active LInk
// Select all sections and navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                // Remove active class from all links
                link.classList.remove('active');
                // Add active class to the current section's nav link
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// for Hero Section

document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        {
            greeting: 'Hello!',
            name: 'Muhammad Mustafa',
            description: 'A Freelance Web Designer',
            img: '/Images/hero-img.png'
        },
        {
            greeting: 'Welcome!',
            name: 'Jane Doe',
            description: 'A Graphic Designer',
            img: '/Images/hero-2.png',
        },
    ];

    let currentIndex = 0;

    function changeContent() {
        const greetingElement = document.getElementById('greeting');
        const nameElement = document.getElementById('name');
        const descriptionElement = document.getElementById('description');
        const imgElement = document.getElementById('hero-img');

        // Remove the 'show' class to start the fade out
        greetingElement.classList.remove('show');
        nameElement.classList.remove('show');
        descriptionElement.classList.remove('show');
        imgElement.classList.remove('show');

        // Set a timeout to change content after fade out is done
        setTimeout(() => {
            greetingElement.textContent = texts[currentIndex].greeting;
            nameElement.textContent = texts[currentIndex].name;
            descriptionElement.textContent = texts[currentIndex].description;
            imgElement.src = texts[currentIndex].img;

            // Add the 'show' class to start the fade in
            greetingElement.classList.add('show');
            nameElement.classList.add('show');
            descriptionElement.classList.add('show');
            imgElement.classList.add('show');

            // Update the index
            currentIndex = (currentIndex + 1) % texts.length;
        }, 1000); // Match this timeout with the transition duration
    }

    // Initial display
    changeContent();

    // Change content every 5 seconds
    setInterval(changeContent, 4000); // Allow time for fade out and fade in
});

// java

// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//   const target = parseInt(counter.dataset.count);
//   const increment = Math.ceil(target / 100);
//   let count = parseInt(counter.textContent.replace('+', '')); // Get the current count value

//   const interval = setInterval(() => {
//     count += increment;
//     counter.innerText = `${count}+`;

//     if (count >= target) {
//       clearInterval(interval);
//     }
//   }, 50);
// });

//For Downloading Cv

    function downloadCV() {
        // Replace with the path to your CV PDF file
        var pdfUrl = 'Assets/Mustafa-Resume.pdf';
        
        // Create an <a> element
        var a = document.createElement('a');
        a.href = pdfUrl;
        a.download = 'mustafa_cv.pdf'; // Specify the filename for the downloaded file
        
        // Append the <a> element to the DOM (necessary for Firefox)
        document.body.appendChild(a);
        
        // Programmatically trigger a click event on the <a> element
        a.click();
        
        // Remove the <a> element from the DOM
        document.body.removeChild(a);
    }

