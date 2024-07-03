import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";



let li1 = ce("li",{
    className:"li"
}, "About Us");

let li2 = ce("li",{
    className:"li"
}, "Support");

let li3 = ce("li",{
    className:"li"
}, "Home");



let ul = ce("ul",{
    className:"ul"
}, [li1,li2,li3]);



// let h1 = ce("h1",{
//     className:"h1"
// }, "Namaste React");

let Heading = ()=>(<h1 className="h1" key="h1">Namaste React</h1>);

var xyz = 10;

const Head = () =>{
    return <div>{xyz+1}<Heading/><h1>Welcome to React</h1><h2>Where imagination becomes Reality</h2></div>;
}

let headDiv = ce("div",{
    className:"header"
}, [ul]);

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headDiv);   
root.render(<Head/>);