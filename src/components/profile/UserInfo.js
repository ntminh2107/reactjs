import React, { useState } from "react";
const UserInfo = ({ profileInfo }) => {
  return (
    <div>
      <div class="text-1xl row-auto rounded-md p-3">
        <h1 class="font-bold text-3xl text-center">User Information</h1>
        <hr class="my-3 border-black" />
        <div>
          <span class="inline font-bold">full name: </span>{" "}
          {profileInfo.name?.firstname} {profileInfo.name?.lastname}
        </div>
        <div>
          <span class="inline font-bold">email: </span>
          {profileInfo.email}
        </div>
        <div>
          <span class="inlinde font-bold">phone-number: </span>
          {profileInfo.phone}
        </div>
      </div>
      <div class="text-1xl row-auto p-3 bg-white">
        <div class="text-1xl">
          <h1 class="font-bold text-3xl text-center">Address Information</h1>
          <hr class="my-3 border-black" />
          <span class="inline font-bold">City: </span>
          {profileInfo.address?.city}
        </div>
        <div>
          <span class="inline font-bold">Street:</span>
          {profileInfo.address?.street}
        </div>
        <div>
          <span class="inline font-bold">Number: </span>
          {profileInfo.address?.number}
        </div>
        <div>
          <span class="inline font-bold">Zip code: </span>
          {profileInfo.address?.zipcode}
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
