import * as Cortex from 'cortex';

import Powerslide from './Powerslide';

export default class PowerslidePage extends Cortex.Component {

    public parentNode: Powerslide;

    public render(): Cortex.Node[] {

        if (this.parentNode.childNodes[ this.parentNode.page ] !== this) {
            this.setAttribute('hidden', '');
        }
        else {
            this.removeAttribute('hidden');
        }

        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                bottom: 0;
                box-sizing: border-box;
                display: flex;
                left: 0;
                padding: 64px;
                position: absolute;
                right: 0;
                top: 0;
            }

            :host([ hidden ]) {
                visibility: hidden;
            }
        `;
    }
}
