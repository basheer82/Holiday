import React, {useState} from 'react'
import gridData from './gridData'

const Grid = ()=>{

    return(
        <section className = 'grid-container'>
            {   
                gridData.map((item, index)=>{
                    return(
                        <div className =  {`${ index  === 0 ? 'grid-item  item1': 'grid-item' }`}>
                          <img src = {item.src} className = 'grid-img'/>
                        </div>
                    )
                })
                
            }
        </section>
    )
}

export default Grid