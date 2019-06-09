import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import { blue } from '../util/palette';

export default class CoverPage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 1 }>
                    Native Web Components
                </Powerslide.Heading>
                <Powerslide.Heading color={ `rgb(${ blue })` } level={ 3 }>
                    Custom Elements & Shadow DOM
                </Powerslide.Heading>
                <Powerslide.Layout align='center' grow justify='center'>
                    <Powerslide.Picture src='assets/web_components_logo.png' width={ 320 }/>
                </Powerslide.Layout>
                <Powerslide.Layout justify='end'>
                    <Powerslide.Heading level={ 3 }>
                        by Nick Dugger
                    </Powerslide.Heading>
                </Powerslide.Layout>
            </Powerslide.Layout>
        ];
    }
}
