import Aos from "aos"
import { useEffect } from "react"
import { ImgTxt, cardsinfo, headertext } from "../data/Aboutheader"

export default function AboutHeader(){

    useEffect(()=>{
        Aos.init()
    })

    const cardsrender = cardsinfo.map((card: ImgTxt) => {return <AboutImgTxt key = {card.heading} carddetails = {card}/>})

    return (
        <div id="aboutheader">
            <div data-aos = "fade-up" data-aos-duration ="700" data-aos-easing= "ease-in-sine" id="abtheader1">
                <h2>{headertext[0]}</h2>
                <div id="abtsubtxt">
                    <p>{headertext[1]}</p>
                    <p> {headertext[2]}</p>
                </div>
            </div>

            <div id="abtheader2">
                {cardsrender}
            </div>
        </div>
    )
}

function AboutImgTxt({carddetails}: any){
    return (
        <div className="abtheadercard">
            <img src={carddetails.img} alt="" />
            <h3>{carddetails.heading}</h3>
            <p>{carddetails.text}</p>
        </div>
    )
}