import * as Cortex from 'cortex';
import Powerslide from '..';

const code = `import * as Cortex from 'cortex';

import PowerslideCode from './PowerslideCode';
import PowerslideLayout from './PowerslideLayout';
import PowerslidePage from './PowerslidePage';

export default class Powerslide extends Cortex.Component {

    public static Code = PowerslideCode;
    public static Layout = PowerslideLayout;
    public static Page = PowerslidePage;

    public render(): Cortex.Node[] {
        return [
            <HTMLSlotElement/>
        ];
    }

    public theme(): string {
        return \`
            :host {
                display: block;
                height: 100%;
                position: relative;
                width: 100%;
            }
        \`;
    }
}`;

class PowerslideExample extends Cortex.Component {

    public render(): Cortex.Node[] {
        return [
            <Powerslide>
                <Powerslide.Page>
                    <Powerslide.Layout direction='vertical' grow>
                        <Powerslide.Heading level={ 1 }>
                            Powerslide
                        </Powerslide.Heading>
                        <Powerslide.Code textContent={ code }/>
                    </Powerslide.Layout>
                </Powerslide.Page>
            </Powerslide>
        ]
    }

    public theme(): string {
        return `

        `
    }
}

document.body.append(new PowerslideExample());
