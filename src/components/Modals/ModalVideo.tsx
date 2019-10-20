import React from 'react'
import { Button, Modal } from 'reactstrap'
import { GrayColorButton } from '../../views/pages/grayscale_color/GrayColorButton/GrayColorButton'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

function ModalVideo() {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(false)
    return (
        <>
            <GrayColorButton icon={faPlay} onClick={() => setScrollingLongContent(true)} outline={true} title="Watch video" />

            <Modal
                isOpen={scrollingLongContent}
                toggle={() => setScrollingLongContent(false)}
                className="modal-lg"
                modalClassName="bd-example-modal-lg"
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                        Pitch-Video (German)
                    </h5>
                    <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setScrollingLongContent(false)}>
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body" style={{ textAlign: 'center' }}>
                    <iframe
                        title="Facebook Video"
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwavect%2Fvideos%2F2634259533272490%2F&show_text=0&width=560"
                        width="100%"
                        height="315"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
                        frameBorder="0"
                        allowTransparency={true}
                        allowFullScreen={true}
                    />
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => setScrollingLongContent(false)}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ModalVideo
