import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVidSelected}) => {
    const vList = videos.map((video)=>{
        return <VideoItem key ={video.id.videoId} onVidSelected ={onVidSelected} video={video}/>
    })
    return <div className="ui relaxed divided list">{vList}</div>
}

export default VideoList