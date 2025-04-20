import { RESCARD_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="justify-around m-4 p-3 w-56 h-88 rounded-lg  bg-red-200 cursor-pointer hover:border-2 border-red-300">
      <img
        className="rounded-lg h-36 w-56"
        alt="Restaurant Logo"
        src={RESCARD_URL + cloudinaryImageId}
      ></img>
      <h3 className="m-2 text-lg font-medium">{name}</h3>
      <h4 className="m-2 text-sm">{avgRating}</h4>
      <h4 className="m-2 text-sm">{costForTwo}</h4>
      <h4 className="m-2 text-sm">{sla.slaString}</h4>
      <h4 className="m-2 text-sm">{cuisines.join(", ")}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
