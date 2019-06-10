import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import Logo from './components/Logo';

import CoverPage from './pages/CoverPage';
import CustomElementsPage from './pages/CustomElementsPage';
import IntroPage from './pages/IntroPage';
import ShadowDOMPage from './pages/ShadowDOMPage';
import TimelinePage from './pages/TimelinePage';

import { black, blue, green, white } from './util/palette';

const pages = [
    CoverPage,
    IntroPage,
    CustomElementsPage,
    ShadowDOMPage,
    TimelinePage
];

class NativeWebComponentsPresentation extends Cortex.Component {

    public render(): Cortex.Node[] {
        return [
            <Powerslide>

                { pages.map((Page, index) => (
                    <Powerslide.Page>

                        { (index > 0) && <Logo/> }

                        <Page/>
                    </Powerslide.Page>
                )) }

            </Powerslide>
        ];
    }

    public theme(): string {
        return `
            .${ Powerslide.name } {
                background-color: rgb(${ white });
                background-image: linear-gradient(45deg,
                    rgba(${ white }, 0.85) 0%,
                    rgba(${ white.map(x => x - 15) }, 0.85) 50%,
                    rgba(${ white.map(x => x - 35) }, 0.85) 50%,
                    rgba(${ white }, 0.85) 100%
                );
                color: rgba(${ black }, 0.85);
            }

            .${ Powerslide.Code.name } {
                opacity: 0.85;
            }

            .${ Powerslide.Code.Var.name } {
                color: rgba(${ green }, 0.85);
                font-family: Share Tech Mono;
            }

            .${ Powerslide.Heading.name } {
                font-family: Oswald;
            }

            .${ Powerslide.List.Item.name } {
                font-family: Abel;
            }

            .${ Powerslide.Page.name } {
                filter: drop-shadow(0 3px 6px rgba(${ blue }, 0.33));
                transition: all 0.66s ease;
            }

            .${ Powerslide.Page.name }[ hidden ] {
                filter: blur(40px);
                opacity: 0;
            }

            .${ Powerslide.Quote.name } {
                font-family: Oswald;
            }

            .${ Powerslide.Text.name } {
                font-family: Abel;
            }
        `;
    }
}

document.body.append(new NativeWebComponentsPresentation());
