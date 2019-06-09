import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import Logo from './components/Logo';

import CoverPage from './pages/CoverPage';
import IntroPage from './pages/IntroPage';
import TimelinePage from './pages/TimelinePage';

import { blue, white } from './util/palette';

const pages = [
    CoverPage,
    IntroPage,
    TimelinePage
];

class PowerslideExample extends Cortex.Component {

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
            }

            .${ Powerslide.Heading.name } {
                font-family: Oswald;
            }

            .${ Powerslide.Page.name } {
                filter: drop-shadow(0 3px 6px rgba(${ blue }, 0.3));
                transition: all 0.4s ease;
            }

            .${ Powerslide.Page.name }[ hidden ] {
                filter: blur(40px);
                opacity: 0;
            }
        `;
    }
}

document.body.append(new PowerslideExample());
