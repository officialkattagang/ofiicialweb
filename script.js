// script.js (only JS as requested)

// Hardcoded credentials map (DEMO ONLY).
// Key = email, value = object with password and optional display name.
// Add / edit entries here to test multiple users.
const credentials = {
    "vaibhavguptaa9956@gmail.com": { password: "blue@sky1", name: "Vaibhav" },
    "rudra@gmail.com": { password: "000000", name: "Neha" },
    "kesarwanitarun904@gmail.com": { password: "777777", name: "Tarun" },
    "ghungroo@gmail.com": { password: "ghungroo", name: "Prashant" }
};

// Utility: get sign-in form inside #signIn container
const signInContainer = document.getElementById('signIn');
const signInForm = signInContainer ? signInContainer.querySelector('form') : null;

// Handle sign-in submit
if (signInForm) {
    signInForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const emailInput = document.getElementById('email-signin');
        const passInput = document.getElementById('password-signin');

        const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
        const pass = passInput ? passInput.value : '';

        // basic validation
        if (!email || !pass) {
            alert('Please enter email and password');
            return;
        }

        const record = credentials[email];
        if (record && record.password === pass) {
            // Login success
            // Save minimal info to sessionStorage for protected page to read
            sessionStorage.setItem('loggedInUser', JSON.stringify({
                email: email,
                name: record.name || email
            }));

            // Redirect to protected page (change filename if needed)
            window.location.href = 'hierarchy.html';
        } else {
            alert('Wrong email or password. It will be updated soon!');
        }
    });
} else {
    console.warn('Sign-in form not found in DOM (expected #signIn > form).');
}

// Optional: connect the Sign Up / Sign In toggle buttons in your HTML
// (so the buttons you included will show/hide the correct containers).
const signUpBtn = document.getElementById('signUpButton');
const signInBtn = document.getElementById('signInButton');
const signUpContainer = document.getElementById('signUp');

if (signUpBtn) {
    signUpBtn.addEventListener('click', () => {
        if (signUpContainer) signUpContainer.style.display = 'block';
        if (signInContainer) signInContainer.style.display = 'none';
    });
}
if (signInBtn) {
    signInBtn.addEventListener('click', () => {
        if (signUpContainer) signUpContainer.style.display = 'none';
        if (signInContainer) signInContainer.style.display = 'block';
    });
}

