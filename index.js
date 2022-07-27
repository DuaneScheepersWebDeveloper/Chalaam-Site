const toggleButton = document.getElementsByClassName('custom-toggle-button')[0];
const navbarLinks = document.getElementsByClassName('custom-navbar-links')[0];
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});
