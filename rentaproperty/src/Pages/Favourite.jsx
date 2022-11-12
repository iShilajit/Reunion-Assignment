import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import styles from "../css/favourite.module.css";
import Footer from "../component/Footer";

function Favourite() {
  let favv = JSON.parse(localStorage.getItem("favourite")) || [];

  
  const handleDelete = (index) => {
    favv.splice(index, 1);
    localStorage.setItem("todoTodo", JSON.stringify(favv));
  };


  return (
    <>
      <Navbar count={favv.length} />

      <div id={styles.container}>
        {favv.map((item, index) => (
          <div id={styles.show}>
            <div id={styles.card}>
              <img id={styles.img} src={item.img} />
              <h3 id={styles.price}>
                $ {item.price}
                <span id={styles.month}>/month</span>
              </h3>
              {/* <button onClick={() => handleDelete(index)}>Delete</button> */}
              <h4 id={styles.name}>{item.name}</h4>

              <p id={styles.address}>{item.address}</p>
              <div id={styles.details}>
                <div id={styles.bed}>
                  <img src="https://cdn-icons-png.flaticon.com/512/1926/1926495.png" />
                  <p>{item.bed} Beds</p>
                </div>
                <div id={styles.bathroom}>
                  <img src="https://static.vecteezy.com/system/resources/previews/007/738/133/non_2x/icon-bathroom-suitable-for-education-symbol-two-tone-style-simple-design-editable-design-template-simple-illustration-vector.jpg" />
                  <p>{item.bathroom} Bathrooms</p>
                </div>
                <div id={styles.area}>
                  <img src="data:image/png;base64,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" />

                  <p>{item.area} m2</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button id={styles.back}>
        <Link id={styles.backlink} to="/">
          Back to home Page
        </Link>
      </button>
      <Footer />
    </>
  );
}

export default Favourite;
