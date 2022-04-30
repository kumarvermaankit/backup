import React, { useState } from 'react'
import './Feed.css'
// import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
// import ImageIcon from '@mui/icons-material/Image';
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Post from './Post';
import posts from './Post.json'

function Feed() {

    return (
        <div className='feed'>

            {posts.map((post) => {
                return (
                    <Post name={post.name} description={post.description} message={post.message} id={post.id} />
                )
            })}
        </div>
    )
}

export default Feed