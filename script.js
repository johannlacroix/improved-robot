const openButtons = document.querySelectorAll('.open-button');
const closeButtons = document.querySelectorAll('.close-button');
const sections = document.querySelectorAll('section');

// Ajoute un événement de clic sur chaque bouton "Open"
openButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const target = button.getAttribute('href');
    document.querySelector(target).classList.add('active');
  });
});

// Ajoute un événement de clic sur chaque bouton "Close"
closeButtons.forEach((button) => {

