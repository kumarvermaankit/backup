import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
// import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

function Post({ id, name, description, message, photoUrl }) {




    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar />
                <div className='post_info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className='post_body'>
                <p>{message}</p>
            </div>

            <div className='post_buttons'>
                <InputOption Icon={GroupAddIcon} title="Join" color="gray" />
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
                <InputOption Icon={FileDownloadOutlinedIcon} title="Download" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <a href={`/map/${id}`}><InputOption Icon={ShareOutlinedIcon} title=" Map" color="gray" /></a>
            </div>
        </div >
    )
}

export default Post