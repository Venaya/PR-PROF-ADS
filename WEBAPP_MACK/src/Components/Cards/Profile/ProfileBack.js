import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const ProfileBack = (props) => {
    const handleEditClick = (e) => {
        e.preventDefault();
        console.log('Edit Clicked');
    }

    const handleLogoutClick = (e) => {
        e.preventDefault();
        console.log('Logout Clicked');
    }

    return (
        <div className="back-container">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="image">
                <img src={props.image} className="profile-image" alt="Profile"/>
            </div>
            <div className="btn-content">
                <div className="edit">                                  
                    <button className="btn btn-icon btn-green" onClick={handleEditClick}><EditIcon /> Edit</button>
                </div>
                <div className="logout">                   
                    <button className="btn btn-icon btn-red" onClick={handleLogoutClick}><ExitToAppIcon /> Logout</button>                   
                </div>
            </div>
        </div>
    );
}

export default ProfileBack;