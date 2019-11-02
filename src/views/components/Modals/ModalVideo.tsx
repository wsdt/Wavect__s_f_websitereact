import {faPlay} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import {Collapse} from 'reactstrap'
import {GrayColorButton} from '../../pages/grayscale_color/GrayColorButton/GrayColorButton'

interface IModalVideoProps {
    btnLbl: string
    iframeTitle: string
}

const fbIframeId: string = 'fbIframeId'
let isFirstOpen: boolean = true

export const ModalVideo = (props: IModalVideoProps) => {
    const [isCollapseOpen, setCollapseOpen] = React.useState(false)
    const [isLoading, setLoading] = React.useState(true)

    return (
        <>
            <GrayColorButton icon={faPlay} onClick={() => {
                setCollapseOpen(!isCollapseOpen);
                setLoading(true);
                isFirstOpen = false
            }} isLoading={isLoading && !isFirstOpen} outline={true} title={props.btnLbl}/>

            <Collapse isOpen={isCollapseOpen && !isLoading}
                      style={{marginTop: 16, overflow: 'hidden', paddingTop: '56.25%', position: 'relative'}}>
                <iframe
                    id={fbIframeId}
                    title={props.iframeTitle}
                    src={(isCollapseOpen) ? 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwavect%2Fvideos%2F2634259533272490%2F&show_text=1&mute=0' : undefined} // TODO: Use local video (faster & more configurable) and maybe real pause instead of reload by removing src possible when hidden
                    width='100%'
                    height='100%'
                    onLoad={() => setLoading(false)}
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

export default ModalVideo
