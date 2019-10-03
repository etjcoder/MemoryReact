import React from "react";
import "./style.css"

function MemoryCard(props) {
    return (
        // <div className="card col-3">
            <div className="card">
                <img className="card-image" alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
            </div>
            // <div className="content">
            //     {/* <ul>
            //         <strong>Number:</strong> {props.name}
            //     </ul> */}
            //     <ul>
            //         <button >Click</button>
            //     </ul>
            // </div>
        // </div>
    );
}

export default MemoryCard;