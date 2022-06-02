import React, {useState, useEffect} from 'react'
import HotelData from './HotelData'
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import {useGlobalContext} from './context'

const HotelImgGrid = (props)=>{
 
    const[htlImg, setHtlImg] = useState('')
    const[items,setItems] = useState([''])
    const[indx, setIndx] = useState(props.imgNdx)
    const[imgINdx, setImgINdx] = useState(0)
    const[loading, setLoading] = useState(true)
    const{setHotelImgClick} = useGlobalContext()
    useEffect(()=>{
  
   const{images} = props
   console.log('props.it: ' + props.it)
   setItems(props.it)
   console.log('items ' + items)
   setImgINdx(props.imgNdx)
   setHtlImg(items[imgINdx])
   setIndx(props.imgNdx)
   console.log('htlImg ' + htlImg)
    setLoading(false)
    },[props.it])

    const handlePrev = ()=>{
        if(indx === 0){
           return setIndx(items.length-1)
        }
        return setIndx(indx - 1)
    }

    const handleNext = ()=>{
        if(indx === items.length-1){
          return  setIndx(0)
        }
       return setIndx(indx + 1)
    }
    const handleClick = ()=>{
        setHotelImgClick(false)
        props.setClick(false)
    }
    if(loading){
        return <div>Loading...</div>
    }

    return(<>
        <div className = 'hotel-img-grid'>
        <button className = 'htl-img-btn' onClick = {()=>handlePrev()}><FaAngleLeft/></button>
        <button className = 'htl-img-close-btn' onClick = {()=> handleClick()} > close </button>
            <img src = {items[indx]} className = 'full-htl-img'/>
      

        <button className = 'htl-img-btn' onClick = {()=>handleNext()}><FaAngleRight/></button>
        </div>
    
    </>)
}
export default HotelImgGrid