import AOS from 'aos'
import { useEffect } from "react";

export default function CardImgTxt({cardtext}:any){

    useEffect(()=>{
        AOS.init()
    })

    const body = cardtext.text.main;
    const renderbody = typeof body !== "string" ? body.map((main:string) => {return <p key={main}>{main}</p>}) : <p>{body}</p>;

    return (
    <div className="bannermain" style={{backgroundColor: `${cardtext.bgcolor}`, color: `${cardtext.color}`}}>
        <div data-aos = "fade-up" data-aos-duration ="700" data-aos-easing= "ease-in-sine" className="bannercontext">
            <img className="banner-img" src={cardtext.img.src} alt="" style={{order: `${cardtext.img.order}`}}/>
            <div className="banner-text" style={{order: `${cardtext.text.order}`}}>
                <h1>{cardtext.text.head}</h1>
                {renderbody}
            </div>
        </div>
    </div>
    )
}