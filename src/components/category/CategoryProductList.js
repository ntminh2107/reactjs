import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../homepage/Product";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
const CategoryProductList = () => {
  const { category } = useParams();
  console.log(category);
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProductInfo(productRes.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [category]);

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <Navbar />
      <title>products</title>
      <div className="home">
        <Product productInfo={productInfo} />
      </div>
    </>
  );
};
export default CategoryProductList;
