import * as React from 'react'
import { RedditIcon, RedditShareButton } from 'react-share'
import '../SocialShare.css'
import { ISocialShareProps } from '../SocialShare.interfaces'

function RedditShare(props: ISocialShareProps) {
    return (
        <div className="network_clickable network">
            <RedditShareButton url={props.fullShareUrl}>
                <RedditIcon size={props.size} round={props.isIconRound} />
            </RedditShareButton>
        </div>
    )
}

export default RedditShare
