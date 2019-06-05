import * as Cortex from 'cortex';
import Powerslide from '..';

const code = `import * as CodeMirror from 'codemirror';
import * as Cortex from 'cortex';

import 'codemirror/mode/jsx/jsx';

export default class PowerslideCode extends Cortex.Component {

    protected handleComponentReady(): void {
        const textarea = this.shadowRoot.getElementById('codemirror') as HTMLTextAreaElement;

        CodeMirror.fromTextArea(textarea, {
            lineNumbers: true,
            mode: {
                name: 'jsx',
                base: {
                    name: 'javascript',
                    typescript: true
                }
            },
            readOnly: 'nocursor',
            showCursorWhenSelecting: false
        });
    }

    public render(): Cortex.Node[] {
        return [
            <HTMLTextAreaElement id='codemirror' textContent={ this.textContent }/>
        ];
    }

    public theme(): string {
        return \`
            :host {
                display: contents;
            }

            \${ require('codemirror/lib/codemirror.css') }

            .\${ CodeMirror.name } {
                height: 100%;
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
                    <Powerslide.Layout grow>
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
