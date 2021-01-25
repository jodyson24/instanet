import React from 'react';
import likeIcon from '../img/svg/heart.svg';
import commentIcon from '../img/svg/comment.svg'

export default function ProfilePosts(props) {
    return(
        <div>
             <div className="row">
                    {
                        props.posts.map(post => {
                            const { post_img } = post;
                            return (
                                <div className="profile-post-view">
                                    <div className="profile-post-shadow">
                                        <ul>
                                            <li><img src={likeIcon} alt="likes"></img></li>
                                            <li><img src={commentIcon} alt="likes"></img></li>
                                        </ul>
                                    </div>
                                        <img src={post_img} alt="post" />
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
};