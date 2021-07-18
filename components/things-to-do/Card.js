import * as React from "react"

const Card = (props) => {

    return (
        <div class="col">
            <div class="card h-100">
                {props.img}
                <div class="card-body">
                    <span>
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.emoji}</p>
                    </span>
                    <p class="card-text">{props.text}</p>
                    <a href={props.ahref} class="btn btn-outline-dark" rel='noopener noreferrer' target='_blank'>{props.button}</a>
                </div>
            </div>
        </div>
    )
}

export default Card