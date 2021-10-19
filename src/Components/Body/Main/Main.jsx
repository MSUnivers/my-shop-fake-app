import React from "react";
import ProductContainer from "../ProductContainer/ProductContainer.jsx";
import SideBar from "../SideBar/SideBar.jsx";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <SideBar />
     <ProductContainer />
    </div>
  );
}


