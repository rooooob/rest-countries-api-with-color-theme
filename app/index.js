import { App } from "./App.js";


document.addEventListener("DOMContentLoaded", e => App());
window.addEventListener("hashchange", () => {
    App();
});
