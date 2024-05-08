let head = React.createElement("h1",{
    id:"firstLine"
}, "Hello 1");

let head2 = React.createElement("h2",{
    id:"firstLine2",
}, "Hello 2");

let h1 = React.createElement("div",{
    className:"blue",
}, head);

let h2 = React.createElement("div",{
    className:"red",
}, head2);

let headDiv = React.createElement("div",{
    id:"head"
}, [h1, h2]);

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headDiv);   