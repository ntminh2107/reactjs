import React from "react";

const RatingStar = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="rating rating-static">
      {[...Array(fullStars)].map((_, index) => (
        <input
          key={index}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-yellow-500"
          checked
          readOnly
        />
      ))}
      {halfStars === 1 && (
        <input
          key={fullStars}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-yellow-500"
          style={{ clipPath: "inset(0 50% 0 0)" }}
          checked
          readOnly
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <input
          key={index + fullStars + halfStars}
          type="radio"
          name="rating"
          className="mask mask-star-2"
          readOnly
        />
      ))}
    </div>
  );
};

export default RatingStar;
