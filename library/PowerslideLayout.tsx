import * as Cortex from 'cortex';

type LayoutAlignment = 'start' | 'center' | 'end';
type LayoutDirection = 'horizontal' | 'vertical';
type LayoutJustification = 'start' | 'center' | 'end';

export default class PowerslideLayout extends Cortex.Component {

    public align: LayoutAlignment;
    public basis: string | number;
    public direction: LayoutDirection;
    public grow: boolean;
    public justify: LayoutJustification;
    public padding: number;
    public shrink: boolean;

    public render(): Cortex.Node[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        const alignment = this.align === 'center' ? 'center' : `flex-${ this.align || 'start' }`;
        const basis = typeof this.basis === 'number' ? `${ this.basis }px` : this.basis || 'auto';
        const direction = this.direction === 'vertical' ? 'column' : 'row';
        const grow = this.grow ? 1 : 'unset';
        const justification = this.justify === 'center' ? 'center' : `flex-${ this.justify || 'start' }`;
        const padding = `${ this.padding || 0 }px`;
        const shrink = this.shrink ? 1 : 'unset';

        return `
            :host {
                align-items: ${ alignment };
                box-sizing: border-box;
                display: flex;
                flex-basis: ${ basis };
                flex-direction: ${ direction };
                flex-grow: ${ grow };
                flex-shrink: ${ shrink };
                height: 100%;
                justify-content: ${ justification };
                padding: ${ padding };
                width: 100%;
            }
        `;
    }
}
