import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import styles from'./Header.module.css'
import {StorageContext} from '../../Contexts/StorageContext'

export default function Header() {
    const {state,dispatch}=useContext(StorageContext)
    return (
        <div>
           <Link to='/'>
               <h1>Logo</h1>
           </Link>
           <nav>
               <ul className={styles.flex_bar}>
                   <li>
                       <Link className={styles.link}> Latest Products</Link>
                   </li>
                   <li>
                       <Link className={styles.link}>Brands</Link>
                   </li>
                   <li>
                       <Link className={styles.link}>Shop</Link>
                   </li>
                   <li>
                       <Link className={styles.link}>Designers</Link>
                   </li>
                    <span><i className="fas fa-shopping-cart"></i> <span>{state.addedItem.length}</span></span>
               </ul>
              
           </nav>
        </div>
    )
}
