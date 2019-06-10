import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import MyCustomElement from '../demos/native/MyCustomElement';

const regularParagraphText = `
    This is a regular, "native" paragraph.
`;

const myCustomElementText = `
    This text will be rendered inside of the slot
    within the Shadow DOM.
`;

const shadowDOMExample = `<p>${ regularParagraphText }</p>

<${ MyCustomElement.tag }>${ myCustomElementText }</${ MyCustomElement.tag }>`;

export default class NativeDemoPage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 2 }>
                    See It In Action
                </Powerslide.Heading>
                <Powerslide.Text>
                    Combining what we know about Custom Elements & Shadow DOM,
                    <HTMLBRElement/>
                    let's render
                    our <Powerslide.Code.Var textContent='MyCustomElement'/> from
                    the previous two slides.
                    <HTMLBRElement/>
                    <HTMLBRElement/>
                </Powerslide.Text>
                <Powerslide.Layout grow shrink>
                    <Powerslide.Layout>
                        <Powerslide.Code textContent={ shadowDOMExample }/>
                    </Powerslide.Layout>
                    <Powerslide.Layout direction='vertical' padding={ 40 }>
                        <Powerslide.Text size={ 1.25 }>
                            <HTMLParagraphElement style={ { marginTop: '0' } }>
                                { regularParagraphText }
                            </HTMLParagraphElement>
                            <HTMLElement tag={ MyCustomElement.tag }>
                                { myCustomElementText }
                            </HTMLElement>
                        </Powerslide.Text>
                    </Powerslide.Layout>
                </Powerslide.Layout>
            </Powerslide.Layout>
        ];
    }
}
