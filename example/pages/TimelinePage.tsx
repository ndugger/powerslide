import * as Cortex from 'cortex';
import Powerslide from 'powerslide';

import Timeline from '../components/Timeline';

export default class TimelinePage extends Cortex.Fragment {

    public render(): Cortex.Node[] {
        return [
            <Powerslide.Layout direction='vertical' grow>
                <Powerslide.Heading level={ 2 }>
                    Historical Timeline
                </Powerslide.Heading>
                <Powerslide.Layout align='center' grow padding={ 80 }>
                    <Timeline range={ [ 2011, 2021 ] } style={ { flexGrow: '1' } }>
                        <Timeline.Event month={ 4 } year={ 2012 }>
                            <Powerslide.Text size={ 1.33 }>
                                Shadow DOM Proposed
                            </Powerslide.Text>
                        </Timeline.Event>
                        <Timeline.Event month={ 4 } year={ 2013 }>
                            <Powerslide.Text size={ 1.33 }>
                                Custom Elements Proposed
                            </Powerslide.Text>
                        </Timeline.Event>
                        <Timeline.Event month={ 9 } year={ 2016 }>
                            <Powerslide.Layout justify='center' padding={ 16 }>
                                <Powerslide.Picture src='assets/chrome.png' width={ 64 }/>
                            </Powerslide.Layout>
                        </Timeline.Event>
                        <Timeline.Event month={ 2 } year={ 2017 }>
                            <Powerslide.Layout justify='center' padding={ 16 }>
                                <Powerslide.Picture src='assets/safari.png' width={ 64 }/>
                            </Powerslide.Layout>
                        </Timeline.Event>
                        <Timeline.Event month={ 9 } year={ 2018 }>
                            <Powerslide.Layout justify='center' padding={ 16 }>
                                <Powerslide.Picture src='assets/firefox.png' width={ 64 }/>
                            </Powerslide.Layout>
                        </Timeline.Event>
                        <Timeline.Event month={ 3 } year={ 2019 }>
                            <Powerslide.Layout justify='center' padding={ 16 }>
                                <Powerslide.Picture src='assets/edge.png' height={ 64 }/>
                            </Powerslide.Layout>
                        </Timeline.Event>
                    </Timeline>
                </Powerslide.Layout>
            </Powerslide.Layout>
        ];
    }
}
