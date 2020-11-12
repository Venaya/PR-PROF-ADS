import React from 'react';
import {Link} from 'react-router-dom';

const FlipCard = (props) => {
    return (
        <Link to={`/${props.path}`}> 
            <div className="container">
                <div className="card-wrapper">
                    <div className="front face">
                        {props.frontContent}
                    </div>
                    <div className="back face">
                        {props.backContent}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default FlipCard;