import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
const Product = ({ productInfo }) => {
  const navigate = useNavigate();
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="flex flex-wrap justify-start p-5 gap-3 content-around">
      {productInfo.map((product) => (
        <div
          class="flex flex-col justify-evenly bg-10 ring-0 shadow-md border rounded-box size-100 md:basis-1/3 sm:basis-1/2 xl:basis-1/4 p-3"
          key={product.id}
          style={{ width: "200px", height: "400px" }}
        >
          <img
            class="h-40 w-40 p-3 mx-auto"
            src={product.image}
            alt={product.title}
          />
          <div className="card-content">
            <div className=" font-bold text-left">
              {truncateString(product.title, 50)}
            </div>
            <h3>{product.category}</h3>
            <p>Price: ${product.price}</p>
            <button
              className="btn btn-info"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              Detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
