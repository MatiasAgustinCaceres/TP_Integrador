import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavListItem({name, icon, link}) {
    return (
        <li>
            <NavLink to={link}>
                <i className={icon} />
                <span className="links_name">{name}</span>
            </NavLink>
            <span className="tooltip">{name}</span>
        </li>
    )
}
