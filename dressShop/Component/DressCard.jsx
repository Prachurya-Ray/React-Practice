const DressCard = ({image, name, ratings, cost})=>{
    return (
        <div className="card">
            <img className="dressImg" src={image}/>
            <div className="card-description">
                <h2>{name}</h2>
                <h4>Rs. {cost}</h4>
                <h6>{ratings} Stars</h6>
            </div>
        </div>
    )
}

export default DressCard;