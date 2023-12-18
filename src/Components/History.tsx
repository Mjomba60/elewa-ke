import Aos from "aos"
import { useEffect } from "react"
import Carousel from "./carousel"
import { historyvalues, HistoryInterface } from "../data/history"


export default function History(){
    useEffect(() => {
        Aos.init()
    })

    const historyrender = historyvalues.map((history: HistoryInterface) => {return <HistoryComponent key = {history.title} historyvalue = {history}/>})

    return(
        <div id="history">
            <h1 data-aos = "zoom-in-left" data-aos-duration ="700" data-aos-easing= "ease-in-sine">Our History</h1>
            <div id="historycontext">
                <Carousel>
                    {historyrender}
                </Carousel>
            </div>
        </div>
    )
}

function HistoryComponent({historyvalue}: any){

    return (
        <div data-aos = "zoom-in-left" data-aos-duration ="700" data-aos-easing= "ease-in-sine" className="historycomponent">
            <div className="componentcontext">
                <p>{historyvalue.year}</p>
                <h3>{historyvalue.title}</h3>
                <p>{historyvalue.text}</p>
            </div>
        </div>
    )
}