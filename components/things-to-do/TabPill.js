import * as React from "react"

const Tab_Pill = (props) => {

    return (
        <li class="nav-item" role="presentation">
            <button class={props.class} id={props.id} data-bs-toggle="pill" data-bs-target={props.databsTarget} type="button" role="tab" aria-controls={props.ariaControls} aria-selected={props.ariaSelected}>{props.buttonText}</button>
        </li>
    )
}

export default Tab_Pill