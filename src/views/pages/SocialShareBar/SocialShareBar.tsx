import * as React from 'react'
import FacebookShare from './social_media/FacebookShare'
import LinkedInShare from './social_media/LinkedInShare'
import RedditShare from './social_media/RedditShare'
import TwitterShare from './social_media/TwitterShare'
import WhatsAppShare from './social_media/WhatsAppShare'
import './SocialShare.css'
import { HOST } from '../../../globalConstants'

interface ISocialShareBarProps {
    /** Should be full absolute link to current page without hostname, e.g. /blogs */
    shareUrl: string
}

const iconSize: number = 32
const isIconRound: boolean = true

function SocialShareBar(props: ISocialShareBarProps) {
    const shareUrl: string = HOST + props.shareUrl

    return (
        <div className="all_networks">
            <LinkedInShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <WhatsAppShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <FacebookShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <TwitterShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <RedditShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
        </div>
    )
}

export default SocialShareBar
