// Write your code here!
// Remove the main#main element
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create the newHeader variable pointing to h1#victory element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Martin is the champion";

// Append the newHeader element to the body
document.body.appendChild(newHeader);
