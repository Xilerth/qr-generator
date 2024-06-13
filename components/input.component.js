class InputComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <input type="text" placeholder="Insert the content of the qr here..." />

        <style>
            input {
                width: 100%;
                padding: 10px;
                border: 1px solid #333;
                border-radius: 5px;
                font-size: 16px;
                box-sizing: border-box;
                background: #222;
                color: #fff;
            }
        </style>
    `;

    const input = this.shadowRoot.querySelector("input");
    input.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("data", {
          detail: input.value,
          bubbles: true,
          composed: true,
          dataTransfer: input.value,
        })
      );
    });
  }
}

customElements.define("xil-input", InputComponent);
