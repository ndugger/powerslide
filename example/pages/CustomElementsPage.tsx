import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

const customElementExample = `class MyCustomElement extends HTMLElement {
    
    connectedCallback() {
        // Invoked each time the custom element is
        // appended into a document-connected element.
    }

    disconnectedCallback() {
        // Invoked each time the custom element is
        // disconnected from the document's DOM.
    }

    adoptedCallback() {
        // Invoked each time the custom element is
        // moved to a new document.
    }

    attributeChangedCallback() {
        // Invoked each time one of the custom element's
        // attributes is added, removed, or changed.
    }
}

window.customElements.define('my-custom-element', MyCustomElement);`;

export default class CustomElementsPage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 2 }>
                    What are "Custom Elements"?
                </Powerslide.Heading>
                <Powerslide.Layout basis={ 0 } padding={ 64 }>
                    <Powerslide.Quote src='Developer.Mozilla.org'>
                        <Powerslide.Text size={ 1.5 }>
                            Custom elements encapsulate your functionality on an
                            HTML page, rather than having to make do with a
                            long, nested batch of elements that together
                            provide a custom page feature.
                        </Powerslide.Text>
                    </Powerslide.Quote>
                </Powerslide.Layout>
                <Powerslide.Layout grow shrink>
                    <Powerslide.Layout style={ { marginRight: '40px' } }>
                        <Powerslide.List>
                            <Powerslide.List.Item>
                                Create DOM-compatible classes by extending <Powerslide.Code.Var textContent='HTMLElement'/>
                            </Powerslide.List.Item>
                            <Powerslide.List.Item>
                                Hook into Custom Elements' lifecycle callbacks
                            </Powerslide.List.Item>
                            <Powerslide.List.Item>
                                Define a tag name for each new Element
                            </Powerslide.List.Item>
                        </Powerslide.List>
                    </Powerslide.Layout>
                    <Powerslide.Layout>
                        <Powerslide.Code textContent={ customElementExample }/>
                    </Powerslide.Layout>
                </Powerslide.Layout>
            </Powerslide.Layout>
        ];
    }
}
