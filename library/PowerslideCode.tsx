import 'codemirror/mode/jsx/jsx';

import * as CodeMirror from 'codemirror';
import * as Cortex from 'cortex';

import PowerslideCodeVar from './PowerslideCodeVar';

export default class PowerslideCode extends Cortex.Component {

    public static Var = PowerslideCodeVar;

    protected handleComponentReady(): void {
        const textarea = this.shadowRoot.getElementById('code_mirror_src') as HTMLTextAreaElement;

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
            showCursorWhenSelecting: false,
            theme: 'seti'
        });
    }

    public render(): Cortex.Node[] {
        return [
            <HTMLTextAreaElement hidden id='code_mirror_src' value={ this.textContent }/>
        ];
    }

    public theme(): string {
        return `
            :host {
                display: flex;
                height: 100%;
                width: 100%;
            }

            ${ require('codemirror/lib/codemirror.css') }
            ${ require('codemirror/theme/seti.css') }

            #code_mirror_src + .${ CodeMirror.name } {
                background-color: rgb(0, 0, 0) !important;
            }

            #code_mirror_src + .${ CodeMirror.name } {
                flex-grow: 1;
                font-family: Share Tech Mono, monospace;
                height: auto;
            }

            #code_mirror_src + .${ CodeMirror.name } .${ CodeMirror.name }-gutters {
                background-color: rgb(0, 0, 0) !important;
            }

            #code_mirror_src + .${ CodeMirror.name } .${ CodeMirror.name }-scroll {
                padding-bottom: 0;
            }

            #code_mirror_src + .${ CodeMirror.name } .${ CodeMirror.name }-selected {
                background: rgba(255, 255, 255, 0.12);
            }
        `
    }
}
