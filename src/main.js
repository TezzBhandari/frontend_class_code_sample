import "./style.css";
import Header from "./header.js";
import Content from "./content.js";

document.addEventListener("DOMContentLoaded", () => {
    const appElement = document.querySelector("#app");
    appElement.appendChild(Header.init());
    appElement.appendChild(Content.init());
});
