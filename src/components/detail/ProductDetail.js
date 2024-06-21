import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RatingStar from "./RatingStar";
import "./ProductDetail.css";
import Navbar from "../navbar/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productDetailres = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(productDetailres.data);
        setLoading(false);
      } catch (err) {
        setError("product not found");
        setLoading(false);
      }
    };
    fetchProductInfo();
  }, [id]);
  return (
    <div className="product-container">
      <Navbar />
      <div className="product-detail">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <div className="product-rating">
            <div className="product-rate">
              {product.rating && (
                <div className="flex items-center mt-2">
                  <RatingStar rating={product.rating.rate} />
                  <span className="ml-2 text-sm">
                    {product.rating.count} reviews
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="product-price">
            {" "}
            <span className="">Price: </span>
            {product.price}$
          </div>
          <div className="product-category">
            <span>category: </span>
            {product.category}
          </div>
          <div className="buy-add-to-cart space-x-4 mt-4">
            <button class="btn btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg ">
              add to cart
            </button>

            <button class="btn btn-xs btn-error sm:btn-sm md:btn-md lg:btn-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>
      <h2 class="divider divider-secondary ">Product description</h2>
      <div className="product-description">{product.description}</div>
    </div>
  );
};

export default ProductDetail;
