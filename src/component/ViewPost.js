import React, { Component } from 'react'
import {
    Link 
} from 'react-router-dom'


class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            username: "Josh Ade",
            comment: "",
            time_of_comment: 12,
            likes: 0
        }

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    }

    submitComment = (e) => {
        e.preventDefault();
        let id = parseInt(e.target.getAttribute('data-attr'))
        console.log(id)
        this.props.addComment(this.state, id);
        this.setState(this.initialState);
    }

    likeClick(id) {
        console.log(id)
        this.props.likePost(id)
    }
    render() {
        const { id, username, time_of_post, user_img, post_img, post_caption,
            //likes, comments 
        } = this.props.viewpost;
        const { comment } = this.state;
        return (
            <div className="view-post-bg">
                <div className="v-p-b">
                    <div className="v-p-btn">
                        <Link to="/">
                            X
                           </Link>
                    </div>
                </div>
                <div className="contents post-container">
                    <div className="post-con-img">
                        <img src={post_img} alt="post" />
                    </div>
                    <div className="post-con-details">

                        <div className="post-author-profile post-con-header">
                            <div className="post-author-img">
                                <img src={user_img} alt="profile-img" />
                            </div>
                            <div className="post-author-details">
                                <h5>{username}</h5>
                                <p> {time_of_post} </p>
                            </div>
                        </div>

                        <div className="post-con-caption">
                            <div className="post-con-c-img">
                                <div className="post-author-img">
                                    <img src={user_img} alt="profile-img" />
                                </div>
                            </div>
                            <div className="post-con-c-caption">
                                <p><h5> {username} </h5>
                                    <span className="tkinter"> {post_caption} </span></p>
                            </div>
                        </div>

                        <div className="post-con-bottom">
                            <div className="post-menu">
                                <div className="post-menu-btn">

                                    <li onClick={() => this.likeClick(id)} data-attr={id}
                                    ><svg xmlns="http://www.w3.org/2000/svg" aria-label="Like" class="_8-yf5 " className="post-svg like-button" fill="currentColor" viewBox="0 0 48 48"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></li>
                                    <li className="li-pad"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Comment" class="_8-yf5 " className="post-svg" fill="currentColor" viewBox="0 0 48 48"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg></li>
                                    <li className="li-pad2"><svg xmlns="http://www.w3.org/2000/svg" aria-label="Share Post" class="_8-yf5 " className="post-svg" fill="currentColor" viewBox="0 0 48 48"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></li>

                                </div>
                                <div className="post-menu-save-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Save" class="_8-yf5 " className="post-svg" fill="currentColor" viewBox="0 0 48 48"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
                                </div>
                            </div>

                            <div className="post-add-comment">
                                <input type="text"
                                    id="comment"
                                    name="comment"
                                    className="add-comment"
                                    placeholder="Add a comment"
                                    value={comment}
                                    onChange={this.handleChange}
                                />
                                <button
                                    onClick={e => this.submitComment(e)}
                                    data-attr={id}
                                >Post</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default ViewPost;