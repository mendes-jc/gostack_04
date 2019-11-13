import React, { Component } from 'react';

import './PostList.css';
import Post from './Post';

import avatarJulio from "../assets/julio.jpg"
import avatarDiego from "../assets/diego.png";

class PostList extends Component{
    state = {
        posts: [
            {
                id: 1,
                author: {
                  name: "Julio César",
                  avatar: avatarJulio,
                },
                date: "12 Nov 2019",
                content: "Desafio 04 concluído!",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Diego Fernandes",
                      avatar: avatarDiego,
                    },
                    content: "Massa!"
                  }
                ]
            },
            {
                id: 2,
                author: {
                  name: "Julio César",
                  avatar: avatarJulio,
                },
                date: "08 Nov 2019",
                content: "Caraca! Esse bootcamp da RocketSeat é incrível!",
                comments: [
                  {
                    id: 1,
                    author: {
                      name: "Diego Fernandes",
                      avatar: avatarDiego,
                    },
                    content: "Valeu Júlio!"
                  },
                  {
                    id: 2,
                    author: {
                      name: "Diego Fernandes",
                      avatar: avatarDiego,
                    },
                    content: "Fica de olho que nessa semana terá várias lives!"
                  }
                ]
            },
        ]
    }

    render(){
        return(
            <div id="postList">
                {this.state.posts.map(post => (
                    <Post post={post}></Post>
                ))}
                
            </div>
        )
    }
}

export default PostList;