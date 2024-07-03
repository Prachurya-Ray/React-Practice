const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId})=>{
    // const {name, star, cuisine, img} = restaurant.data;
    if (!cloudinaryImageId.includes("https")){
        cloudinaryImageId="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId;
    }
    return(
        <div className="card">
                <img className="card-img" src={cloudinaryImageId}/>
                <div className="card-details">
                    <h2>{name}</h2>
                    <h4>{cuisines.join(", ")}</h4>
                    <h5>{avgRating} Star</h5>
                </div>
            </div>
    )
}

export default RestaurantCard;
