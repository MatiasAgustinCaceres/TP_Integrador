import { Image } from 'atomize'
import React, { useState } from 'react'
import "./Sidebar.css";
import NavListItem from "./NavListItem"
import ProfileCard from './ProfileCard';

export default function Sidebar({setLoading}) {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className={isOpen ? "sidebar open" : "sidebar "}>
      <div className="logo-details">
        <div className="logo_name">Golb</div>
        <Image src="./pix/golb.png" h="30px" w="auto" onClick={() => setIsOpen(!isOpen)}></Image>

      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Buscar..." />
          <span className="tooltip">Búsqueda</span>
        </li>
        
        <NavListItem name="Inicio" icon="bx bx-grid-alt" link="/"></NavListItem>
        <NavListItem name="Crear post" icon="bx bxs-plus-circle" link="/create-post"></NavListItem>

        <ProfileCard setLoading={setLoading}></ProfileCard>
      </ul>
    </div>


  )
}
