import { Culture, cultures } from "../data/culturesandvalues"

export default function CultureValues(){

    const culturerenders = cultures.map((culture: Culture) => {return <CultureComponent key = {culture.text} culture ={culture}/>})

    const header = {title: "Our Culture & Values", body: "Our culture, CODE-(T), defines us. It protects and guides us to success. It keeps our team and management accountable to itself, its objective, and our long-term mission."}
    
    return (
        <div id="cultures">
            <div id="cultureheader">
                <h1>{header.title}</h1>
                <p>{header.body}</p>
            </div>
            <div id="culturevals">
                {culturerenders}
            </div>
        </div>
    )
}

function CultureComponent({culture}: any){
    return (
        <div className="calture">
            <img src={culture.img} alt="" />
            <h2>{culture.title}</h2>
            <p>{culture.text}</p>
        </div>
    )
}

