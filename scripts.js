document.getElementById('loginLink').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('signupLink').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'block';
});

document.getElementById('closeLoginModal').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

document.getElementById('closeSignupModal').addEventListener('click', function() {
    document.getElementById('signupModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const signupModal = document.getElementById("signupModal");
    if (event.target == loginModal) {
        closeModal('loginModal');
    }
    if (event.target == signupModal) {
        closeModal('signupModal');
    }
}

