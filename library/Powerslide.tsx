import * as Cortex from 'cortex';

import PowerslideCode from './PowerslideCode';
import PowerslideHeading from './PowerslideHeading';
import PowerslideIcon from './PowerslideIcon';
import PowerslideLayout from './PowerslideLayout';
import PowerslideList from './PowerslideList';
import PowerslidePage from './PowerslidePage';
import PowerslidePicture from './PowerslidePicture';
import PowerslideQuote from './PowerslideQuote';
import PowerslideText from './PowerslideText';

interface PowerslideState {
    page: number;
}

export default class Powerslide extends Cortex.Component {

    public static Code = PowerslideCode;
    public static Heading = PowerslideHeading;
    public static Icon = PowerslideIcon;
    public static Layout = PowerslideLayout;
    public static List = PowerslideList;
    public static Page = PowerslidePage;
    public static Picture = PowerslidePicture;
    public static Quote = PowerslideQuote;
    public static Text = PowerslideText;

    private state = new Cortex.Store<PowerslideState>({
        page: 0
    });

    public get page() {
        return this.state.page;
    }

    private navigateBack(): void {

        if (this.state.page > 0) {
            --this.state.page;
        }
    }

    private navigateForward(): void {

        if (this.state.page < this.children.length - 1) {
            ++this.state.page;
        }
    }

    private toggleFullscreen(): void {

        if (document.fullscreenElement) {
            this.ownerDocument.exitFullscreen().then(() => this.update());
        }
        else {
            this.requestFullscreen().then(() => this.update());
        }
    }

    private isFullscreen(): boolean {
        return document.fullscreenElement === this
            || document.fullscreenElement === this.parentNode
            || document.fullscreenElement === (this.parentNode as ShadowRoot).host;
    }

    protected handleKeydown(event: KeyboardEvent): void {
        const key = event.key.toUpperCase();

        switch (key) {
            case 'ARROWLEFT': {
                this.navigateBack();
                break;
            }
            case 'ARROWRIGHT': {
                this.navigateForward();
                break;
            }
            case 'F': {
                this.toggleFullscreen();
                break;
            }
        }
    }

    protected handleComponentConnect(): void {
        this.state.connect(this);
        window.addEventListener('keydown', e => this.handleKeydown(e));
    }

    protected handleComponentUpdate(): void {

        for (const child of Array.from(this.childNodes)) if (child instanceof PowerslidePage) {
            child.update();
        }
    }

    public render(): Cortex.Node[] {
        return [
            <HTMLElement tag='article'>
                <HTMLSlotElement/>
            </HTMLElement>,
            <HTMLElement tag='nav'>
                <HTMLDivElement id='help'>
                    <PowerslideIcon glyph='help_outline' size={ 32 }/>
                </HTMLDivElement>
                <HTMLDivElement id='navigation'>
                    <PowerslideIcon glyph='arrow_back' onclick={ () => this.navigateBack() } size={ 32 }/>
                    <HTMLDivElement id='page'>
                        { this.state.page + 1 } / { this.childNodes.length }
                    </HTMLDivElement>
                    <PowerslideIcon glyph='arrow_forward' onclick={ () => this.navigateForward() } size={ 32 }/>
                </HTMLDivElement>
                <HTMLDivElement id='fullscreen'>
                    <PowerslideIcon glyph={ this.isFullscreen() ? 'fullscreen_exit' : 'fullscreen' } onclick={ () => this.toggleFullscreen() } size={ 32 }/>
                </HTMLDivElement>
            </HTMLElement>
        ];
    }

    public theme(): string {
        return `
            :host {
                background-color: rgb(0, 0, 0);
                display: flex;
                flex-direction: column;
                height: 100%;
                position: relative;
                width: 100%;
            }

            article {
                flex-grow: 1;
                overflow: hidden;
                position: relative;
                width: 100%;
            }

            nav {
                align-items: center;
                background: rgb(0, 0, 0);
                box-sizing: border-box;
                color: rgb(255, 255, 255);
                cursor: default;
                display: flex;
                font-family: Oswald;
                height: 60px;
                padding: 0 16px;
                user-select: none;
                width: 100%;
            }

            #help {
                display: flex;
            }

            #navigation {
                align-items: center;
                display: flex;
                flex-grow: 1;
                justify-content: center;
            }

            #page {
                padding: 0 24px;
            }

            #fullscreen {
                display: flex;
            }

            .${ PowerslideIcon.name } {
                opacity: 0.66;
                transition: opacity 0.12s ease;
            }

            .${ PowerslideIcon.name }:hover {
                opacity: 1;
            }
        `;
    }
}
