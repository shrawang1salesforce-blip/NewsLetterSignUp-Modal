const modal = document.querySelector("[data-modal]");
const emailInput = document.querySelector("#email");
const signupForm = document.querySelector("[data-signup-form]");
const formMessage = document.querySelector("[data-form-message]");
const dismissedKey = "sundayLetterModalDismissed";
let previousFocus;

function openModal() {
  previousFocus = document.activeElement;
  modal.hidden = false;
  emailInput.focus();
}

function closeModal() {
  modal.hidden = true;
  localStorage.setItem(dismissedKey, "true");
  previousFocus?.focus();
}

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", openModal);
});

document.querySelector("[data-close-modal]").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Thanks, you're on the list.";
  signupForm.reset();
});

if (!localStorage.getItem(dismissedKey)) {
  window.setTimeout(openModal, 2500);
}
