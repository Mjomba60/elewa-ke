import { useLocation } from "react-router-dom"

export default function BannerCTA(){

    let data : BannerInterface = {span1: ""}

    const location = useLocation()
    switch (location.pathname) {
        case "/": data = {span1: "Learn more about", link: `Elewa's social impact.`, refrence: "social-impact"}
            break;
        case "/invest": data = {span1: "Become part of our mission.", span2: "And start", link: "investing", refrence: "invest"}
            break;
        case "/social-impact": data = {span1: "Become part of our mission", span2: "and", link: "join elewa"}
            break;
    }

    return (
        <div id="ctabaner">
            <section>
                <span>{data.span1} </span>
                <span>{data.span2} <a id="banerlink" href={"/" + data.refrence}>{data.link}</a></span>
            </section>
        </div>
    )
}

interface BannerInterface{
    span1: string,
    span2?: string,
    link?: string,
    refrence?: string
}