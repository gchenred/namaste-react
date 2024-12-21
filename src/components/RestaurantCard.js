import { RESCARD_URL } from "../utilities/constants";
 
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData.info
    return (
        <div className="res-card">
            <img className="image" alt="Restaurant Logo" 
            src={
                RESCARD_URL+ cloudinaryImageId}>
        
            </img>
            <h3 className="card-content card-title">{name}</h3>
            <h4 className="card-content">{avgRating}</h4>
            <h4 className="card-content">{costForTwo}</h4>
            <h4 className="card-content">{sla.slaString}</h4>
            <h4 className="card-content">{cuisines.join(', ')}</h4>
            
        </div>
    )
}

export default RestaurantCard;