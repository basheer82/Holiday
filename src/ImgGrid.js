import React, {useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import {AiOutlineClose} from "react-icons/ai";

const ImgGrid = ({url})=>{

    useEffect(()=>{

    })
    const{click, setClick, imgUrl} = useGlobalContext()
    return(
        <>
          <div className = {`${click ? 'selected-img-clicked selected-img-div': 'selected-img-div' }`}>
            <button className = 'close-btn' onClick ={()=>setClick(false)}> <AiOutlineClose/> </button>
            <img className = 'selected-img' src = {url}/>
        </div> 
        </>
    )
}
export default ImgGrid