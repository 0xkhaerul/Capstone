import LoginPresenter from "./login-presenter.js";
import LoginView from "./login-view.html";

export default class LoginPage {
  #presenter;
  #formElements = {
    form: null,
    email: null,
    password: null,
    errorMessage: null,
    submitButton: null,
  };

  constructor() {
    this.#presenter = new LoginPresenter(this);
  }

  async render() {
    return LoginView;
  }

  async afterRender() {
    // Cache form elements
    this.#formElements = {
      form: document.getElementById("loginForm"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      errorMessage: document.getElementById("errorMessage"),
      submitButton: document.querySelector("#loginForm button[type='submit']"),
    };

    // Set up event listeners
    this.#formElements.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.#presenter.handleLogin();
    });
  }

  getFormData() {
    return {
      email: this.#formElements.email.value,
      password: this.#formElements.password.value,
    };
  }

  showError(message) {
    this.#formElements.errorMessage.textContent = message;
    this.#formElements.errorMessage.style.display = "block";
    this.#formElements.errorMessage.className = "error-message";
  }

  clearError() {
    this.#formElements.errorMessage.textContent = "";
    this.#formElements.errorMessage.style.display = "none";
  }

  setLoading(isLoading) {
    if (isLoading) {
      this.#formElements.submitButton.disabled = true;
      this.#formElements.submitButton.textContent = "Logging in...";
    } else {
      this.#formElements.submitButton.disabled = false;
      this.#formElements.submitButton.textContent = "Login";
    }
  }

  navigateTo(path) {
    window.location.hash = path;
  }
}
