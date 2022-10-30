import { Fragment } from "react"

const FeaturesText = ()=>{ 
    const heading = 'SAY HELLO TO BEAUTY' 
    const paragraph = 'With a 30-minute premium treat'
    const text = 'Introducing our new products to be launched in a few days time,get ready for our next year sales'
    return(
        <Fragment>
            <div className = "features-text">
                <h2>{heading}</h2>
                <p id="features-paragraph-1">{paragraph}</p>
                <p id="features-paragraph-2">{text}</p>
                <button className = "features-button">READ MORE</button>
            </div>
        </Fragment>
    )
}

export default FeaturesText;