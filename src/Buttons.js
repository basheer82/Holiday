 import React, {useState} from 'react'
 import {  AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
const Buttons = ()=>{

    const[isHoveredFace, setIsHoveredFace] = useState(false)
    const[isHoveredTwitter, setIsHoveredTwitter]= useState(false)
    const[isHoveredInsta, setIsHoveredInsta] = useState(false)
 


    return(
        <div className = 'social-div '>
            <a href = 'http://www.facebook.com' className = 'social-icon' key = {'face-div'} onMouseOver = {()=>setIsHoveredFace(true)} onMouseOut = {()=>setIsHoveredFace(false)}><AiFillFacebook/>
                <div className = { isHoveredFace ?'face-div show-icon-div' : 'face-div'}><p>Follow on facebook</p></div></a>
           
            <a href = 'http://www.twitter.com' className = 'social-icon' onMouseOver = {()=>setIsHoveredTwitter(true)} onMouseOut = {()=>setIsHoveredTwitter(false)}><AiFillTwitterCircle/>
                <div className ={  isHoveredTwitter ? 'twitter-div show-icon-div' : 'twitter-div'}><p>Follow on twitter</p></div></a>
           
            <a href = 'http://www.instagram.com' className = 'social-icon' onMouseOver = {()=>setIsHoveredInsta(true)} onMouseOut = {()=>setIsHoveredInsta(false)}><AiFillInstagram/>
                <div className ={isHoveredInsta ? 'insta-div show-icon-div' : 'insta-div'}><p>Follow on instagram</p></div></a>
        </div>
    )
}

export default Buttons