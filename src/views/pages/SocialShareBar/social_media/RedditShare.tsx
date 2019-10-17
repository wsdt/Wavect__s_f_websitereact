import * as React from 'react'
import {RedditIcon, RedditShareButton, RedditShareCount} from 'react-share'
import {Badge} from 'reactstrap'
import '../SocialShare.css'
import {ISocialShareProps} from '../SocialShare.interfaces'

function RedditShare(props: ISocialShareProps
) {

    return <div className='network'>
        <div className='network_clickable'>
            <RedditShareButton
                url={props.fullShareUrl}>
                <RedditIcon
                    size={props.size}
                    round={props.isIconRound}/>
            </RedditShareButton>
        </div>
        <RedditShareCount
            url={props.fullShareUrl}>
            {count => (
                <Badge color='default'><strong>{count}</strong></Badge>
            )}
        </RedditShareCount>
    </div>
}

export default RedditShare
