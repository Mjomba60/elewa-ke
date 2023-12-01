import React, { useRef } from "react"
import { Link } from "react-router-dom"

function Hamburger(){

    let menuref = useRef<HTMLElement | null>(null)

    function burgerClick(){
        menuref.current!!.classList.toggle('show')
    }

    return(
    <>
        <div id="hamburger" onClick={burgerClick}>
            <span></span>
            <span></span>
        </div>
        <Menu ref = {menuref}/>
    </>
    )
}

const Menu =  React.forwardRef<HTMLElement>((props, ref:any) =>{

    const navigation_links : NavLink[] = [
        {link: "social-impact", text: "Social Impact"},
        {link: "/", text: "About"},
        {link: "invest", text: "Invest"}
    ]

    function nav_click(){
        ref!!.current.classList.toggle('show')
    }



    return (
            <nav className="nav-menu" ref={ref}>
                {navigation_links.map((el) => <Link key={el.link} to={el.link} onClick={nav_click}>{el.text}</Link>)}
            </nav>

    )
})

interface NavLink{
    link: string,
    text: string
}

export {Hamburger, Menu}