import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body"
import Footer from "./Component/Footer"
import About from "./Component/About";
import Error from "./Component/Error";
import Contact from "./Component/Contact";
import RestaurentMenu from "./Component/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

/*
                Header
                    - Logo
                    - Nav Iterm
                    - Cart
                Body
                    - Search Bar
                    - Restaurant List
                        ~ Restaurant Card
                            * Image
                            * Name
                            * Cusine
                            * Rating
                Footer
                    - Links
                    - Copyright
*/

const AppLayout = () =>{
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurentMenu/>,
            }
        ]
    },
    
])

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);