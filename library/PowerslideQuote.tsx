import * as Cortex from 'cortex';

export default class PowerslideQuote extends Cortex.Component {

    public src: string;

    public render(): Cortex.Node[] {
        return [
            <HTMLQuoteElement cite={ this.src }>
                <HTMLSlotElement/>
                <HTMLDivElement textContent={ this.src }/>
            </HTMLQuoteElement>
        ];
    }

    public theme(): string {
        return `
            :host {
                font-family: serif;
            }

            .${ HTMLQuoteElement.name } {
                border-left: 6px solid rgba(0, 0, 0, 0.85);
                display: block;
                font-family: inherit;
                padding-left: 20px;
            }

            .${ HTMLQuoteElement.name }::after,
            .${ HTMLQuoteElement.name }::before {
                content: none;
            }

            .${ HTMLDivElement.name } {
                align-items: center;
                display: flex;
                font-family: inherit;
                font-size: 1.2rem;
                font-weight: bold;
            }

            .${ HTMLDivElement.name }::before {
                content: '';
                border-bottom: 3px solid rgba(0, 0, 0, 0.85);
                margin-right: 16px;
                position: relative;
                top: 2px;
                width: 24px;
            }
        `;
    }
}
