import * as React from "react"

const TabPane = (props) => {

    return (
        <div class={props.class} id={props.id} role="tabpanel" aria-labelledby={props.ariaLabelledBy}>
            {props.paneBody}
        </div>
    )

}

export default TabPane