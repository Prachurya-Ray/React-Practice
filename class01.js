
let head = React.createElement("h1",{
    id:"firstLine"
}, "Hello 1");

let head2 = React.createElement("h2",{
    id:"firstLine2"
}, "Hello 2");

let headDiv = React.createElement("div",{
    id:"head"
}, [head, head2]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headDiv);
