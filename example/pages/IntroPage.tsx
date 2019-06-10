import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import { blue } from '../util/palette';

export default class IntroPage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 2 }>
                    What are "Native Web Components"?
                </Powerslide.Heading>
                <Powerslide.Layout align='center' basis={ 0 } padding={ 64 }>
                    <Powerslide.Quote src='WebComponents.org'>
                        <Powerslide.Text size={ 1.5 }>
                            Web components are a set of web platform APIs that allow
                            you to create new custom, reusable, encapsulated HTML
                            tags to use in web pages and web apps. Custom components
                            and widgets built on the Web Component standards
                            will work across modern browsers.
                        </Powerslide.Text>
                    </Powerslide.Quote>
                </Powerslide.Layout>
                <Powerslide.List>
                    <Powerslide.List.Item>
                        <Powerslide.Text strike>
                            HTML Imports
                        </Powerslide.Text>
                    </Powerslide.List.Item>
                    <Powerslide.List.Item>
                        <Powerslide.Text>
                            <Powerslide.Code.Var textContent='<template>'/> Element
                        </Powerslide.Text>
                        <Powerslide.List sub>
                            <Powerslide.List.Item>
                                <Powerslide.Text>
                                    Useful in situations not covered by this presentation
                                </Powerslide.Text>
                            </Powerslide.List.Item>
                        </Powerslide.List>
                    </Powerslide.List.Item>
                    <Powerslide.List.Item>
                        <Powerslide.Text color={ `rgb(${ blue })` }>
                            Custom Elements
                        </Powerslide.Text>
                    </Powerslide.List.Item>
                    <Powerslide.List.Item>
                        <Powerslide.Text color={ `rgb(${ blue })` }>
                            Shadow DOM
                        </Powerslide.Text>
                    </Powerslide.List.Item>
                </Powerslide.List>
            </Powerslide.Layout>
        ];
    }
}
