import React from 'react'
import './PlayVideo.css'
import  video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import sava from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'



const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
        {/* <video src={video} controls autoPlay muted ></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoId}` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>Best youTube Channel To Learn Web Development</h3>
        <div className='play-video-info'>
            <p>1525 views &bull; 2 days ago</p>
            <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />10</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={sava} alt="" />Save</span>
        </div>
        </div>
       
        <hr />
        <div className='publisher'>
            <img src={jack} alt="" />
            <div>
            <p>Greatstack</p>
            <span>1M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack to watch More Tutorials on web development</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque rerum iure ut autem quibusdam nisi distinctio provident iste recusandae.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>233</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque rerum iure ut autem quibusdam nisi distinctio provident iste recusandae.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>233</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque rerum iure ut autem quibusdam nisi distinctio provident iste recusandae.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>233</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque rerum iure ut autem quibusdam nisi distinctio provident iste recusandae.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>233</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    

  )
}

export default PlayVideo