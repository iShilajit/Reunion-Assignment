import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../css/footer.module.css"
const Footer = () => {
  return (
    <div id={styles.footer}>
      <div id={styles.seg1}>
        <Link id={styles.home} to="/">Home</Link>
        <Link id={styles.about} to="/">About</Link>
        <Link id={styles.blog} to="/">Blog</Link>
        <Link id={styles.contact} to="/">Contact</Link>
      </div>
      <div id={styles.reserved}>
            <p>© 2022 Estatery. All rights reserved</p>
            <div id={styles.social}>
              <button >
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" />
              </button>
              <button >
              <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" />
              </button>
              <button>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" />
              </button>
            </div>
          </div>
    </div>
  )
}

export default Footer