import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="p-4 mx-auto my-4 w-6/12  bg-gray-50 shadow-lg">
      <div
        className="flex justify-between p-4 text-lg cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
