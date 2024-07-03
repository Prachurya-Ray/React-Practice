import { useEffect, useState } from "react";
import {restaurentList} from "../config";
import RestaurantCard from "./Restaurant";
import Shimmer from "./ShimmerUI";

function filterData(searchItem, searchRestaurant){
    const datas = searchRestaurant.filter((Restaurant)=>Restaurant.info.name.toLowerCase().includes(searchItem.toLowerCase()))
    return datas;
}

const Body = ()=> {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchItem, setSearchItem] = useState();
    const [heading, setHeading] = useState("Top Sizzling");

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        // console.log(json);
        
        setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const SearchBar = (<div className="search-container">
                            <input 
                                type="text" 
                                className="search-bar" 
                                placeholder="Search Here" 
                                value={searchItem}
                                onChange={(e)=>{
                                    setSearchItem(e.target.value)
                                }}
                                onKeyUp={()=>{
                                    if(event.key=='Enter'){
                                        if(searchItem != null){
                                            const datas = filterData(searchItem, allRestaurant);
                                            setFilteredRestaurant(datas);
                                        }
                                    }
                                }}
                            />
                            <button 
                                className="search-btn"
                                onClick={()=>{
                                    if(searchItem != null){
                                        const datas = filterData(searchItem, allRestaurant);
                                        setFilteredRestaurant(datas);
                                    }
                                }}
                            >Search
                            </button>
                        </div>);

                                

    if(filteredRestaurant.length===0){
        return(
            <>
                {SearchBar}
                <Shimmer />
            </>
        )
    }


    return (allRestaurant.length===0)? <Shimmer/> : (
        <>
            {SearchBar}

            <h2 className="trending-h2">{heading}</h2>
            <div className="cards">
      
                {
                    (filteredRestaurant.map((restaurant)=>{
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                    }))
                }
                
            </div>
        </>
    )
}

export default Body;