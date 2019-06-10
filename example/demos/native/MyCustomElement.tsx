export default class MyCustomElement extends HTMLElement {

    public static readonly tag = 'my-custom-element';

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: red;
                }
            </style>
            <p>
                <slot/>
            </p>
        `;
    }
}

window.customElements.define(MyCustomElement.tag, MyCustomElement);
