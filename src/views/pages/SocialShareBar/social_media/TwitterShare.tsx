import * as React from 'react'
import {TwitterIcon, TwitterShareButton} from 'react-share'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.interfaces'

function TwitterShare(props: ISocialShareProps
) {

    return <div className='network'>
        <div className='network_clickable'>
            <TwitterShareButton
                url={props.fullShareUrl}>
                <TwitterIcon
                    size={props.size}
                    round={props.isIconRound}/>
            </TwitterShareButton>
        </div>
    </div>
}

export default TwitterShare
