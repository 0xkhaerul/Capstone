import RegisterPresenter from "./register-presenter.js";
import RegisterView from "./register-view.html";

export default class RegisterPage {
  #presenter;
  #formElements = {
    form: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
    errorMessage: null,
    submitButton: null,
  };

  constructor() {
    this.#presenter = new RegisterPresenter(this);
  }

  async render() {
    return RegisterView;
  }

  async afterRender() {
    this.#formElements = {
      form: document.getElementById("registerForm"),
      username: document.getElementById("username"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      confirmPassword: document.getElementById("confirm-password"),
      errorMessage: document.getElementById("errorMessage"),
      submitButton: document.querySelector(
        "#registerForm button[type='submit']"
      ),
    };

    // Set up event listeners
    this.#formElements.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.#presenter.handleRegister();
    });
  }

  getFormData() {
    return {
      username: this.#formElements.username.value,
      email: this.#formElements.email.value,
      password: this.#formElements.password.value,
      confirmPassword: this.#formElements.confirmPassword.value,
    };
  }

  showError(message) {
    this.#formElements.errorMessage.textContent = message;
    this.#formElements.errorMessage.style.display = "block";
    this.#formElements.errorMessage.className = "error-message";
  }

  showSuccess(message) {
    this.#formElements.errorMessage.textContent = message;
    this.#formElements.errorMessage.style.display = "block";
    this.#formElements.errorMessage.className = "success-message";
  }

  clearError() {
    this.#formElements.errorMessage.textContent = "";
    this.#formElements.errorMessage.style.display = "none";
  }

  setLoading(isLoading) {
    if (isLoading) {
      this.#formElements.submitButton.disabled = true;
      this.#formElements.submitButton.textContent = "Registering...";
    } else {
      this.#formElements.submitButton.disabled = false;
      this.#formElements.submitButton.textContent = "Register";
    }
  }

  navigateToLogin() {
    window.location.hash = "#/login";
  }
}
