import React from 'react';
import { MdHome } from "react-icons/md";
import { MdStore } from "react-icons/md";
import { MdSpeakerNotes } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";


import './Sidebar.css';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <MdHome />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <MdStore />,
    cName: 'nav-text'
  },
  {
    title: 'Blogs',
    path: '/Blogs',
    icon: <MdSpeakerNotes />,
    cName: 'nav-text'
  }
];

function Sidebar(props) {
  // console.log(props.show)

  // ham changShow de truyen lai mot gia tri tu con len cha, muc dich la de lam cho cha thay doi state -> re-render
  const changeShow = () => {
    props.onSidebar(!props.show)
  }
    return (
      <>
        <nav className={props.show ? "side-bar active" : "side-bar"}>
          {/* props.show duoc truyen xuong tu cha, gia tri ban dau khi nhan duoc la false */}
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to='#' className="menu-bars">
                <MdClose onClick={() => changeShow()} />
                {/* changShow() : truyen lai gia tri len component cha -> cha thay doi state - re-render */}
              </Link>
            </li>
            {
              SidebarData.map((item, index) => (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={() => changeShow()} >
                    {item.icon}
                    <span style={{ marginLeft: '16px !important' }}>{item.title}</span>
                  </Link>
                </li>
              ))
            }
          </ul>
          <form action="#" mothod="get" className="mobile-search">
            <label for="mobile-search" className="sr-only">Search</label>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              name="mobile-search"
              id="mobile-search">
            </input>
            <button className="mobile-search-btn btn-primary" type="submit">
              <FaSearch />
            </button>
          </form>
          <div className="social-icons">
            <a className="social-icon" title="Facebook" href="#f">
              <FaFacebook />
            </a>
            <a className="social-icon" title="Instagram" href="#f">
              <FaInstagram />
            </a>
            <a className="social-icon" title="Twitter" href="#f">
              <FaTwitter />
            </a>
            <a className="social-icon" title="Youtube" href="#f">
              <FaYoutube />
            </a>
            <a className="social-icon" title="Call" href="#f">
              <FaPhone />
            </a>
          </div>
        </nav>
        <div
          className={props.show ? "back-drop active" : "back-drop"}
          onClick={() => changeShow()}
        >
    
        </div>
      </>
    );
  }

  export default Sidebar;
