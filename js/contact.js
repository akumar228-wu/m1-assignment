document.addEventListener("DOMContentLoaded", function () {
    const contactMethod = document.getElementById("contact-method");
    const emailInput = document.getElementById("email-input");
    const phoneInput = document.getElementById("phone-input");

    contactMethod.addEventListener("change", function () {
        const selectedValue = contactMethod.value;

        emailInput.style.display = "none";
        phoneInput.style.display = "none";

        if (selectedValue === "email") {
            emailInput.style.display = "block";
        } else if (selectedValue === "phone") {
            phoneInput.style.display = "block";
        }
    });
});
