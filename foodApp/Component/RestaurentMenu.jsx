import { useEffect } from "react";
import { useParams } from "react-router-dom"

const RestaurentMenu = ()=>{
    const {id} = useParams();

    useEffect(()=>{
        callRestaurant();
    },[])

    async function callRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.27060&lng=85.83340&restaurantId=87320");
        const res = await data.json();
        console.log(res.data.cards[2].card.card.info);

        // setRestaurant(res.data.cards[2].card.card.info)
    }

    return(
        <div>
            <h1>Restaurent Menu id: {id}</h1>
            <h2>Pizza Hut</h2>
        </div>
    )
}

export default RestaurentMenu