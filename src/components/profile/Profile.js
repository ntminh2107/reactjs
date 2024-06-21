import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import UserInfo from "./UserInfo";
import OrderHistory from "./Orderhistory";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfileRes = await axios.get(
          "https://fakestoreapi.com/users/1"
        );
        setProfileInfo(userProfileRes.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    const fetchCart = async () => {
      const userOrderRes = await axios.get(
        "https://fakestoreapi.com/carts/user/1"
      );
      setOrderHistory(userOrderRes.data);
    };
    fetchUserProfile();
    fetchCart();
  }, []);

  if (loading) return <p2>Loading....</p2>;
  return (
    <div>
      <Navbar />
      <div class="flex flex-row px-3 space-x-5 mx-auto px-40">
        <div class=" basis-3/4 row-span-2 space-y-3">
          <h1 class="font-bold text-5xl text-center">Order History</h1>
          <hr class="my-3 border-black" />
          {orderHistory.map((order) => {
            return <OrderHistory orderHistory={order} />;
          })}
        </div>

        <div class="basis-1/4 flex flex-col space-y-3 ">
          <UserInfo profileInfo={profileInfo} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
