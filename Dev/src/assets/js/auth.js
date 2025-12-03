// GrovePortal-Dev — Local Admin Auth

const USER = "admin";
const PASS = "password123";

export function login(username, password) {
  if (username === USER && password === PASS) {
    localStorage.setItem('grove_admin_logged_in', 'true');
    alert("Logged into GrovePortal-Dev Admin");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials — GrovePortal-Dev");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    login(username, password);
  });
});
