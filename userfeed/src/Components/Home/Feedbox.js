import React, {useState,useEffect} from 'react';



// Post media
const Media = ({ media }) => {
    return (
        
        <div className="image-box">
            {
                media?
                media.map(media=>{
                    return(
                        <div 
                            className="col-2"
                            key={media.id}
                        >
                            <img
                                src={media.link}
                                alt="ph" 
                            />
                        </div>
                    )
                })
                :''
            }
            
        </div>
    )
}

// comments on post
const PostedComment = ({ text }) => {
    return (
        <div className="posted-comment">
            {text}
        </div>
    )
}

// form to add new comment on post
const NewCommentForm = ({styles, addComment, postIndex}) => {

    const [comment, setComment] = useState('');

    const handlePostCommentForm = e =>{
        e.preventDefault();
        if(!comment) return;
        addComment(comment,postIndex)
    }

    return (
        <form action="" method="post" onSubmit={handlePostCommentForm}>
            <textarea 
                className="width-100" 
                name="" 
                cols="" 
                rows="" 
                onChange={(e)=> setComment(e.target.value) }
                placeholder="comment">
            
            </textarea>
            <div style={styles.postButton}>
                <input name="" type="submit" value="Post" />
            </div>
        </form>
    )
}

// Feed box
const Feedbox = props => {
    const [comments, addComments] = useState([])
    const addmorecomment = (text,postIndex) =>{
        props.addComment(text,postIndex)
    }

    useEffect(()=>{
        addComments(props.postComments)
    })
    
    return (
        <div className="feed-box" key={props.postId}>
            <p>{props.postText} {props.postIndex}</p>
            <Media media={props.postMedia} />
            <div className="comment-box">
                
                <NewCommentForm 
                    styles={props.homeStyle} 
                    addComment={addmorecomment}
                    postIndex={props.postIndex}

                />
                {
                    comments?
                    comments.map(comment=>{
                        return(
                            <PostedComment 
                                text={comment.text}
                            />
                        )
                    })
                    :
                    ''
                    
                }
                
                
            </div>
        </div>
    );
};

export default Feedbox;