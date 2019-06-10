import * as Cortex from 'cortex';

export default class Logo extends Cortex.Component {

    public render(): Cortex.Node[] {
        return [
            <HTMLImageElement src='assets/web_components_logo.png' style={ {
                opacity: '0.85',
                position: 'absolute',
                right: '24px',
                top: '20px'
            } } width={ 160 }/>
        ];
    }
}
