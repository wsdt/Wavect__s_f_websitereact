import * as React from 'react'
import {
    FacebookIcon,
    FacebookShareButton, FacebookShareCount,
} from 'react-share'
import {Badge} from 'reactstrap'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.interfaces'

function FacebookShare(props: ISocialShareProps
) {

    return <div className='network'>
        <div className='network_clickable'>
            <FacebookShareButton
                url={props.fullShareUrl}>
                <FacebookIcon
                    size={props.size}
                    round={props.isIconRound}/>
            </FacebookShareButton>
        </div>
        <FacebookShareCount
            url={props.fullShareUrl}>
            {count => (
                <Badge color='default'><strong>{count}</strong></Badge>
            )}
        </FacebookShareCount>
    </div>
}

export default FacebookShare
