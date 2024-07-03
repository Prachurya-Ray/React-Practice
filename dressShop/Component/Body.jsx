import { useState } from "react";
import { DressCollection } from "../config";
import DressCard from "./DressCard";

function filterData(searchItem, DressCollection){
    return DressCollection.filter((dress)=>dress.data.name.toLowerCase().includes(searchItem.toLowerCase()));
}

const Body = ()=>{
    
    const [searchItem, setSearchItem] = useState();
    const [dressList, setDressList] = useState(DressCollection);
    return(
        <>  
            <div className="search-option">
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search Here"
                    value={searchItem}
                    onChange={(e)=>{
                        setSearchItem(e.target.value);
                    }}
                    onKeyDown={()=>{
                        if(event.key=="Enter"){
                            if(searchItem != null){
                                let data = filterData(searchItem, DressCollection);
                                setDressList(data);
                            }
                        }
                    }}  
                />
                <button
                    className="search-btn"
                    onClick={()=>{
                        if(searchItem != null){
                            let data = filterData(searchItem, DressCollection);
                            setDressList(data);
                        }
                    }}
                >Search</button>
            </div>



            <h2 style={{marginLeft:"5rem", marginTop:"1rem" ,color:"#F28F16"}}>Top Collections</h2>

            <div className="cards">
                {
                    dressList.map((dress)=>{
                        return <DressCard {...dress.data} key={dress.id}/>
                    })
                }

            </div>
        </>
        
    )
}

export default Body;