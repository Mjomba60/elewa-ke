import { Link } from "react-router-dom";
import logo from "../Assets/Elewa-logo.svg"
import { Hamburger } from "./hamburgermenu";
import { useEffect, useState } from "react";

export default function Header(){

    const [scrWidth, seScrnWidth] = useState(0)

    useEffect(() => {
        function handleResize(){
            seScrnWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return ()=> {
            window.removeEventListener('resize', handleResize)
        }
    },[])
    

    const nav = scrWidth >= 500 ? <nav>
    <Link to= "social-impact">Social Impact</Link>
    <Link to= "/">About</Link>
    <Link to= "invest">Invest</Link>
        </nav> : <Hamburger />

    return (
        <div id="elewa-header">
            <img src={logo} alt="logo" />
            {nav}
        </div>
    )
}