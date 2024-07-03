import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import owlImage from './img/owl.png';


//Using  CreateElement
/*
let div1 = ce('div',{
    className:'title'
},[
    ce('h1',{
        key:'1'
    },"Welcome"),
    ce('h2',{
        key:'2'
    },"Prachurya"),
    ce('h3',{
        key:'3'
    },"Ray")
]);

let div2 = (<div className="title">
        <h1>Welcome</h1>
        <h2>Prachurya</h2>
        <h3>Ray</h3>
    </div>);

let Subset = () => (<h1 key="1">Welcome !</h1>);

let Div2 = () => (<div className="title">
        <Subset/>
        <h2 key="2">Prachurya</h2>
        <h3 key="3">Ray</h3>
    </div>);
*/

let Header = ()=> {
    return (
        <div className="headerLine">
            <img src={owlImage} alt="Headphones" className="img" key="1" style={{ paddingLeft: '10px' }}/>
            <div key='2' className="searchBar">
                <input type="text" className="barStyling" key='21' placeholder=" Search"></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="iconStyling" key='22'/>
            </div>
            <FontAwesomeIcon icon={faUser} className="iconStyling" key='3' style={{ paddingRight: '10px' }}/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(headDiv);   
root.render(<Header/>);


