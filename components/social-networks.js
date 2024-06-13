class SocialComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <a href="https://www.github.com/xilerth" target="_blank">
                <div class="social-networks" title="Welcome to my GitHub">
                    <span>
                        Made with <span class="orange">❤️</span> by Xilerth
                    </span>
                    <img class="github" src="assets/github.svg"/>
                </div>
            </a>
            <style>
                a{
                    text-decoration: none;
                    color: #fff;
                }
                .social-networks{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    transition: 0.3s;
                    align-items: center;
                    cursor: pointer;
                    color:#fff;  
                    .orange{
                        filter: invert(1) sepia(0) saturate(90%) hue-rotate(210deg);
                    }
                    &:hover{
                        scale: 1.2;  
                        transform: rotate(5deg);  
                    }
                    img{
                        &.github{
                            filter: invert(1);
                        }
                        width: 30px;
                        height: 30px;
                    }
                }
            </style>
        `;
  }
}

customElements.define("xil-social", SocialComponent);
