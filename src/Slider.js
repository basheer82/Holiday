import React, {useState, useEffect} from 'react'
import sliderData from './slider-data'
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

const Slider = ()=>{
    const [index, setIndex] = useState(0)

    const handleNextSlide = ()=>{  
            if(index === sliderData.length-1){
                return setIndex(0)
            }       
           return setIndex(index+1)       
    }

    const handlePrevSlide = ()=>{   
        if(index === 0){
            return setIndex(sliderData.length-1)
        }
       return setIndex(index-1) 
    }

    useEffect(()=>{
     let slider =  setInterval(()=>{
            handleNextSlide()
           
        }, 6000)
        return ()=> clearInterval(slider)
    },[index, sliderData])
  
    return(
        <section className = 'slider-div'>
           <button className = 'slide-btn-prev' onClick = {handlePrevSlide}><FaAngleLeft/></button>
           {console.log('********')}
           {sliderData.map((image, currentIndex)=>{
               
               let slideClass = 'next-slide'
               if (currentIndex === index){
                   {slideClass = 'current-slide'}
               }
                 if (currentIndex === index -1 || (index === 0 && currentIndex === sliderData.length-1))  
                     { slideClass = 'prev-slide'}
                console.log('index: ' + index +  ' currentIndex: ' + currentIndex + ' ' + slideClass )
            
                
               return(
                <article className = {slideClass}>                   
                    <img src={image.img} className = 'slide-img'/>                 
                 </article>    
               )
            })}
            <button className = 'slide-btn-next' onClick = {handleNextSlide}><FaAngleRight/></button>
            </section>
    )
}

export default Slider