function validateForm() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        return "Please enter your name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Please enter a valid email address.";
    }

    if (message.length < 10) {
        return "Your message must contain at least 10 characters.";
    }

    if (message.length > 200) {
        return "Your message cannot exceed 200 characters.";
    }

    return "";
}

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const errorMessage = validateForm();

    if (errorMessage !== "") {
        alert(errorMessage);
        return;
    }

    alert("Your message is ready to be sent!");

    contactForm.submit();

});