import React, {useState} from 'react';

const ProfileFront = (props) => {
    const [prevProps, setProps] = useState(null);

    if(props !== prevProps){
        setProps(props);
    }

    return (
        <div className="front-container">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            <div className="image">
                <img src={props.image} className="profile-image" alt="Profile"/>
            </div>
            <div className="subtitle">
                <h2>{props.subtitle}</h2>
            </div>           
        </div>
    );
}

export default ProfileFront;