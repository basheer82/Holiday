import React,{useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import locationsData from './locationsData'
import ImgGrid from './ImgGrid'
import HotelImgGrid from './HotelImgGrid'
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";


const SelectedLocImgGrid = ()=>{
    const{location,indx, setIndx, imgUrl, setImgUrl, click, setClick} = useGlobalContext()

    const [locatn, setLocatn] = useState([''])
    const[locatnImg, setLocatnImg] = useState([''])
    const [temp, setTemp] = useState(0)
    const[ndx, setNdx] = useState(0)
    const [clicked, setClicked] = useState(false)

 
    const handleNext = ()=>{

       if(indx  < locatn.length-1){
        setLocatn(locatn.slice((indx)+1, locatn.length))
  
       
    }
    if(indx + 1 < locatn.length-2){
    setIndx(indx+1)}
        console.log('indx: ' + indx);
    
    }

    const handlePrev = ()=>{  
    
        let b = locationsData.find(({city})=> city===location) 
    if((indx) >= 1){

    setLocatn(b.img.slice((indx)-1, b.img.length))
    setIndx(indx-1)
    
 

}
    }
    const setDat = ()=>{
        if(location){
        let locDta=  locationsData.find(({city})=> city===location)  
        setLocatn(locDta.img)
        setLocatnImg(locDta.img)
        }
    }
    useEffect(()=>{
   
      setDat()
      setIndx(0)
      setTemp(0)
      setClick(false)
      
    },[location])


 const handleClick = (number)=>{

    setClick(true)
     setNdx(number)}
  
 
    return(
        <>
         <div className ='loc-grid-div'>
                <button onClick = {()=>handlePrev()} className = 'loc-prev-btn'> <FaAngleLeft/></button>
                
                     {locatn.map((item, index)=>{
  
                 return( 
                  
                     <div onClick = {()=> handleClick(index) }  className = 'loc-grid-div-current' >
                    
                      <img className ='grid-loc-img' onClick = {()=>setImgUrl(item)}src = {item}  /> 
                     </div>
                  
                 
                 )
                     })
                     }
          
           <button onClick= {()=>handleNext()}  className = 'loc-next-btn'> <FaAngleRight/></button>
       
         </div>
         { click && <HotelImgGrid setClick = {setClick} it = {locatnImg} imgNdx ={ndx} /> }
                   
        </>
    )

}
export default SelectedLocImgGrid