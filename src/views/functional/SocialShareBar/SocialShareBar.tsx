import * as React from 'react'
import { HOST } from '../../../globalConstants'
import {FacebookShare} from './SocialShare/social_media/FacebookShare'
import {LinkedInShare} from './SocialShare/social_media/LinkedInShare'
import {RedditShare} from './SocialShare/social_media/RedditShare'
import {TwitterShare} from './SocialShare/social_media/TwitterShare'
import {WhatsAppShare} from './SocialShare/social_media/WhatsAppShare'
import './SocialShare/SocialShare.css'
import {iconSize, isIconRound} from './SocialShareBar.constants'
import {ISocialShareBarProps} from './SocialShareBar.props'


export const SocialShareBar = (props: ISocialShareBarProps) => {
    const shareUrl: string = HOST + props.shareUrl

    return (
        <div className='all_networks'>
            <LinkedInShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <WhatsAppShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <FacebookShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <TwitterShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
            <RedditShare fullShareUrl={shareUrl} isIconRound={isIconRound} size={iconSize} />
        </div>
    )
}