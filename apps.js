// script.js

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'admin' && password === 'password') {
		alert('Login successful!');
	} else {
		errorMessage.textContent = 'Invalid username or password';
	}
});