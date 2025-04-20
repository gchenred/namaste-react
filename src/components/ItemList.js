import { RESCARD_URL } from "../utilities/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items?.map((item) => (
        <div
          className="m-2 p-2 border-b text-left flex"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="font-semibold text-lg my-2 py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="relative w-3/12 p-4">
            <img src={RESCARD_URL + item?.card?.info?.imageId}></img>
            <button className="font-bold cursor-pointer absolute bottom-6 left-14 bg-red-200 px-4 rounded-md">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
