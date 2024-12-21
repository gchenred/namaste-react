import { restaurantsList } from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
    const [ resList, setResList ] = useState(restaurantsList);

    return (
        <div className="body-container">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    filteredList = restaurantsList.filter((restaurant) => restaurant.info.avgRating > 4)
                    setResList(filteredList)
                }}>Top Restaurants</button>
            </div>
            <div className="restuarant-list">
                {
                    resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
                
            </div>
        </div>
    )

}

export default Body;
