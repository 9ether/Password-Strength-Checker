function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var strength = calculatePasswordStrength(password);
    displayStrength(strength);
}

function calculatePasswordStrength(password) {
    // Implement your password strength calculation logic here
    // This is just a placeholder
    if (password.length < 6) {
        return "Weak";
    } else if (password.length < 10) {
        return "Medium";
    } else {
        return "Strong";
    }
}

function displayStrength(strength) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Password Strength: " + strength;
}
