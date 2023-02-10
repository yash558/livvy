import React from 'react'
import './Video.css'
import video from '../../assets/video.mp4'
const Video = () => {
  return (
    <div className="video">
      <div className="video_sec">
        <div className="video_title">
          <h1>Feature's of  <span> Livvy App</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, accusamus?</p>
        </div>
        <div className="video_data">
          <div className="video1">
            <video src={video} autoPlay loop></video>
          </div>
          <div className="video1">
            <video src={video} autoPlay loop></video>
          </div>
          <div className="video1">
            <video src={video} autoPlay loop ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video