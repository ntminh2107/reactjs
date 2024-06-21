import axios from "axios";
import React, { useEffect, useState } from "react";
const OrderHistory = ({ orderHistory }) => {
  const [productInfo, setProductInfo] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productDetails = await Promise.all(
          orderHistory.products.map(async (product) => {
            const response = await axios.get(
              `https://fakestoreapi.com/products/${product.productId}`
            );
            return { ...response.data, quantity: product.quantity };
          })
        );
        setProductInfo(productDetails);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductInfo();
  }, [orderHistory.products]);

  const totalAmount = productInfo.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <>
      <div className="flex flex-row justify-between mb-4">
        <div class="flex flex-col">
          {productInfo.map((product) => (
            <div
              key={product.id}
              className="flex flex-row space-x-3 justify-between mb-4"
            >
              <div className="flex space-x-5">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-32"
                />
                <div className="flex flex-col text-1xl justify-center">
                  <h2 className="font-bold">{product.title}</h2>
                  <div>Sku: #{product.id}</div>
                  <div>
                    {product.quantity} x ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-col">
          <h2 className="font-bold">Order: #{orderHistory.id}</h2>
          <div>{new Date(orderHistory.date).toLocaleDateString()}</div>
          <div className="font-bold">Total: ${totalAmount.toFixed(2)}</div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};
export default OrderHistory;
