
// document.addEventListener('DOMContentLoaded', function() {
//     const texts = [
//         {
//             greeting: 'Hello!',
//             name: 'Muhammad Mustafa',
//             description: 'A Freelance Web Designer',
//             img: '/Images/hero-img.png'
//         },
//         {
//             greeting: 'Welcome!',
//             name: 'Jane Doe',
//             description: 'A Graphic Designer',
//             img: '/Images/hero-2.png',
//         },
//     ];

//     let currentIndex = 0;

//     function changeContent() {
//         const greetingElement = document.getElementById('greeting');
//         const nameElement = document.getElementById('name');
//         const descriptionElement = document.getElementById('description');
//         const imgElement = document.getElementById('hero-img');

//         // Remove the 'show' class to start the fade out
//         greetingElement.classList.remove('show');
//         nameElement.classList.remove('show');
//         descriptionElement.classList.remove('show');
//         imgElement.classList.remove('show');

//         // Set a timeout to change content after fade out is done
//         setTimeout(() => {
//             greetingElement.textContent = texts[currentIndex].greeting;
//             nameElement.textContent = texts[currentIndex].name;
//             descriptionElement.textContent = texts[currentIndex].description;
//             imgElement.src = texts[currentIndex].img;

//             // Add the 'show' class to start the fade in
//             greetingElement.classList.add('show');
//             nameElement.classList.add('show');
//             descriptionElement.classList.add('show');
//             imgElement.classList.add('show');

//             // Update the index
//             currentIndex = (currentIndex + 1) % texts.length;
//         }, 1000); // Match this timeout with the transition duration
//     }

//     // Initial display
//     changeContent();

//     // Change content every 5 seconds
//     setInterval(changeContent, 4000); // Allow time for fade out and fade in
// });

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