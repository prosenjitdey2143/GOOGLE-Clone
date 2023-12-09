import React from 'react'
import {Link} from 'react-router-dom'
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import './home.css';
import Search from '../../components/search/Search';
const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Image</Link>
          {/* <Link to="/apps"> */}
          <AppsIcon />
          {/* </Link> */}
          {/* <Link to='/profile'> */}
          <Avatar />
          {/* </Link> */}
        </div>
      </div>
      <div className="home-body">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png"
          alt="google logo"
        />
        <Search showbtn={true} />
      </div>
    </div>
  );
}

export default Home
