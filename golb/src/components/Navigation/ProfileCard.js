import React from 'react'
import { useAuth } from '../../context/authContext';

export default function ProfileCard({setLoading}) {

    const {logout, user} = useAuth();

    const handleLogOut = async () => {
        
        setLoading(true);
        await setTimeout(() =>{
            logout();
          }, 2000)
        };

    return (
        <li className="profile">
            <div className="profile-details">
                <img src="./pix/userpicture.jpg" alt="profileImg" />
                <div className="name_job">
                    <div className="job" onClick={handleLogOut}>{user.email}</div>
                </div>
            </div>
            <i className="bx bx-log-out" id="log_out" style={{cursor: "pointer"}} onClick={handleLogOut}/>
            logout
        </li>)
}
