import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './style';

function getYoutubeURL(YouURL) {
    return YouURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7');

};

export default function BannerMain({
    videoTitle,
    videoDescription,
    url,
}) {
    const youtubeURL = getYoutubeURL(url);
    const bgURL = `https://img.youtube.com/vi/${youtubeURL}/maxresdefault.jpg`;
    return (
        <BannerMainContainer backgroundImage={bgURL}>

            <ContentAreaContainer>

                <ContentAreaContainer.Item>


                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>

                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>

                </ContentAreaContainer.Item>


                <ContentAreaContainer.Item>

                    <VideoIframeResponsive
                        youtubeID={youtubeURL}
                        titleIframe={videoTitle}
                    />

                    <WatchButton>
                        Assistir
                    </WatchButton>

                </ContentAreaContainer.Item>

            </ContentAreaContainer>

        </BannerMainContainer>
    );


};