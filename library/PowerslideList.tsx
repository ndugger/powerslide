import * as Cortex from 'cortex';

import PowerslideListItem from './PowerslideListItem';

export default class PowerslideList extends Cortex.Component {

    public static Item = PowerslideListItem;

    public ordered: boolean;
    public sub: boolean;

    public render(): Cortex.Node[] {

        if (this.ordered) return [
            <HTMLOListElement>
                <HTMLSlotElement/>
            </HTMLOListElement>
        ];

        return [
            <HTMLUListElement>
                <HTMLSlotElement/>
            </HTMLUListElement>
        ];
    }

    public theme(): string {
        return `
            .${ HTMLOListElement.name }, .${ HTMLUListElement.name } {
                list-style: ${ this.sub ? 'circle' : 'unset' };
                margin-bottom: ${ this.sub ? 0 : '1em' };
                margin-top: ${ this.sub ? '12px' : '1em' };
                opacity: ${ this.sub ? 0.66 : 1 };
            }
        `;
    }
}
