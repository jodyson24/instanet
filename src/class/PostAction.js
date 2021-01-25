import u_img from '../img/profileA.jpg';
import p_img_1 from '../img/postA.jpg';
import p_img_2 from '../img/postB.jpg';
import p_img_3 from '../img/postC.jpg';

class PostAction {
    constructor() {
        this.posts = [
            {
                id : 1,
                username: "Josh Ade",
                time_of_post: "12 hours",
                user_img: u_img,
                post_img: p_img_1,
                post_caption: "Chilling with the guys",
                likes: 2,
                comments: [
                    {
                        id : 1,
                        username: "Gilbert John",
                        comment: "Man that's cool",
                        time_of_comment: 12,
                        likes: 0
                    }
                ]
            },
            {
                id: 2,
                username: "Josh Ade",
                time_of_post: "12 hours",
                user_img: u_img,
                post_img: p_img_2,
                post_caption: "Chilling with the guys",
                likes: 2,
                comments: [
                    {
                        id : 2,
                        username: "Mike John",
                        comment: "Man that's cool",
                        time_of_comment: 12,
                        likes: 0
                    }
                ]
            },
            {
                id: 3,
                username: "Josh Ade",
                time_of_post: "12 hours",
                user_img: u_img,
                post_img: p_img_3,
                post_caption: "Chilling with the guys",
                likes: 2,
                comments: [
                    {
                        id : 3,
                        username: "Sara John",
                        comment: "Man that's cool",
                        time_of_comment: 12,
                        likes: 0
                    }
                ]
            }
        ]
    }

    get() {
        return this.posts
    }

    set(post) {
        return this.posts.push(post)
    }
}

export default PostAction;