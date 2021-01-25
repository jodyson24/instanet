import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import u_img from '../img/profileA.jpg';
class CreatePost extends Component {
    constructor(props) {
        super(props);

        // this.initialState = {
        //     "username": "Josh Ade",
        //     "time_of_posts": Date.now,
        //     "user_img": u_img,
        //     "post_img": null,
        //     "post_caption": "",
        //     "likes": 0,
        //     "comments": [
        //     ]
        // };
      this.state = {file : null }
    //this.state = this.initialState;
    }

    // handleChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value,
    //     })
    // }

    handleChange = (event) => {
        let files = event.target.files
        console.log(files)
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        console.log(reader)

        reader.onload = (event) => {
            console.log("file", event.target.result)
        }
    }

    // handleFilePreview = (event) => {
    //     this.setState({
    //       file: URL.createObjectURL(event.target.files[0])
    //     })
    //   }

    onPostSubmit = (event) => {
        event.preventDefault();

        this.props.newPost(this.state);
        this.setState(this.initialState);
    }

    // uploadImg() {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(this.files[0]);
    // }

    render() {
        const { post_caption, post_img } = this.state;
        return (
            <div className="background">
                <div className="contents create-post">
                    <div className="return-btn">
                        <button>
                            <Link to="/">
                                X
                           </Link>
                        </button>
                    </div>
                    <div className="new-post">
                        <div className="c-post-header">
                            <div className="title">
                                New Post
                            </div>

                            <div className="send-btn">
                                <button
                                onClick = {(event) => this.onPostSubmit(event)}
                                >Share</button>
                            </div>
                        </div>

                        <div className="post-body">
                            <div className="post-main">
                                <div className="post-main-img">
                                    <img src={post_img} alt="preview-img" />
                                </div>
                                <div className="post-main-caption">
                                    <textarea
                                        name="post_caption"
                                        className="post_caption"
                                        id="post_caption"
                                        placeholder="Write a caption"
                                        value={post_caption}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="selection">
                                <input type="file"
                                    alt="select an image"
                                    placeholder="select an image"
                                    id="post_img"
                                    value={post_img}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="post-options">
                            <div className="tag">
                                <input type="text"
                                    className="post-tag-select"
                                    id="tag"
                                    placeholder="Tag someone"
                                />
                            </div>
                            <div className="tag">
                                <input type="text"
                                    className="post-tag-select"
                                    id="tag"
                                    placeholder="Add Location"
                                />
                            </div>
                            <div className="tag-share">
                                <p>Also Post to</p>
                                <div className="tag-sites">
                                    <div className="other-post">
                                        <label for="facebook">Facebook</label>
                                        <input type="checkbox" className="tag-share-site" id="facebook" />
                                    </div>
                                    <div className="other-post">
                                        <label for="twitter">Twitter</label>
                                        <input type="checkbox" className="tag-share-site" id="twitter" />
                                    </div>
                                    <div className="other-post">
                                        <label for="tumblr">Tumblr</label>
                                        <input type="checkbox" className="tag-share-site" id="tumblr" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePost;