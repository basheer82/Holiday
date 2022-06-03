import React, {useState, useEffect}  from "react"
import europe from './europe.jpeg'
import locationsData from "./locationsData"
import { useGlobalContext } from "./context"
import holidayData from './holidayData'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { isCompositeComponentWithType } from "react-dom/test-utils"
import SelectedLocImgGrid from "./SelectedLocImgGrid"
import {AiOutlineClose} from "react-icons/ai";
import HotelForm from './HotelForm'

const SelectedLocation = ()=>{
    
    const[loca, setLoca] = useState([locationsData])
    const[loc, setLoc] = useState('')
    const {location, setLocation, imgUrl, setImgUrl, click, setClick,handleBtnClick } = useGlobalContext()
    const[locatn, setLocatn] = useState([])
    const[selectedImgIndex, setSelectedImgIndex] = useState(0)
    const[clk, setClk] = useState(false)

    console.log('location: ' + location)
    const[no, setNo] = useState(0)
    const[selectedCity, setSelectedCity] = useState(location)
    const[isTitleBtnClicked, setIsTitleBtnClicked] = useState(true)
    const[isDay2TitleBtnClicked, setIsDay2TitleBtnClicked] = useState(false)
    const[isDay3TitleBtnClicked, setIsDay3TitleBtnClicked] = useState(false)
    const[isDay4TitleBtnClicked, setIsDay4TitleBtnClicked] = useState(false)
    const[isDay5TitleBtnClicked, setIsDay5TitleBtnClicked] = useState(false)
    const[isDay6TitleBtnClicked, setIsDay6TitleBtnClicked] = useState(false)
    const[isDay7TitleBtnClicked, setIsDay7TitleBtnClicked] = useState(false)
    const[abt, setAbt] = useState({city: '', img: '', about: ''})
    const [about, setAbout] = useState('')

    const handleSelect = (val)=>{
        console.log(val)
        setSelectedCity(val)
        setLocation(val)
        console.log('no ' + no);
    }

    const dayBtn = ()=>{
        setIsTitleBtnClicked(true)
        setIsDay2TitleBtnClicked(false)     
        setIsDay3TitleBtnClicked(false)     
        setIsDay4TitleBtnClicked(false)     
        setIsDay5TitleBtnClicked(false)     
        setIsDay6TitleBtnClicked(false)     
        setIsDay7TitleBtnClicked(false)     

    }
    
useEffect(()=>{

    if(location){
    let res = locationsData.find( ({city},index)=>{
        setNo(index)
        setSelectedCity(location)
       return city === location 
    })
   
    setAbout(res.about)
    setLoc(res.img[0])

    console.log( 'The loc: ' + loc)
}
// else if(!location){
//     setLocation('Italy')
// }
    dayBtn()

  console.log('clicked? ' + click)
  setClk(true)

},[location, click])
    
useEffect(()=>{
    if(location){
        let locDta=  locationsData.find(({city})=> city===location)  
        setLocatn(locDta.img)}

    let img = locatn.find((item, indx)=>{
       return selectedImgIndex === indx
       
    })
    setImgUrl(img)

    
    
    },[selectedImgIndex])


  
    return(
        <>
        
        <div className = 'selected-holiday'>
        
        <div className = 'table'>
        <div className = 'city-title'>
       
         <p className ='loc-title-p' >{location}</p>
       <p className ='city-title-p'>{about}</p> 
       </div>
        <p className = 'loc-plan-p'>Holiday Plan </p>
        <div className = 'city-div'>     
            <div value = {"Paris"} className = {selectedCity === "Paris" ? 'city-section selected' : 'city-section'} 
             onClick = {()=>handleSelect("Paris")}>Paris</div>
            <div value = {"Italy"} className = {selectedCity === "Italy"  ? 'city-section selected' : 'city-section'} 
             onClick = {()=>handleSelect("Italy")}>Italy</div>
            <div value = {"Switzerland"} className = {selectedCity === "Switzerland" ? 'city-section selected' : 'city-section'}
             onClick = {()=>handleSelect("Switzerland")}>Switzerland</div>
            <div value = {"London"} className = {selectedCity === "London"  ? 'city-section selected' : 'city-section'}
             onClick = {()=>handleSelect("London")}>London</div>
        </div>
        <div className = 'holiday-plan'>
           
            <ul>          
            {/* https://jsonpathfinder.com/ */}

                <div className = 'day-div-title' onClick = {()=> setIsTitleBtnClicked(!isTitleBtnClicked)}><p>Day 1</p>
                  <button className = {`${isTitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                    onClick = {()=>{setIsTitleBtnClicked(!isTitleBtnClicked)}}> <AiFillCaretUp/></button>
                  <button className = {`${isTitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                    onClick = {()=>{setIsTitleBtnClicked(!isTitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isTitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    
                      
                      holidayData[no].daysPlan[0].day1.map((item)=>{
                            return <li>{item}</li> 
                        })
                   
                     }
                </div>

             <div className = 'day-div-title' onClick = {()=> setIsDay2TitleBtnClicked(!isDay2TitleBtnClicked)}> <p>Day 2</p>
             <button className = {`${isDay2TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay2TitleBtnClicked(!isDay2TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay2TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay2TitleBtnClicked(!isDay2TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay2TitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    holidayData[no].daysPlan[1].day2.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>
                     <div className = 'day-div-title' onClick = {()=> setIsDay3TitleBtnClicked(!isDay3TitleBtnClicked)}> <p>Day 3</p>
             <button className = {`${isDay3TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay3TitleBtnClicked(!isDay3TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay3TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay3TitleBtnClicked(!isDay3TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay3TitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    holidayData[no].daysPlan[2].day3.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>

                     <div className = 'day-div-title' onClick = {()=> setIsDay4TitleBtnClicked(!isDay4TitleBtnClicked)}> <p>Day 4</p>
             <button className = {`${isDay4TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay4TitleBtnClicked(!isDay4TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay4TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay4TitleBtnClicked(!isDay4TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay4TitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    holidayData[no].daysPlan[3].day4.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>

                     <div className = 'day-div-title' onClick = {()=> setIsDay5TitleBtnClicked(!isDay5TitleBtnClicked)}> <p>Day 5</p>
             <button className = {`${isDay5TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay5TitleBtnClicked(!isDay5TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay5TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay5TitleBtnClicked(!isDay5TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay5TitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    holidayData[no].daysPlan[4].day5.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>

                     <div className = 'day-div-title' onClick = {()=> setIsDay6TitleBtnClicked(!isDay6TitleBtnClicked)}> <p>Day 6</p>
             <button className = {`${isDay6TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay6TitleBtnClicked(!isDay6TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay6TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay6TitleBtnClicked(!isDay6TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay6TitleBtnClicked? 'day-div  day-div-selected': 'day-div'}`}>
                     {    holidayData[no].daysPlan[5].day6.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>

                     <div className = 'day-div-title' onClick = {()=> setIsDay7TitleBtnClicked(!isDay7TitleBtnClicked)}> <p>Day 7</p>
             <button className = {`${isDay7TitleBtnClicked ? 'div-select-btn escale' : 'div-select-btn'}`}
                 onClick = {()=>{setIsDay7TitleBtnClicked(!isDay7TitleBtnClicked)}}> <AiFillCaretUp/></button>
                <button className = {`${isDay7TitleBtnClicked ? 'div-select-btn ' : 'div-select-btn escale '  }`}
                 onClick = {()=>{setIsDay7TitleBtnClicked(!isDay7TitleBtnClicked)}}> <AiFillCaretDown/></button>
                </div>
                <div className = {`${isDay7TitleBtnClicked? 'day-div  day-div-last  day-div-selected': 'day-div-last day-div'}`}>
                     {    holidayData[no].daysPlan[6].day7.map((item)=> {
                    return <li>{item}</li>    
                    })
                     }
                     </div>
                        
            </ul>    
        </div>
        </div>

        <div className = 'img-right-div'>

         
       <SelectedLocImgGrid/>

       <HotelForm/>
        
     

        </div>
        </div>
        </>
    )
}
export default SelectedLocation
