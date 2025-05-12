import App from "./pages/app.js";

const app = new App({
  content: document.getElementById("main-content"),
  drawerButton: document.getElementById("drawer-button"),
  navigationDrawer: document.getElementById("navigation-drawer"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
