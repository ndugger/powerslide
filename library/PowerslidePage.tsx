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
                display: flex;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
            }
        `;
    }
}
