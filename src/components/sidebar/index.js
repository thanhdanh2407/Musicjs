import React from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Đăng xuất người dùng
      navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng xuất thành công
    } catch (error) {
      console.error('Lỗi đăng xuất:', error);
    }
  };

  return (
    <div className='sidebar-container'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
      className='profile-img'
      alt="profile" />
      
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/" icon={<IoLibrary/>}/>
      </div>
      {auth.currentUser ? (
        <SidebarButton title="Sign Out" icon={<FaSignOutAlt onClick={handleSignOut}/>} />
      ) : (
        <SidebarButton title="Login" to="/login" />
      )}
    </div>
  )
}
