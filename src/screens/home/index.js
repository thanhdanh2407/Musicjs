/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Library from '../library';
import Feed from '../feed';
import Trending from '../trending';
import Player from '../player';
import Favorites from '../favorites';
import './home.css';
import Sidebar from '../../components/sidebar';
import Login from '../login/login';
import {signOut} from "firebase/auth"
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isAuth ,setIsAuth] = useState(false);

  

  const signUserOut = () =>  {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login"
    })
  };

  return (
    <Router>
      <nav>
        {!auth && <Link to="/login">Login</Link>}
      </nav>
        <div className='main-body'>
          <Sidebar />
          <Routes>
              <Route path="/" element = {<Library/>} />
              <Route path="/feed" element = {<Feed/>} />
              <Route path="/trending" element = {<Trending/>} />
              <Route path="/player" element = {<Player/>} />
              <Route path="/favorites" element = {<Favorites/>} />
              <Route path="/login" element = {<Login setIsAuth={setIsAuth}/>} />
          </Routes>
        </div>
    </Router>
  )
}

