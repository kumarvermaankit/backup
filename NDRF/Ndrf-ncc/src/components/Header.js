import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import "./Header.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='' alt=''></img>

            <div className='header_search'>
                <SearchIcon />
                <input type='text'></input>
            </div>
        </div>
        <div className='header_right'>
            <HeaderOption Icon={HomeIcon}  title='Home' />
            {/* <HeaderOption Icon={SupervisorAccountIcon} title='' /> */}
            <HeaderOption Icon={ChatIcon}  title='Messaging' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80" title='me' />
        </div>
    </div>
  )
}

export default Header