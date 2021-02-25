import React from 'react';
import './StoryReel.css';
import Story from './Story';

export default function StoryReel() {
    return (
      <div className="storyReel">
        <Story
          image="https://images.pexels.com/photos/4339445/pexels-photo-4339445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="John Doe"
        />
        <Story
          image="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          profileSrc="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Anna marry"
        />
        <Story
          image="https://images.pexels.com/photos/2387876/pexels-photo-2387876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          profileSrc="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Stephen"
        />
        <Story
          image="https://images.pexels.com/photos/4275883/pexels-photo-4275883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          profileSrc="https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="Monica Geller  "
        />
        <Story
          image="https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          profileSrc="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="George Petter"
        />
      </div>
    );
}
