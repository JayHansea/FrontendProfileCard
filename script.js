document.addEventListener("DOMContentLoaded", () => {
  /**
   * Home Page: Live Time Update
   * This logic only runs if the time element exists on the page.
   */
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (timeElement) {
    function updateTime() {
      const currentTimeMillis = Date.now();
      timeElement.textContent = currentTimeMillis;
    }
    updateTime();
    setInterval(updateTime, 100);
  }

  /**
   * Contact Page: Form Validation
   * This logic only runs if the contact form exists on the page.
   */
  const contactForm = document.querySelector(
    '[data-testid="test-contact-form"]'
  );

  if (contactForm) {
    const nameInput = document.querySelector(
      '[data-testid="test-contact-name"]'
    );
    const emailInput = document.querySelector(
      '[data-testid="test-contact-email"]'
    );
    const subjectInput = document.querySelector(
      '[data-testid="test-contact-subject"]'
    );
    const messageInput = document.querySelector(
      '[data-testid="test-contact-message"]'
    );
    const successMessage = document.querySelector(
      '[data-testid="test-contact-success"]'
    );

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm()) {
        successMessage.textContent =
          "Thank you! Your message has been sent successfully.";
        successMessage.classList.add("visible");
        contactForm.reset();

        setTimeout(() => {
          successMessage.classList.remove("visible");
        }, 5000);
      }
    });

    contactForm.addEventListener("reset", () => {
      clearErrors();
    });

    function validateForm() {
      let isValid = true;
      clearErrors();

      if (nameInput.value.trim() === "") {
        showError(nameInput, "Full name is required.");
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required.");
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        showError(
          emailInput,
          "Please enter a valid email address (e.g., name@example.com)."
        );
        isValid = false;
      }

      if (subjectInput.value.trim() === "") {
        showError(subjectInput, "Subject is required.");
        isValid = false;
      }

      if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Message must be at least 10 characters long.");
        isValid = false;
      }

      return isValid;
    }

    function showError(input, message) {
      const errorField = document.getElementById(`${input.id}-error`);
      errorField.textContent = message;
      input.classList.add("invalid");
    }

    function clearErrors() {
      const errorMessages = contactForm.querySelectorAll(".form-message.error");
      errorMessages.forEach((msg) => (msg.textContent = ""));

      const invalidInputs = contactForm.querySelectorAll(".invalid");
      invalidInputs.forEach((input) => input.classList.remove("invalid"));

      successMessage.classList.remove("visible");
    }
  }
});
