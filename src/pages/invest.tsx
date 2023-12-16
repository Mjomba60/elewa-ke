import CardImgTxt from "../Components/cardimgtxt"
import Figures from "../Components/keyfigures_invest"
import Slidebtn from "../Components/slidectabtn"
import { secndcardtext, imgtxt, griddata } from "../data/invest"

export default function Invest(){

    const scndcardtextrender = secndcardtext.map((card) => {return <CardImgTxt key = {card.img.src} cardtext = {card}/>})

    return (
        <div id="invest">
            <CardImgTxt cardtext = {imgtxt}/>
            <Figures figures = {griddata}/>
            <div id="secndcardcontainer">
                {scndcardtextrender}
                <div className="bannermain">
                    <div className="bannercontext">
                        <img className="banner-img" src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg" alt="" />
                        <div className="banner-text">
                            <h1>Investing in Elewa NV</h1>
                            <p>From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?</p>
                            <Slidebtn text = "Join the waiting list"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}