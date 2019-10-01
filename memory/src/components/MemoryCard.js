import React from "react";

var styles = {
    image: {
        width: 200,
        height: 200
    }
}

function MemoryCard(props) {
    return (
        <div className="card col-3">
            <div className="img-container">
                <img alt={props.name} src={props.image} style={styles.image}/>
            </div>
            <div className="content">
                <ul>
                    <strong>Number:</strong> {props.name}
                </ul>
                <ul>
                    <button onClick={props.handleClick} value={props.id}>Click</button>
                </ul>
            </div>
        </div>
    );
}

export default MemoryCard;