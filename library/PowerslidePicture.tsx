import * as Cortex from 'cortex';

export default class PowerslidePicture extends Cortex.Component {

    public height: number;
    public src: string;
    public width: number;

    public render(): Cortex.Node[] {
        return [
            <HTMLImageElement src={ this.src }/>
        ];
    }

    public theme(): string {
        return `
            .${ HTMLImageElement.name } {
                height: ${ this.height ? `${ this.height }px` : 'auto' };
                width: ${ this.width ? `${ this.width }px` : 'auto' };
            }
        `;
    }
}
