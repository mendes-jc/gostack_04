import React from 'react';

import Comment from './Comment';

import './Post.css';

export default ( { post } ) => {
    return(
        <div id="post">
            <div id="header">
                <img id="authorAvatar" src={post.author.avatar}/>
                <div id="postData">
                    <div id="authorName">{post.author.name}</div>
                    <div id="postDate">{post.date}</div>
                </div>
            </div>
            <div id="body">
                <p id="postContent">
                    {post.content}
                </p>
                <div id="comments">
                    {post.comments.map(comment => (
                        <Comment comment={comment}/>
                    ))}
                </div>
            </div>
        </div>  
    )
}