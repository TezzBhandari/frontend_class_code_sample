export default class Content {
    static content = document.createElement("main");
    static init() {
        this.content.innerHTML = "home page";
        return this.content;
    }

    static render(element) {
        this.content.innerHTML = "";
        this.content.appendChild(element);
    }
}
