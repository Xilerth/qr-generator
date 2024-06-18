class ControllsComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
        <input type="color" id="outsideColor" name="color" value="#ffffff">
        `
    }


}