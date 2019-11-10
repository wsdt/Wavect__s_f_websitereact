import { faPlay } from '@fortawesome/free-solid-svg-icons'
import React, {PureComponent} from 'react'
import { Collapse } from 'reactstrap'
import { GrayColorButton } from '../../functional/GrayscaleColor/GrayColorButton/GrayColorButton'
import {ICollapsableVideoProps} from './CollapsableVideo.props'
import {ICollapsableVideoState} from './CollapsableVideo.state'


const fbIframeId: string = 'fbIframeId'
let isFirstOpen: boolean = true

export class CollapsableVideo extends PureComponent<ICollapsableVideoProps,ICollapsableVideoState> {

    public state:ICollapsableVideoState = {
        isCollapseOpen: false,
        isLoading: false,
    }

    public render() {
        return (
            <>
                <GrayColorButton
                    icon={faPlay}
                    onClick={() => {
                        this.setState({isCollapseOpen: !this.state.isCollapseOpen, isLoading: true})
                        isFirstOpen = false // no rerender, thus not in state
                    }}
                    isLoading={this.state.isLoading && !isFirstOpen}
                    outline={true}
                    title={this.props.btnLbl}
                />

                <Collapse isOpen={this.state.isCollapseOpen && !this.state.isLoading}
                          style={{marginTop: 16, overflow: 'hidden', paddingTop: '56.25%', position: 'relative'}}>
                    <iframe
                        id={fbIframeId}
                        title={this.props.iframeTitle}
                        src={
                            this.state.isCollapseOpen
                                ? 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwavect%2Fvideos%2F2634259533272490%2F&show_text=1&mute=0'
                                : undefined
                        } // TODO: Use local video (faster & more configurable) and maybe real pause instead of reload by removing src possible when hidden
                        width='100%'
                        height='100%'
                        onLoad={() => this.setState({isLoading: false})}
                        style={{border: 0, overflow: 'hidden', left: 0, position: 'absolute', top: 0}}
                        scrolling='no'
                        frameBorder='0'
                        allowTransparency={true}
                        allowFullScreen={true}
                    />
                </Collapse>
            </>
        )
    }
}
