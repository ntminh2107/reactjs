import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./Home.scss";
import Navbar from "../navbar/Navbar";
const Home = () => {
  const tabs = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [productInfo, setProductInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [types, setType] = useState("jewelery");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRes = await axios.get(`https://fakestoreapi.com/products`);
        setProductInfo(productRes.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  });

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <Navbar />
      <title>products</title>
      <div class="flex flex-col absolute inset-x-0 top-0">
        <Product productInfo={productInfo} />
      </div>
    </>
  );
};
export default Home;
