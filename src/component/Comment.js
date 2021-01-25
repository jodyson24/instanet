import React, { Component } from 'react';

class Comment extends Component {
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
        this.props.displayPost(this.state);
        this.setState(this.initialState);
    }

    // addComment = (comment, id) => {
    //     console.log(id)
    //     let Posts = this.props.posts
    //     // let postItem = this.props.posts.find(post =>
    //     //   post.id === id
    //     // );
    //     console.log(Posts)
    //     // postItem.comment = [...postItem.comment, comment]
    //     // console.log(postItem.comments)
    // }
    render() {
        
        const {comment} = this.state;
        return (
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
                    data-attr={this.props.posts.id}
                >Post</button>
            </div>
        )
    }
}

export default Comment;