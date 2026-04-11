/* script.js - Smart Login & Persistence */

function openModal() {
    // If user is already logged in, skip the modal and go to chat directly
    if (localStorage.getItem("flora_user_name")) {
        window.location.href = "chat.html";
        return;
    }
    
    var modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal() {
    var modal = document.getElementById('loginModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function startSession() {
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();

    if (name !== "" && email !== "") {
        // Save user data permanently
        localStorage.setItem("flora_user_name", name);
        localStorage.setItem("flora_user_email", email);
        
        window.location.href = "chat.html"; 
    } else {
        alert("Please enter your name and email to meet Flora!");
    }
}

window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        closeModal();
    }
}