interface ImgTxt{
    img : string,
    heading : string,
    text : string
}


const cardsinfo : ImgTxt[] = [
    {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png", heading: "Holistic solutions", text: "We go beyond a simple patch-up but develop lasting solutions through holistic design."},
    {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", heading: "Impact", text: "Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change."},
    {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png", heading: "Open data", text: "Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects."}
]

const headertext: string[] = [
    "We care!",
    "Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.",
    " Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers."
]

export {cardsinfo, headertext}
export type {ImgTxt}