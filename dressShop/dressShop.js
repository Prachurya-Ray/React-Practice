import React from "react";
import ReactDOM from "react-dom/client";
import Headers from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";

const AppLayout = ()=>{
    return (
        <>
            <Headers/>
            <Body/>
            <Footer/>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);