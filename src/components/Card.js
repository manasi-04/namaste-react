import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { restaurant } = props;
  const { name, avgRating, sla, cuisines, id, cloudinaryImageId } =
    restaurant.info;
  return (
    <Link to={`/restaurants/${id}`}>
      <div className="w-48">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
          className="w-40 h-36"
        />
        <h3 className="font-semibold">{name}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</div>
      </div>
    </Link>
  );
};

export default Card;
