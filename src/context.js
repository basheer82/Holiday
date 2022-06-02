import React , {useState, useContext} from 'react'
import holidays from './holidayPlan'

 const AppContext = React.createContext()
const AppProvider = ({children})=>{

    const[location, setLocation] = useState('Paris')
    const[holday, setHoliday] = useState()
    const [plan, setPlan] = useState()
    const [indx, setIndx] = useState(0)
    const[hotels, setHotels] =  useState([])
    const[imgUrl, setImgUrl] = useState('')
    const [click, setClick] = useState(false)
    const[hotelImgClick, setHotelImgClick] = useState(false)

    const selectLocation = (locationName)=>{
        setLocation(locationName)
     
        setPlan( holidays[0].daysPlan[0].day1[1])
       
    }



    const selectHoliday = ()=>{
        
        //  holidays.find((item)=>item.country == country)
        console.log('selectHoliday')
        
       
    }
    const handleBtnClick = ()=>{
        setClick(!click)
        console.log('click: ' + click)
    }
    return (
        <AppContext.Provider
            value = {{
                location,
                hotels,
                setLocation,
                setHotels,
                selectLocation,
                plan,
                indx,
                setIndx,
                imgUrl,
                setImgUrl,
                click,
                setClick,
                handleBtnClick,
                hotelImgClick,
                setHotelImgClick

            }}
            >{children}</AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}