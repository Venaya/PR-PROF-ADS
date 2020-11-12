import React from 'react';
import FlipCard from '../Cards/FlipCard';
import ProfileBack from '../Cards/Profile/ProfileBack';
import ProfileFront from '../Cards/Profile/ProfileFront';
import AsideMenu from '../Menus/AsideMenu';
import profileImg from '../../Image/Profile.png';

const Aside = () => {
    return (
        <div className="column-container">
            <div className="Logo">
                <img src="" alt="" />
            </div>
            <div className="Profile">
                <FlipCard frontContent={<ProfileFront title="FRONT" subtitle="SUBFRONT" image={profileImg} />} backContent={<ProfileBack title="BACK" image={profileImg}/>}  />
            </div>
            <div className="Menus">
                <AsideMenu />
            </div>
        </div>
    );
}

export default Aside;