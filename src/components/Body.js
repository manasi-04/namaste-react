import Card from"./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { restaurantData } from './../utils/mockData';

const Body  = () => {
    let [resList, setResList] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [filteredData, setFilteredData]= useState([]);
    useEffect(() => {
      fetchData()
    }, [])
    
    let fetchData = async() => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9455888&lng=77.5712556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        let jsonData = await data.json()
        let restaurantData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("res data", jsonData)
        setResList(restaurantData)
        setFilteredData(restaurantData)
    }
    let buttonClickHandler = () => {
        let filteredList = restaurantData.filter(data => data.info.avgRating > 4);
        setResList(filteredList)
    }
    return  resList?.length === 0 ? <Shimmer /> : (
        <div className="m-4">
            <div className="flex mb-4 gap-4">
                <input value={searchText} onChange={e => setSearchText(e.target.value)} className="border border-black rounded-md"/>
                <button onClick={() => {
                    const filteredRes = resList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredData(filteredRes)
                }} className="bg-gray-200 p-1 rounded-md">Search</button>
                <button onClick={buttonClickHandler} className="bg-green-500 rounded-md text-white p-1">
                    Top rated restaurants
                </button>
            </div>
            <div className="flex gap-4 flex-wrap">
                {
                    filteredData.map(restaurant => (
                        <Card restaurant={restaurant} key={restaurant?.info?.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;