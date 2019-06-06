import * as Cortex from 'cortex';

type LayoutAlignment = 'start' | 'center' | 'end';
type LayoutDirection = 'horizontal' | 'vertical';
type LayoutJustification = 'start' | 'center' | 'end';

export default class PowerslideLayout extends Cortex.Component {

    public align: LayoutAlignment;
    public direction: LayoutDirection;
    public grow: boolean;
    public justify: LayoutJustification;
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
