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

        ];
    }

    public theme(): string {
        return `

        `;
    }
}
