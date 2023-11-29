import { Link } from "react-router-dom"

function Hamburger(){
    return(
        <div id="hamburger">
            <span></span>
            <span></span>
        </div>
    )
}

function NavMenu(){
    return (
        <div id="nav-menu">
            <nav>
                <Link to= "social-impact">Social Impact</Link>
                <Link to= "/">About</Link>
                <Link to= "invest">Invest</Link>
            </nav>
        </div>
    )
}

export {Hamburger, NavMenu}