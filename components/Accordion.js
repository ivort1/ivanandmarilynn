import * as React from "react"

const Accordion = (props) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`flush-heading${props.number}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.number}`} aria-expanded="false" aria-controls={`#flush-collapse${props.number}`}>{props.accordionButtonText}</button>
            </h2>
            
            <div id={`flush-collapse${props.number}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${props.number}`} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{props.accordionBodyText}</div>
            </div>
        </div>
    )
}

export default Accordion