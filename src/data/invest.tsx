import { CardImgTxtInterface } from "../Components/Interface/cardimgtxtinterface";
import { FigureCardInterface } from "../Components/Interface/figcardinterface";

const secndcardtext:CardImgTxtInterface[] = [
    {bgcolor: "white",
    color: "black",
    img: {src: "https://tinyurl.com/7jbj2bes", order: "1"},
    text: {order:"2", head:"Elewa NV, a multi-stakeholder cooperation", main:["At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.", "Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."]}},

    {bgcolor: "white",
    color: "black",
    img: {src: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg", order: "2"},
    text: {order:"1", head:"The Elewa Creative Hub", main:["Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.", "Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation."]}}
]

const griddata: FigureCardInterface[] = [
    {amount: "1.3", text: "Approx. number of Kenyan talents reaching the age of 18 in 2022", dimension: "M"},
    {amount: "5", text: "number of East-Africans(EAC) reaching the age of 18 in 2022", dimension: "M"},
    {amount: "2022", text: "Democratic Republic of Congo joins the East African Community"},
    {amount: "1.5", text: "The number of unfilled IT vacancies in the US and EU markets", dimension: "M"},
    {amount: "10", text: "Number of technical vacancies by 2030", dimension: "M"},
    {amount: "2050", text: "Africa holds the worlds largest workforce"},
    {amount: "$4.6", text: "Startup funding raised by African startups in 2022", dimension: "M"},
    {amount: "310", text: "Increase in startup funding for companies with HQ in Kenya", dimension: "%"}
]

const imgtxt: CardImgTxtInterface = {
    bgcolor : "rgb(244 244 244)",
    color: "black",
    img: {
        src: "https://tinyurl.com/23u47d3f",order:"2"},
    text: {order:"1", head: "How we see it differently", main: ` The global South is rapidly catching up with the "developed" world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).`}
}

export {secndcardtext, imgtxt, griddata}