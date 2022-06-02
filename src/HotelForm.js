import React, {useState, useEffect} from 'react'
import {useGlobalContext} from './context'

import {Link} from 'react-router-dom'

const HotelForm = ()=>{

    const{location, setLocation} = useGlobalContext()
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const handleChange = (e)=>{
        console.log('e accomidation: ' + e.target.value)
        setLocation(e.target.value)
        console.log('accomidation location: ' + location)
    }
    return(
        <section className = 'accomidation'>
       
          <p className = 'accomidation-p'>Hotel</p>
        <div className = 'accomidation-div'>
        <form onSubmit = {handleSubmit}>
        <div className ='accomidation-select-div'>
        <div className = 'accomidation-lbl-div'><lable forHtml = 'location'>Location: </lable></div>
        <select value = {location}onChange = {(e)=>handleChange(e)}>
            <option value = "Paris">Paris</option>
            <option value = 'Italy'>Italy</option>
            <option value = 'Switzerland'>Switzerland</option>
            <option value = 'London'>London</option>
        </select>
        </div>
        <div className ='accomidation-select-div'>
        <div className = 'accomidation-lbl-div'><lable>Stars: </lable></div>
        <select onChange = {handleChange}>
            <option>3 stars</option>
            <option>4 Stars</option>
            <option>5 stars</option>
        </select>
        </div>
        <Link to = '/Hotel'> <button className = 'submit-btn-accomidation'>Check Hotel</button> </Link>
        </form>
        </div>

        </section>
    )
}
export default HotelForm 