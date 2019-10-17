import * as React from 'react'
import {
    LinkedinIcon, LinkedinShareButton,
} from 'react-share'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.interfaces'

function LinkedInShare(props: ISocialShareProps
) {

    return <div className='network_clickable network'>
            <LinkedinShareButton
                url={props.fullShareUrl}>
                <LinkedinIcon
                    size={props.size}
                    round={props.isIconRound}/>
            </LinkedinShareButton>
        </div>
}

export default LinkedInShare
