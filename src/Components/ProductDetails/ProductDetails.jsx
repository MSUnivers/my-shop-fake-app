import React, { useContext } from "react";
import { StorageContext } from "../../Contexts/StorageContext";
import styles from '../ProductDetails/ProductDetails.module.css'


export default function ProductDetails() {
 
    const {state}=useContext(StorageContext);
    
       
    
  return <div className={styles.card_detail}>
      <img src={state.clickedItem.image} alt="image" />
      <div className={styles.info}>
        <p>{state.clickedItem.title}</p>
        <p>{state.clickedItem.price} $</p>
      </div>
      
      
      </div>;
}

