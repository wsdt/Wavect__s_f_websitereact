import * as React from 'react'
import {WhatsappIcon, WhatsappShareButton} from 'react-share'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.interfaces'

function WhatsAppShare(props: ISocialShareProps
) {

    return <div className='network'>
        <div className='network_clickable'>
            <WhatsappShareButton
                url={props.fullShareUrl}>
                <WhatsappIcon
                    size={props.size}
                    round={props.isIconRound}/>
            </WhatsappShareButton>
        </div>
    </div>
}

export default WhatsAppShare
