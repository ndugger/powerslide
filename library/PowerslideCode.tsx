import 'codemirror/mode/jsx/jsx';

import * as CodeMirror from 'codemirror';
import * as Cortex from 'cortex';

import PowerslideCodeVar from './PowerslideCodeVar';

export default class PowerslideCode extends Cortex.Component {

    public static Var = PowerslideCodeVar;

    protected handleComponentReady(): void {
        const textarea = this.shadowRoot.getElementById('code_mirror') as HTMLTextAreaElement;

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
            <HTMLTextAreaElement hidden id='code_mirror' value={ this.textContent }/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: contents;
            }

            ${ require('codemirror/lib/codemirror.css') }

            .${ CodeMirror.name } {
                font-family: Share Tech Mono;
                height: 100%;
                width: 100%;
            }
        `
    }
}
