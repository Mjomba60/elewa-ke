import { useLocation } from "react-router-dom"
import Header from "./header"


export default function HeroSection(){

    let data: Hero = {img: "", h1: "", h2: ""}

    //const [data, setData] = useState({img: "", h1: "", h2: "", p: ""})//
    let location  = useLocation()
    
    switch (location.pathname) {
        case "/": data ={img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg", h1: "HOW TO RECOGNIZE AN ELEWA MEMBER", h2: "Dependable, Creative, Supportive, Open Minded and Fun*", p: "*SERIOUS WHEN IT MATTERS"}
            break;
        case "/invest" : data = {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg", h1: "Trade not aid", h2: "Southern innovations addressing global problems", p: ""}
            break;
        case "/social-impact": data = {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg", h1: "Scaling impact beyond the norm ", h2: "Human and Environmental Impact through Social Enterprise", p: ""}
            break;
    
        default: data = {img: "", h1: "", h2: "", p: ""}
            break;
    }

    return (
        <div id="elewa-hero">
            <Header />
            <div>
                <img id="bg-img" src={data.img} alt="" />
            </div>
            <div data-aos="fade-left" id="hero-content">
                <h1>{data.h1}</h1>
                <h2>{data.h2}</h2>
                <p>{data.p}</p>
            </div>
        </div>
    )
}

interface Hero{
    img: string,
    h1: string,
    h2: string,
    p?: string

}