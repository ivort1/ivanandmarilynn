import * as React from "react"

const Card = (props) => {

    return (
        <div className="col-xs-1">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <span className="fa-2x">{props.icon}</span>
                    <p className="card-text">{props.cardText}</p>
                    <a href={props.href} className="btn btn-outline-light" rel='noopener noreferrer' target='_blank'>{props.buttonText}</a>
                </div>
            </div>
        </div>
    )
}

export default Card