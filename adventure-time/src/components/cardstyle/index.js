import React from 'react';
import "./style.css"

function CardSetup(props) {
    return (
        <div className="card">
            <span onClick={() => props.handleClicked(props.id)} className="clicked">
                <div className="imgContainer">
                    <img src={props.image} alt={props.id} />
                </div>
           </span>
        </div>
    )


};

export default CardSetup;
