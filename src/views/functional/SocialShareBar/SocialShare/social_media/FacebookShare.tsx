import * as React from 'react'
import { FacebookIcon, FacebookShareButton } from 'react-share'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.props'


export const FacebookShare = (props: ISocialShareProps) => {
    return (
        <div className='network_clickable network'>
            <FacebookShareButton url={props.fullShareUrl}>
                <FacebookIcon size={props.size} round={props.isIconRound} />
            </FacebookShareButton>
        </div>
    )
}

