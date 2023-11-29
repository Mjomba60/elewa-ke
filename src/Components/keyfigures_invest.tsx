import { FigureCardInterface } from "./Interface/figcardinterface"

function FigureCard({figinfo}:any){
    return (
    <div className="snfigure">
        <h1>{figinfo.amount}<span>{figinfo.dimension}</span></h1>
        <p>{figinfo.text}</p>
    </div>
    )
}

export default function Figures({figures}:any){

    const figurerenders = figures.map((figure:FigureCardInterface) => {return <FigureCard key = {figure.text} figinfo = {figure}/>})

    return(
        <div id="figurescontainer">
            <h2>Key figures</h2>
            <div id="figuregrid">
                {figurerenders}
            </div>
        </div>
    )
}