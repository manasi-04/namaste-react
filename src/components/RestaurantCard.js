import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResData from "../utils/useResData";

const RestaurantCard = () => {
  const { resId } = useParams();
  console.log("res id", resId);
  const resMenu = useResData(resId);
  console.log("res menu", resMenu)

  if (!resMenu) return <Shimmer />;
  const { name, cuisines } = resMenu?.cards[0].card?.card?.info;
  const items = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  console.log("items", items)
  return (
    <div>
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <ul>
        {
            items.map(item => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default RestaurantCard;
