import { restaurantsList } from "../utilities/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredResList] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  const ResturantCardWithLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4798077&lng=78.285791&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like you're offline, Please check your connection...</h1>;

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-8">
      <div className="flex gap-10 justify-center">
        <button
          className="px-5 py-2 cursor-pointer rounded-lg w-auto bg-red-200 "
          onClick={() => {
            topRatedList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setFilteredResList(topRatedList);
          }}
        >
          Top Restaurants
        </button>
        <div className="flex flex-row gap-3">
          <input
            className="w-60 border border-red-200 rounded-lg p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-5 py-2 cursor-pointer rounded-lg w-auto bg-red-200"
            onClick={() => {
              filteredRestaurants = restaurantList.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="m-12 flex flex-row flex-wrap gap-3">
        {filteredList.map((restaurant) => (
          <Link
            className="res-card-link"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted === true ? (
              <ResturantCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
