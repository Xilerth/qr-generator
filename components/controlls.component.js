class ControllsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
        <style>
            :host{
                display: grid;
                gap: 0.5rem;
            }

            input[type="file"]{
                display: none;
            }

            label.controlls__label-img{
                display: block;
                padding: 0.5rem;
                background: #333;
                color: #fff;
                cursor: pointer;
                text-align: center;
            }

            input[type="color"]{
                border: none;
                width: 20px;
                height: 20px;
                border-radius: 50%;
            }

            input[type="color"]::-webkit-color-swatch-wrapper {
                padding: 0;
            }

            input[type="color"]::-webkit-color-swatch {
                border: none;
                border-radius: 50%;
            }

            .controlls__module-color, .controlls__position-ring-color, .controlls__position-center-color, .controlls__img{
                display: flex;
                gap: 0.5rem;
                align-items: center;
            }
        </style>
            <div class="controlls__module-color">
                <label for="module-color">Dots Color</label>
                <input type="color" id="module-color" value="#ff0000">
            </div>
            <div class="controlls__position-ring-color">
                <label for="position-ring-color">Outside ring color</label>
                <input type="color" id="position-ring-color" value="#ff0000">
            </div>
            <div class="controlls__position-center-color">
                <label for="position-center-color">
                    Inside ring color
                </label>
                <input type="color" id="position-center-color" value="#ff0000">
            </div>
    `;

    const moduleColor = this.shadowRoot.querySelector("#module-color");
    const positionRingColor = this.shadowRoot.querySelector(
      "#position-ring-color"
    );
    const positionCenterColor = this.shadowRoot.querySelector(
      "#position-center-color"
    );
    // const img = this.shadowRoot.querySelector("#img");

    moduleColor.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("module-color", {
          detail: moduleColor.value,
          bubbles: true,
          composed: true,
        })
      );
    });

    positionRingColor.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("position-ring-color", {
          detail: positionRingColor.value,
          bubbles: true,
          composed: true,
        })
      );
    });

    positionCenterColor.addEventListener("input", () => {
      this.dispatchEvent(
        new CustomEvent("position-center-color", {
          detail: positionCenterColor.value,
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  static get observedAttributes() {
    return [
      "module-color",
      "position-ring-color",
      "position-center-color",
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const input = this.shadowRoot.querySelector(`#${name}`);
    input.value = newValue;
  }

  get moduleColor() {
    return this.getAttribute("module-color");
  }

  set moduleColor(value) {
    this.setAttribute("module-color", value);
  }

  get positionRingColor() {
    return this.getAttribute("position-ring-color");
  }

  set positionRingColor(value) {
    this.setAttribute("position-ring-color", value);
  }

  get positionCenterColor() {
    return this.getAttribute("position-center-color");
  }

  set positionCenterColor(value) {
    this.setAttribute("position-center-color", value);
  }
}

customElements.define("xil-controlls", ControllsComponent);
