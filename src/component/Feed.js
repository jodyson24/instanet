import React from 'react';
import SideView from './SideView';
import StoryBoard from './StoryBoard';
import Post from './Post.js';

export default function Feed(props) {

    return (
        <div className="main">
            <div className="contents wall">
                <div className="feed">
                    <StoryBoard />
                    <Post posts={props.posts} 
                    addComment={props.addComment} 
                    likePost={props.likePost}
                    showDetails={props.showDetails}
                    // viewpost={props.viewpost}
                    />
                </div>
                <SideView />
            </div>
        </div>
    )
}