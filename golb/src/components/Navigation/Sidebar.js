import { Image } from 'atomize'
import React, { useState } from 'react'
import "./Sidebar.css";
import NavListItem from "./NavListItem"
import ProfileCard from './ProfileCard';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className={isOpen ? "sidebar open" : "sidebar "}>
      <div className="logo-details">
        <div className="logo_name">Let's Golb</div>
        <Image src="./pix/golb.png" h="30px" w="auto" onClick={() => setIsOpen(!isOpen)}></Image>

      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        
        <NavListItem name="Dashboard" icon="bx bx-grid-alt" link="/"></NavListItem>

        <ProfileCard></ProfileCard>
      </ul>
    </div>


  )
}
