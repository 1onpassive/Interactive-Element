const emailInput = document.querySelector('#email');
const errorDisplay = document.querySelector('#email-error');

emailInput.addEventListener('input', (e) => {
    const value = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        errorDisplay.textContent = "Email is required.";
        emailInput.setCustomValidity("Invalid");
    } else if (!emailPattern.test(value)) {
        errorDisplay.textContent = "Please enter a valid email address.";
        emailInput.setCustomValidity("Invalid");
    } else {
        errorDisplay.textContent = ""; // Clear error
        emailInput.setCustomValidity("");
    }
});