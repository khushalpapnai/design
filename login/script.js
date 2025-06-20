const modal = document.getElementById('id01');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.getElementById('cancelBtn');
const loginForm = document.getElementById('loginForm');

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
cancelBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;

    // Placeholder logic for now
    if (username === "admin" && password === "1234") {
        alert("Login successful");
        window.location.href = "../khushal.html";
        // Redirect: window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
