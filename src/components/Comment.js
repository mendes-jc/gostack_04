import React from 'react';

import './Comment.css';

export default ( {comment} ) => {
    return(
        <div id="commentBody">
            <img id="avatar" src={comment.author.avatar}></img>
            <div id="content">
                <strong>{comment.author.name} </strong>
                {comment.content}
            </div>
        </div>
    )
}