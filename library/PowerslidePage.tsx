import * as Cortex from 'cortex';

export default class PowerslidePage extends Cortex.Component {

    public render(): Cortex.Node[] {
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
        `;
    }
}
