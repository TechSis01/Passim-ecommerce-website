import { Fragment } from "react";
import featureImage from '../images/skincare-image.jpg'
const FeaturesImage = ()=>{
    return(
        <Fragment>
            <div className = "image-wrapper">
                 <img src={featureImage} alt="containes of skincare products" className = "features-image"></img>
            </div>
        </Fragment>
    )
}

export default FeaturesImage;