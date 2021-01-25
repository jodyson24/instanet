import React, { Component } from 'react';
import Header from './component/Header';
import Feed from "./component/Feed";
import Profile from './component/Profile';
import CreatePost from './component/CreatePost';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PostAction from './class/PostAction';
import ViewPost from './component/ViewPost'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],
      color : "orange",
      saved : [],
      tagged : [],
      igtv: [],
      viewpost : []
    }

    this.addComment = this.addComment.bind(this);
    this.likePost = this.likePost.bind(this);
    this.showDetails = this.showDetails.bind(this);
  };

  async componentDidMount() {
    let posts = new PostAction().get();
    this.setState({
      posts : posts
    });
    // console.log(posts[0].comments[0].username)
  }

  showDetails = (id) => {
    let item = this.state.posts.find(post =>
      post.id === id
    ); this.setState({ viewpost: item })
  }

  // likePost(id) {
  //   let postItem = this.state.posts.find(post =>
  //     post.id === id
  //   );
  //   console.log(postItem);
  //   console.log("liked");
  //   postItem.likes += 1;
  //   console.log(postItem.likes)
  //   this.setState({
  //     posts : [...this.state.posts, postItem]
  //   })
  //   let p = this.state.posts;
  //   console.log(p);
  // }

  // likePost(id) {
  //   let posts = this.state.posts.find( (post, i) => {
  //     if(post.id === id) {
  //       return post.likes = post.likes +=1
  //     }
  //   });
  //   console.log("liked");
  //   this.setState({
  //     posts : posts
  //   })
  //   let p = this.state.posts;
  //   console.log(p);
  // }
  likePost(id) {
    let counter = 0;
    counter++
    if(counter === 1){
        // eslint-disable-next-line array-callback-return
        let posts = this.state.posts.find( function (post, i) {
            if (post.id === id) {
              return post.likes = post.likes += 1;
            }
          });
    console.log("liked");
    this.setState({
      posts : posts
    })
    let p = this.state.posts;
    // console.log(p);
    }
    if(counter === 2){
        counter = counter - 2;
        // eslint-disable-next-line array-callback-return
        let posts = this.state.posts.find( function (post, i) {
            if (post.id === id) {
              return post.likes = post.likes -= 1;
            }
          });
    console.log("unliked");
    this.setState({
      posts : posts
    })
    let p = this.state.posts;
    // console.log(p);
    }
  }

  newPost = (post) => {
    this.setState({posts: [...this.state.posts, post]})
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
  }

  
  addComment =(comment, id) => {
    console.log(comment)
    console.log(id)
    let postItem = this.state.posts.find(post =>
      post.id === id
    );
    //postItem.comment = [...postItem.comment, comment]
    console.log(postItem)
    postItem.comments.push(comment);
    let p = this.state.posts;
    console.log(p);
}

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Feed posts={this.state.posts} addComment={this.addComment}
              likePost={this.likePost} showDetails={this.showDetails}
             
              />
            </Route>
            <Route exact path="/new">
              <CreatePost newPost={this.newPost}/>
            </Route>
            <Route exact path="/profile">
              <Profile posts={this.state.posts} />
            </Route>
          </Switch>

          <Switch>
                    <Route path="/viewpost">
                        <ViewPost  viewpost={this.state.viewpost} />
                    </Route>
                </Switch>
        </Router>
      </div>
    )
  }
}

export default App;