import logo from '../../img/queen-fashion.jpg'

const Title = ()=>{
    return(
        <a href="/">
        <img 
            className="logo"    
            src={logo}/>
        </a>
    )
}

const Headers = ()=>{
    return (
        <div className="header">
            <Title/>
            <ul className="menu">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li style={{marginRight:"3rem"}}>Cart</li>
            </ul>
        </div>
    )
}

export default Headers;