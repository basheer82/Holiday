import React , {useState, useEffect} from 'react'
import locationsData from './locationsData'
import {useParams,Link} from 'react-router-dom'
import {useGlobalContext} from './context'

const Location = ()=>{
    const[locationClicked, setLocationClicked] = useState(false)

    const {setLocation, selectLocation} = useGlobalContext()
    const [cities, setCities] = useState(locationsData)
    const selectedLocation = (value)=>{
        const cont = value 
        console.log("selected country: " + value)
        setLocation(value)
    }
    
    const handleClick = (val)=>{
        selectedLocation(val)
        setLocationClicked(!locationClicked)
    }
    const {locationName} = useParams()

    return(
        <section className =  'locations-container'>

        {cities.map((item)=>{
          return   (
              <div  className = 'locations-imgs-div'  >
            <Link className = 'city-btn' value = {item.city} onClick = {()=>handleClick(item.city)} 
            to = {`./location/${item.city}`}> {item.city} 
            <img className = 'location-img' src = {item.img[0]}/>
            </Link>
            </div>
          )
        })}
    
        </section>
    )
}
export default Location