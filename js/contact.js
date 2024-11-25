document.addEventListener("DOMContentLoaded", function () {
    var contactMethod = document.getElementById("contact-method");
    var emailInput = document.getElementById("email-input");
    var phoneInput = document.getElementById("phone-input");

    contactMethod.addEventListener("change", function () {
        var selectedValue = contactMethod.value;

        emailInput.style.display = "none";
        phoneInput.style.display = "none";

        if (selectedValue === "email") {
            emailInput.style.display = "block";
        } else if (selectedValue === "phone") {
            phoneInput.style.display = "block";
        }
    });
});
