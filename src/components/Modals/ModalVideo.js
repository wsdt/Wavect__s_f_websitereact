import React from "react";
import { Button, Modal } from "reactstrap";

function ModalVideo() {
    const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
    return(
        <>
            <Button
                className="btn-round mr-1"
                color="neutral"
                onClick={() => setScrollingLongContent(true)}
                outline
            >
                <i className="fa fa-play" />
                Watch video
            </Button>

            <Modal isOpen={scrollingLongContent} toggle={() => setScrollingLongContent(false)}
                   className="modal-lg"
                   modalClassName="bd-example-modal-lg">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                        Pitch-Video (German)
                    </h5>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => setScrollingLongContent(false)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body" style={{textAlign:"center"}}>
                    <iframe
                        title="Facebook Video"
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwavect%2Fvideos%2F2634259533272490%2F&show_text=0&width=560"
                        width="560" height="315" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0"
                        allowtransparency="true" allowFullScreen={true}></iframe>
                </div>
                <div className="modal-footer">
                    <div className="left-side">
                        <Button
                            className="btn-link"
                            color="default"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => setScrollingLongContent(false)}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalVideo;