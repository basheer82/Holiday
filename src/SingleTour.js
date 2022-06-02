import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'


const SingleTour = ()=>{
    const [singleTour, setSingleTour] = useState([])
    const [allTours , setAllTours ] = useState()
    const {id} = useParams()
    
    useEffect(()=>{
    console.log(id);
   
   const newTour =  allTours.filter((item)=> item.id == id)
   console.log(newTour)
   setSingleTour(newTour)
    console.log(singleTour)
}, [])

    return(
        <section className = 'single-tour-section'>

            {singleTour.map((item)=>{
                console.log(item)
               return(<>
                   <div className = 'single-tour-country-p'> {item.country}</div>
                   <div className = 'single-tour-div'>
                     
                   <img className = 'single-tour-img' src = {`../${item.img}`}/>                   
                   
                    <div className = 'single-tour-p-div'>
                     <p className = 'single-tour-p'>{item.info}</p>
                    </div></div>
                    
                </>
               ) 
            })}
            
            
            </section>
    )

}
export default SingleTour