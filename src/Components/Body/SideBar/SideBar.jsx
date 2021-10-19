import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { StorageContext } from "../../../Contexts/StorageContext";
import { addedFilter } from "../../../Actions/AddedItem";

export default function SideBar() {
  const { state, dispatch } = useContext(StorageContext);
  const categories = [
    { 0: "electronics" },
    { 1: "jewelery" },
    { 2: "men's clothing" },
    { 3: "women's clothing" },
  ];
  return (
    <div>
      <div className={styles.side}>
        <h2>Shop</h2>

        <nav>
          <ul className={styles.padd_0}>
            <li className={styles.list}>
              Category
              <ul>
                {categories.map((cat, index) => (
                  <Link to={`/Categories/${cat[index]}`}>
                    <li>{cat[index]}</li>
                  </Link>
                ))}
              </ul>
            </li>
            
            <li className={styles.list}>
              Price Range
              <select
                onChange={(e) => {
                  if (e.target.value === "undefined") return;
                  dispatch(addedFilter(e.target.value));
                }}
              >
                <option value="undefined">Choose range</option>
                <option value="0-50">0-50</option>
                <option value="50-100">50-100</option>
                <option value="100-200">100-200</option>
              </select>
            </li>
            <li className={styles.list}>Shipping</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
