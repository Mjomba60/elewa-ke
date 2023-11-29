import { Link } from "react-router-dom";
import logo from "../Assets/Elewa-logo.svg"
import { Hamburger } from "./hamburgermenu";

export default function Header(){

    const scrnwidth: number = window.screen.width
    const nav = scrnwidth < 426 ? <Hamburger /> :  <nav>
    <Link to= "social-impact">Social Impact</Link>
    <Link to= "/">About</Link>
    <Link to= "invest">Invest</Link>
</nav>

    return (
        <div id="elewa-header">
            <img src={logo} alt="logo" />
            {nav}
        </div>
    )
}