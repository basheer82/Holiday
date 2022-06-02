import React, {useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import hotelData from './HotelData'
import HotelData from './HotelData'
import HotelImg from './HotelImg'
import HotelImgGrid from './HotelImgGrid'



const Hotel = ()=>{
    const [hotel, setHotel] = useState(hotelData)
    const[hotelLocationSelected, setHotelLocationSelected] = useState('All')
    const[tempImg, setTempImg] = useState('')
    const[indx, setIndx] = useState(0)
    const[imgIndex, setImgIndex] = useState(0)
    const[click, setClick] = useState(false)
    const[loading, setLoading] = useState(true)
    const[itms, setItms] = useState([''])

    const{location, setLocation, hotelImgClick, setHotelImgClick} = useGlobalContext()
    useEffect(()=>{
        setLoading(false) 
    },[itms])


const handleSubmit = (e)=>{
    e.preventDefault()

    if(hotelLocationSelected){
        if(hotelLocationSelected === 'All'){
            setHotel(HotelData)
        }
        else{
            setHotel(HotelData.filter((item)=>item.city === hotelLocationSelected))
        }
    }


}

const handleClick = (item, imgIndx)=>{
    setClick(true)
    setHotelImgClick(true)
    setItms(item.image)
    setImgIndex(imgIndx)
}
if(loading){
    return <div className = 'hotel-container'> <p>loading...</p> </div>
}

    return(
     
        <div className = 'hotel-container'>
            <form onSubmit = {handleSubmit} className = 'hotel-location-select'>
      
           <div className = 'htl-loc-btn-div'>
            <label>Destination</label>
            <button className = 'loc-htl-select-btn' onClick = {()=>setHotelLocationSelected('All')}>All</button> 
            <button className = 'loc-htl-select-btn' onClick = {()=>setHotelLocationSelected('Paris')}>Paris</button>
            <button className = 'loc-htl-select-btn' onClick = {()=>setHotelLocationSelected('London')}>London</button>
            <button className = 'loc-htl-select-btn' onClick = {()=>setHotelLocationSelected('Switzerland')}>Switzerland</button>
            <button className = 'loc-htl-select-btn' onClick = {()=>setHotelLocationSelected('Italy')}>Italy</button>
            </div>
     
            </form>

            {
                hotel.map((item, index)=>{
           
                
                    return(<>
                        <div className = 'single-hotel-container'>
                         
                          <div className = 'hotel-main-img-div'><img className = 'hotel-abt-img' src = {item.image[0] }/></div> 
                          <div className = 'single-hotel'>                      
                           <div className = 'single-hotel-name'><p> { item.name}<span>{item.stars}</span></p></div>
                            <div className = 'single-hotel-address'><br/>{item.address}</div>
                           {   
                               item.image.map((itm, imgIndex)=>{
                            return <img src = {itm} onClick = {()=>  handleClick(item, imgIndex)} className = 'hotel-img'/>
  
                             }
                            )
                            } 
                                                       
                             </div>           
                             </div>
                            
                    </>)
                       })
          
                }
                {hotelImgClick &&  <HotelImgGrid it = {itms} imgNdx = {imgIndex}  /> }
       
                </div>
              

       
    
  
    )
}
export default Hotel