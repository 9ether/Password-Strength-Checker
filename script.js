function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    var strength = calculatePasswordStrength(password);
    displayStrength(strength);
}

function calculatePasswordStrength(password) {
    var strength = 0;

    // Check length
    if (password.length < 6) {
        return "Very Weak"; // Too short
    }
    else if (password.length < 10) {
        strength += 1; // Medium length
    }
    else {
        strength += 2; // Strong length
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength += 1;
    }

    // Check for consecutive numbers
    if (!/\d{3,}/.test(password)) {
        strength += 1;
    }

    // Check for common patterns (e.g., phone numbers)
    if (!/\b\d{3}-\d{3}-\d{4}\b/.test(password)) {
        strength += 1;
    }

    return convertStrengthToString(strength);
}

function convertStrengthToString(strength) {
    switch (strength) {
        case 0:
            return "Very Weak";
        case 1:
            return "Weak";
        case 2:
            return "Medium";
        case 3:
            return "Strong";
        case 4:
            return "Very Strong";
        case 5:
            return "Excellent";
        default:
            return "Unknown";
    }
}

function displayStrength(strength) {
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Password Strength: " + strength;
}
