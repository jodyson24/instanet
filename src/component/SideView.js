import React from 'react';
import profileImg from "../img/profileA.jpg"

export default function SideView() {
    return(
        <div className="side-view">
        <div className="post-author-profile-side-view">
            <div className="post-author-img">
                <img src={profileImg} alt="profile-img" />
            </div>
            <div className="post-author-details s-v-t-t">
                <h5>joshadegbola</h5>
                <p>Josh Ade</p>
            </div>
        </div>

        <div className="side-view-header">
            <h4>Suggestions For You</h4>
            <p>See All</p>
        </div>

        <div className="suggestion-list">
            <div className="suggestioin-list-item">
                <div className="post-author-profile">
                    <div className="post-author-img s-v-p-i">
                        <img src={profileImg} alt="profile-img" />
                    </div>
                    <div className="post-author-details">
                        <h5 className="s-v-name">makewaymultimedia</h5>
                        <p className="s-v-f">follows you</p>
                    </div>
                </div>

                <div className="s-v-suggest-p">
                    Follow
                    </div>
            </div>

            <div className="suggestioin-list-item">
                <div className="post-author-profile">
                    <div className="post-author-img s-v-p-i">
                        <img src={profileImg} alt="profile-img" />
                    </div>
                    <div className="post-author-details s-v-p">
                        <h5 className="s-v-name">Chris Hemsworth</h5>
                        <p className="s-v-f">follows you</p>
                    </div>
                </div>

                <div className="s-v-suggest-p">
                    Follow
                    </div>
            </div>

            <div className="suggestioin-list-item">
                <div className="post-author-profile">
                    <div className="post-author-img s-v-p-i">
                        <img src={profileImg} alt="profile-img" />
                    </div>
                    <div className="post-author-details">
                        <h5 className="s-v-name">Jon Snow</h5>
                        <p className="s-v-f">Follows you</p>
                    </div>
                </div>

                <div className="s-v-suggest-p">
                    Follow
                    </div>
            </div>
        </div>

        <div className="feed-footer">
            <div className="feed-footer-links">
                <li>About</li>
                <li>Help</li>
                <li>Press</li>
                <li>API</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Locations</li>
                <li>Top</li>
                <li>Accounts</li>
                <li>Hashtags</li>
                <li>Language</li>
                <li>English</li>
            </div>
            <div className="feed-footer-trademark">
                <i class="fa fa-copyright" aria-hidden="true"></i>
                2020 INSTAGRAM FROM FACEBOOK
                </div>
        </div>
    </div>
    )
}