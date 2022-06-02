import React, {useState, useEffect} from 'react'


const HotelImg = ( imgUrl)=>{
    const[htlImg, setHtlImg] = useState(imgUrl)
    useEffect(()=>{
        console.log('imgUrl: ' + imgUrl)
        setHtlImg(imgUrl)
    },[])
    
    return(
        <>
        { htlImg.map((item)=>{
            return(    <div className = ''>

                <img src = {item}/>
            </div>)
            })
        
  
        }
        </>
    )
}
export default HotelImg