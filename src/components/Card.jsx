import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className=" flex flex-col justify-center items-center mx-auto max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-50 h-65 " src={image} alt={name} />
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Card;
