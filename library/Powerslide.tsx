import * as Cortex from 'cortex';

import PowerslideCode from './PowerslideCode';
import PowerslideHeading from './PowerslideHeading';
import PowerslideLayout from './PowerslideLayout';
import PowerslidePage from './PowerslidePage';

export default class Powerslide extends Cortex.Component {

    public static Code = PowerslideCode;
    public static Heading = PowerslideHeading;
    public static Layout = PowerslideLayout;
    public static Page = PowerslidePage;

    public render(): Cortex.Node[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: block;
                height: 100%;
                position: relative;
                width: 100%;
            }
        `;
    }
}
