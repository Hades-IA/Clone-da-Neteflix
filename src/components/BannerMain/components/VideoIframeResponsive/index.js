import React from "react";

import { VideoContainer, ResponsiveIframe } from "./style";

function YouTubeIframeResponsive({ youtubeID, titleIframe }) {
    return (
        <VideoContainer>

            <ResponsiveIframe
                title={titleIframe || "titulo"}
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </VideoContainer>
    )
}

export default YouTubeIframeResponsive;