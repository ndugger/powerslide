import * as Cortex from 'cortex';

export default class PowerslideCodeVar extends Cortex.Component {

    public render(): Cortex.Node[] {
        return [
            <HTMLElement tag='code'>
                <HTMLSlotElement/>
            </HTMLElement>
        ];
    }

    public theme(): string {
        return `
            :host {
                rgba(255, 255, 255, 0.85)
                display: contents;
                font-family: monospace;
            }

            code {
                background: rgba(0, 0, 0, 0.85);
                color: inherit;
                font-family: inherit;
                font-size: 1.6rem;
                padding: 4px 8px;
            }
        `;
    }
}
