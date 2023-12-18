import Aos from "aos"
import { useEffect } from "react"
import Carousel from "./carousel"


export default function History(){
    useEffect(() => {
        Aos.init()
    })

    const historyvalues : HistoryInterface[] = [
        {year : "2015", title: "Elewa is born", text: "From a Belgian garage and Embakasi apartment, Elewa is first sees the light as a purely SaaS-based EdTech analyzing KCSE past papers"},
        {year : "2017", title: "Kickstarting Elewa Education", text: `With an initial pre-seed investment of friends and family and a masters thesis on the subject, Elewa pilots it's innovative "Four Pillars" model in 5 secondary schools across Kenya. 
        Learning outcomes go through the roof in only one term.`},
        {year : "2018", title: "Commercial exploration", text: `
        Succesfully piloting in 5 schools, Elewa Education is ready for the market. Elewa founds Elewa Investment, a cooperative fund in Belgium 
        aimed at fueling the growth of Elewa. Elewa launching four commercial services across schools in Kenya.
      `},
        {year : "2019", title: "Elewa on the map", text: `
        Elewa is recognized by UNESCO as Kenyan representative and top 10 innovations in the UNESCO ICT in Education Prize (Theme AI & education). 
        Elewa joins the fourht Cohort of the "Google for Startups Africa" accelerator program.
      `},
        {year : "2020", title: "Elewa Diversifies", text: `
        Elewa takes a step into the future with Jente Rosseel as CEO, Kennedy Adhola as HR Director and Peter Reinartz as chairman. 
        Elewa Education generalises it's innovative model and finds product market-fit in the professional training space across Education, Health and Agriculture & Environment.
        iTalanta is born. A tech offshoring company which provides software development services to clients in Europe and the US. 
      `},
        {year : "2021", title: "Conversational Learning", text: `
        Elewa Education launches first Conversational learning pilot together with the Kenya Scouts Association. 
        iTalanta grows to be a major activity within the company.
      `},
        {year : "2023", title: "Elewa Group", text: `
        Elewa establishes itself as a regional player in Professional Education and Technology development. 
          Consolidates its activities through Elewa NV/Group. First investment in a Venture Lab by Elewa Group.
      `},
    ]

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

interface HistoryInterface{
    year : string,
    title: string,
    text:string
}