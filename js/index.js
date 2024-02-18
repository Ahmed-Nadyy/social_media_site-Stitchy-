const loginForm = document.getElementById('login-form');


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const username = document.getElementById('login_username').value;
    const password = document.getElementById('login_password').value;


    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');


    if (username === storedUsername && password === storedPassword) {

        window.location.href = './pages/home.html';
    } else {
        alert('Invalid username or password');
    }
});
