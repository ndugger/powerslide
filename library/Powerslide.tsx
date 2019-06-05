import * as Cortex from 'cortex';

import PowerslideLayout from './PowerslideLayout';
import PowerslidePage from './PowerslidePage';

export default class Powerslide extends Cortex.Component {

    public static Layout = PowerslideLayout;
    public static Page = PowerslidePage;

    public render(): Cortex.Node[] {
        return [

        ];
    }

    public theme(): string {
        return `

        `;
    }
}
