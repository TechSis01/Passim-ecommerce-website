import{Fragment} from 'react'
import FeaturesImage from './FeaturesImage';
import FeaturesText from './FeaturesText';
const Features = ()=>{ 
    return(
        <Fragment>
            <section className = "Features-section">
                <FeaturesText />
                <FeaturesImage />
            </section>
        </Fragment>
    )
}
export default Features;