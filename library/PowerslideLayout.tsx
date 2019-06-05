import * as Cortex from 'cortex';

type PowerslideLayoutAlignment = 'start' | 'center' | 'end';
type PowerslideLayoutDirection = 'horizontal' | 'vertical';
type PowerslideLayoutJustification = 'start' | 'center' | 'end';

export default class PowerslideLayout extends Cortex.Component {

    public align: PowerslideLayoutAlignment;
    public direction: PowerslideLayoutDirection;
    public grow: boolean;
    public justify: PowerslideLayoutJustification;
    public shrink: boolean;

    public render(): Cortex.Node[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        const alignment = this.align === 'center' ? 'center' : `flex-${ this.align || 'start' }`;
        const direction = this.direction === 'vertical' ? 'column' : 'row';
        const grow = this.grow ? 1 : 0;
        const justification = this.justify === 'center' ? 'center' : `flex-${ this.justify || 'start' }`;
        const shrink = this.shrink ? 1 : 0;

        return `
            :host {
                align-items: ${ alignment };
                display: flex;
                flex-direction: ${ direction };
                flex-grow: ${ grow };
                flex-shrink: ${ shrink };
                justify-content: ${ justification };
            }
        `;
    }
}
