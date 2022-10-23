import HeroImage from "./HeroImage"
const footerData1 = [
    {
        About:'ABOUT',
        faq:'FAQ',
        Products:'PRODUCTS',
        Terms:'TERMS',
        Policy:'POLICY'
    }
]
const footerData2 = [
    {
        About:'INSTAGRAM',
        faq:'FACEBOOK',
        Products:'PINTEREST',
        Terms:'BLOG',
        Twitter:'TWITTER'
    }
]


const Footer=()=>{

    const scrollUp = ()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }
    return(
        <footer>
            <div className="first-footer">
            <div className = "passim">PASSIM</div>
            <div className = "footer-data1-container">
                <div className="footer-data1">
                    <a href="">{footerData1[0].About}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData1[0].faq}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData1[0].Products}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData1[0].Terms}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData1[0].Policy}</a>
                </div>
            </div>
            <div>
                <div className="footer-data1">
                    <a href="">{footerData2[0].About}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData2[0].faq}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData2[0].Products}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData2[0].Terms}</a>
                </div>
                <div className="footer-data1">
                    <a href="">{footerData2[0].Twitter}</a>
                </div>
            </div>
            <div>
                <div id="subscribe">SUBSCRIBE TO OUR NEWSLATER</div>
                <div className= "footer-input-container">
                    <input type="text" placeholder="Your Email"></input>
                    <a href="">SEND</a>
                </div>
            </div>
        </div>
        <div className = "copyright-container">
            <em>2021,All Rights Reserved</em>
            <p className = "back-to-top-btn" onClick = {scrollUp}>BACK TO TOP</p>
        </div>
        </footer>
    )
}

export default Footer;