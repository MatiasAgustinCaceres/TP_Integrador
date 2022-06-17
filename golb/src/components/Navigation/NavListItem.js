import React from 'react'

export default function NavListItem({name, icon, link}) {
    return (
        <li>
            <a href={link}>
                <i className={icon} />
                <span className="links_name">{name}</span>
            </a>
            <span className="tooltip">{name}</span>
        </li>
    )
}
