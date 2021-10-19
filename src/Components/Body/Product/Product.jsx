import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StorageContext } from "../../../Contexts/StorageContext";
import styles from "../Product/Product.module.css";
import { addedItem } from "../../../Actions/AddedItem";

export default function ProductCard({ product }) {
  const { state, dispatch } = useContext(StorageContext);

  return (
    <div className={styles.card}>
      <Link to={`/productsdetails/${product.title}`}>
        <img
          onClick={() => {
            dispatch({ type: "CLICKED", payload: product });
          }}
          style={{ width: "100px" }}
          src={product.image}
          alt="product_image"
        />
      </Link>
      <span>{product.title}</span>

      <span>{product.price}</span>
      <button
        onClick={() => {
          dispatch(addedItem(state, product));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
