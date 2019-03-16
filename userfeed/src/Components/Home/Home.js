import React from 'react';
import "./css/home.css";
//import Commentbox from './Commentbox';
import Feedbox from './Feedbox';
import UserPost from "./UserPost";


const homeStyle = {
    postButton: {
        textAlign: "right"
    }
};


class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            feeds:[
                {
                    postId:1,
                    postText:'Lorem ipsum dolor sit amet',
                    postMedia:[
                        {
                            id:1,
                            link:'https://cdn.pixabay.com/photo/2017/12/20/22/15/girl-3030737_960_720.jpg'
                        },
                        {
                            id:2,
                            link:'https://cdn.pixabay.com/photo/2018/09/05/04/21/flowers-3655451_960_720.jpg'
                        },
                        {
                            id:3,
                            link:'https://cdn.pixabay.com/photo/2017/12/20/22/15/girl-3030737_960_720.jpg'
                        }
                    ],
                }
            ],
            postComments:{
                1:[
                    {
                        id:1,
                        text:'hellow'
                    }
                ]
            },
            

        }


        //this.handleFeedSubmit   = this.handleFeedSubmit.bind(this);
        //this.handlePost         = this.handlePost.bind(this);
        this.addCommentToPost   = this.addCommentToPost.bind(this);
    }

    handleFeedSubmit = (postId,postText,) =>{

        this.setState(prevState=>{
            return{
                feeds:[
                    {
                    postId:postId,
                    postText:postText,
                    postMedia:[],
                    postComments:[]
                    }, 
                    ...prevState.feeds
                ],
                postComments:{
                    ...prevState.postComments,
                    [postId]:[]
                }
            }
        })
        
    }

    addCommentToPost = (commentText,index) =>{
        
        this.setState(prevState=>{
            return{
                postComments:{
                    ...prevState.postComments,
                    [index]:[
                        ...prevState.postComments[index],
                        {
                            id:Math.random(),
                            text:commentText
                        }
                    ]
                }
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col">
                </div>
                <div className="main">
                    <UserPost
                        homeStyle={homeStyle}
                        addNewPost={this.handleFeedSubmit}
                    />
                    {
                        this.state.feeds?
                            this.state.feeds.map(post=>{
                                return(
                                    <Feedbox 
                                        key={post.postId}
                                        postIndex={post.postId}
                                        postText={post.postText} 
                                        postMedia={post.postMedia} 
                                        postComments={this.state.postComments[post.postId]} 
                                        homeStyle={homeStyle}
                                        addComment={this.addCommentToPost}
                                    />
                                    
                                )
                            })
                        :
                        'Please wait, Magic will happen soon'
                    }
                    
                </div>
                <div className="col">

                </div>
            </div>
        );
    }
};

export default Home;