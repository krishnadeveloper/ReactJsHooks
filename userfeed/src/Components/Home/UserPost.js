import React, { useState, useEffect } from "react";
import Files from "../../Classes/Files";

const UserPost = props => {
    
    const [userPost, setUserPost] = useState({
        post:{
            text:'',
            media:[]
        },
        isFile:false
    });

    const handleFeedSubmit = e => {
        e.preventDefault();
        props.addNewPost(Math.random(),userPost.post.text);
    }

    const setUserPostInput = text =>{
        
        const userPostData = {
            ...userPost,
            post:{
                text:text,
                media:userPost.post.media
            }
        }

        setUserPost(userPostData);
    }

    useEffect(()=>{
        console.log(userPost)
    })

    const validateImage = e =>{
        
        let allFiles = document.getElementById('postMedia').files;
        let allFilesArr = [];

        // check all selected images
        for (const fileData of allFiles) {
            allFilesArr.push(fileData);
            if(!Files.isFileValidToUpload(fileData.name))
            {
                allFilesArr = []
                document.getElementById('postMedia').value = '';
                console.log('File "'+fileData.name+'" is not valid to upload');
            }
        }

        // Update user post data data along with user status
        const userPostData = {
            post:{
                ...userPost.post,
                media:allFilesArr
            },
            isFile:allFilesArr.length>0?true:false
        }

        setUserPost(userPostData);

    }

    return (
        <div className="post-box">
            <form action="" method="post" onSubmit={handleFeedSubmit}>
                <textarea className="width-100" name="userPost" cols="" rows="" onKeyUp={(e)=>{setUserPostInput(e.target.value)}}></textarea>
                
                <input name="media[]" multiple="multiple" id="postMedia" type="file" onChange={validateImage} />
                <div style={props.homeStyle.postButton}>
                    <input name="qw" type="submit" value="Post" />
                </div>
            </form>
        </div>
    )

}

export default UserPost;