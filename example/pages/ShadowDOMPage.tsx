import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

const shadowDOMExample = `class MyCustomElement extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = \`
            <style>
                p {
                    color: red;
                }
            </style>
            <p>
                <slot/>
            </p>
        \`;
    }
}`;

export default class ShadowDOMPage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 2 }>
                    What is "Shadow DOM"?
                </Powerslide.Heading>
                <Powerslide.Layout basis={ 0 } padding={ 64 }>
                    <Powerslide.Quote src='Developer.Mozilla.org'>
                        <Powerslide.Text size={ 1.5 }>
                            The Shadow DOM API is a key part of
                            [encapsulation for web components], providing a
                            way to attach a hidden separated DOM to an element.
                        </Powerslide.Text>
                    </Powerslide.Quote>
                </Powerslide.Layout>
                <Powerslide.Layout grow shrink>
                    <Powerslide.Layout style={ { marginRight: '40px' } }>
                        <Powerslide.List>
                            <Powerslide.List.Item>
                                Attach a <Powerslide.Code.Var textContent='ShadowRoot'/> to an Element
                            </Powerslide.List.Item>
                            <Powerslide.List.Item>
                                Styles within a Shadow DOM do not "leak"
                            </Powerslide.List.Item>
                            <Powerslide.List.Item>
                                Children can be made visible by using
                                the <Powerslide.Code.Var textContent='<slot>'/> Element
                            </Powerslide.List.Item>
                        </Powerslide.List>
                    </Powerslide.Layout>
                    <Powerslide.Layout>
                        <Powerslide.Code textContent={ shadowDOMExample }/>
                    </Powerslide.Layout>
                </Powerslide.Layout>
            </Powerslide.Layout>
        ];
    }
}
