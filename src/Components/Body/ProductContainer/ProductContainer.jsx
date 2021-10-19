import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../../Api/Api";
import { urls } from "../../../Api/Urls";
import { StorageContext } from "../../../Contexts/StorageContext";
import ProductCard from "../Product/Product";
import styles from "../ProductContainer/ProductContainer.module.css";

export default function ProductContainer() {
  const { state, dispatch } = useContext(StorageContext);
  let { category } = useParams();
  let filters = state.filters;
  if (category) {
    filters = [...filters, (item) => item.category === category];
  }

  useEffect(() => {
    dispatch({ type: "LOADING" });
    getData(urls.PRODUCTS_URL)
      .then((data) => {
        console.log(data);
        dispatch({ type: "DONE", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR", payload: error });
      });
  }, []);

  return (
    <div className={styles.product_container}>
      {state.dataStatus === "LOADING" ? (
        <div>LOADING.....</div>
      ) : filters.length > 0 ? (
        state.productList
          .filter((product) => filters.every((f) => f(product)))
          .map((product) => <ProductCard product={product} />)
      ) : (
        state.productList.map((product) => <ProductCard product={product} />)
      )}
    </div>
  );
}
