import * as Cortex from 'cortex';

export default class PowerslideListItem extends Cortex.Component {

    public render(): Cortex.Node[] {
        return [
            <HTMLLIElement>
                <HTMLSlotElement/>
            </HTMLLIElement>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: contents;
                font-family: serif;
            }

            .${ HTMLLIElement.name } {
                font-family: inherit;
                font-size: 1.8rem;
                margin: 0 0 12px;
                padding: 0;
            }
        `;
    }
}
