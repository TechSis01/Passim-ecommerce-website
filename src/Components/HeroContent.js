import React,{useState,createContext,useContext,useRef,useReducer,Fragment,useEffect} from 'react'

const HeroContent = ()=>{
    const heading = 'FACE YOUR SKIN WITH US'
    const paragraph = 'The best skin plug in the land of Egypt,tested and trusted for 2000 years'
    return(
        <header>
            <h1>
                {heading}
            </h1>
            <p>{paragraph}</p>
        </header>
    )
}

export default HeroContent;