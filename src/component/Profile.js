import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import ProfileFooter from './ProfileFooter';

export default function Profile(props) {
    return (
        <div className="main">
            <div className="contents profile">
                <ProfileHeader />
                <ProfileBody posts={props.posts} />
                <ProfileFooter />
            </div>
        </div>
    )
};