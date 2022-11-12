import React from 'react'
import styles from "../css/navbar.module.css"
import { Link } from 'react-router-dom';
import { IoMdMailOpen } from 'react-icons/io';

const Navbar = ({count}) => {
  return (
    <div id={styles.nav}>
        <div id={styles.start1}>
        <Link to="/"><div style={{marginTop:"14px",marginLeft:"4px",textDecoration:"none"}}><IoMdMailOpen/><span >Estatery</span></div></Link>
        <p>Rent</p>
        <p>Buy</p>
        <p>Sell</p>
        <p></p>
       <div id={styles.seg0}>
       <select id={styles.manageproperty} >
            <option value="">Manage Property</option>
            <option value="Houses">Houses</option>
            <option value="Mortage">Mortage</option>
            <option value="Villa">Villa</option>
        </select>
        <select id={styles.resources}>
            <option value="Resources">Resources </option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
        </select>
       </div>
        </div>
        <div id={styles.fav}>
            
      
            <Link to="/favourite" id={styles.link}><img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2250px-Love_Heart_symbol.svg.png" style={{marginTop:"15px",marginLeft:"2px"}}/> {count}</Link>
           <span style={{marginTop:"12px",marginLeft:"2px"}}>Favourites</span>
        </div>
        <div id={styles.start2}>
            <button id={styles.login}>Login</button>
            <button id={styles.signup}>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar