import * as React from 'react'
import { WhatsappIcon, WhatsappShareButton } from 'react-share'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.props'

export const WhatsAppShare = (props: ISocialShareProps) => {
    return (
        <div className="network_clickable network">
            <WhatsappShareButton url={props.fullShareUrl}>
                <WhatsappIcon size={props.size} round={props.isIconRound} />
            </WhatsappShareButton>
        </div>
    )
}
