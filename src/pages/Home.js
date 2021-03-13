import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

function Home() {
    return (
        <div className="home">
            <div className="home-header">
               <div className="home-left">
                    <Link to="/about">About</Link>
                    <Link to="/store ">Store</Link>
               </div> 
               <div className="home-right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar/>
               </div> 
            </div>
            <div className="home-body">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
                <div className="home-container">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
