import * as React from "react"

const FrequentlyAskedQuestion = (props) => {

    return (
        <div className="faq-body">
            <div className="faq-question">{props.question}</div>
            <div className="faq-answer">{props.answer}</div>
        </div>
    )
}

export default FrequentlyAskedQuestion