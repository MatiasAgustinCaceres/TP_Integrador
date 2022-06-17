import React from 'react'

export default function ProfileCard() {
    return (
        <li className="profile">
            <div className="profile-details">
                <img src="./pix/userpicture.jpg" alt="profileImg" />
                <div className="name_job">
                    <div className="job">example@gmail.com</div>
                </div>
            </div>
            <i className="bx bx-log-out" id="log_out" />
        </li>)
}
