// Theme Toggle
const toggleThemeButton = document.getElementById('theme-toggle');

toggleThemeButton.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark-theme');

  // Update button text based on theme
  toggleThemeButton.textContent = body.classList.contains('dark-theme')
    ? 'Light Theme'
    : 'Dark Theme';
});

// Dropdown Menu Interaction
const dropdownMenu = document.querySelector('.dropdown-content');
const dropdownButton = document.querySelector('.dropbtn');

// Alert on clicking dropdown options (optional)
dropdownMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    alert(`You clicked: ${event.target.textContent}`);
  }
});

// Dynamic Button Click Alert
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(`You selected: ${button.textContent}`);
  });
});

// Input Handling with Enter Key
const inputBox = document.querySelector('.input-box input');
inputBox.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    alert(`Message Sent: ${inputBox.value}`);
    inputBox.value = ''; // Clear input field
  }
});
