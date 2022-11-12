import React from 'react'
import {useState} from "react";

import styles from "../css/filterbar.module.css"
const Filterbar = ({types,onNameFilter,onTypeFilter,onLocationFilter,locations,beds,onBedFilter}) => {

    // const [name,setName] =useState("");
    

    const handleNameChange=(event)=>{
        const {value} =event.target;
  
        onNameFilter(value);
    }
    const typehandle=(event)=>{
        const {value} = event.target;
     
        onTypeFilter(value);    
    }
    const locationhandle=(event)=>{
        const {value} = event.target;
        onLocationFilter(value);    
    }
    const bedhandle=(event)=>{
        const {value} = event.target;
        onBedFilter(value);    
    }


    const submithandle=(event)=>{
            event.preventDefault();
            console.log('clicked')
    }
  return (
    <div id={styles.filterbar}>
        <form onSubmit={submithandle}>
        <div>
        <h4>Filters</h4>
        </div>
     
        <div>
            <label htmlFor="location">Location </label>
            <select onChange={(event)=>{
                locationhandle(event);
            }}>
        <option value="">Select</option>
       {locations.map((location)=>(
        <option value={location} key={location}>
            {location}
        </option>
       ))}
            </select>
        </div>
        
        <div>
            <label htmlFor="gender">Property Type </label>
            <select onChange={(event)=>{
                typehandle(event);
            }}>
        <option value="">Select</option>
       {types.map((Type)=>(
        <option value={Type} key={Type}>
            {Type }
        </option>
       ))}
            </select>
        </div>
        <div>
            <label htmlFor="bed">No of Beds </label>
            <select onChange={(event)=>{
                bedhandle(event);
            }}>
        <option value="">Select</option>
       {beds.map((bed)=>(
        <option value={bed} key={bed}>
            {bed }
        </option>
       ))}
            </select>
        </div>
        <div>
            <label htmlFor="startDate">When </label>
            <input type='date' />
        </div>
        {/* <div>
            <label htmlFor="endDate">To</label>
            <input type='date'/>
        </div> */}
        {/* <div>
            <button id={styles.submit} type='submit'>Submit</button>
        </div> */}
        </form>
    </div>
  )
}

export default Filterbar