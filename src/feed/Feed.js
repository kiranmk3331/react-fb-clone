import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

export default function Feed() {
    return (
      <div className="feed">
        <StoryReel />
        <MessageSender />
        <Post
          profilePic="https://avatars.githubusercontent.com/u/40912857?s=460&u=f52476780a07fba6e8d97a218f96b81e62dd19ed&v=4"
          message="Hello there whats up"
          timestamp="This is a timestamp"
          userName="Kiran"
          image="https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
    );
}
