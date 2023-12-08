import linkedin from "../Assets/linkedin.svg"
import Slider from "react-slick"

export default function TeamManagement(){

    const teammembers : Members[] = [
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679985792/elewa-group-website/elewa-team-members/lemmy_oosngt.jpg", name : " Stephen Mwaura ", role: " Software Engineer ", linkedin_url: "https://www.linkedin.com/in/stephenlemmymwaura/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/jente-elewa_wbqyyi.jpg", name : " Jente Rosseel ", role: " Founder, Managing Partner ", linkedin_url: "https://www.linkedin.com/in/jrosseel/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/ken-elewa_ydwzop.jpg", name : " Kennedy Adhola ", role: " Operations & Partnerships ", linkedin_url: "https://www.linkedin.com/in/kennedy-adhola-97570535/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/peter-elewa_zuzovx.jpg", name : " Peter Reinartz ", role: " Executive Chairman ", linkedin_url: "https://www.linkedin.com/in/peter-reinartz-1b4452ab/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679660055/elewa-group-website/elewa-team-members/noella-elewa_g6tquq.jpg", name : " Noella Mwanzia ", role: " Software Engineer ", linkedin_url: "https://www.linkedin.com/in/noella-mwanzia-633803173/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/ian-elewa_bejey9.jpg", name : " Ian Odhiambo", role: " Founder Kujali ", linkedin_url: "https://www.linkedin.com/feed/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/jane-elewa_yyybka.jpg", name : " Jane Njoroge ", role: " Software Developer ", linkedin_url: "https://www.linkedin.com/in/jane-w-njoroge/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679657743/elewa-group-website/elewa-team-members/shawn-elewa_tt3iit.jpg", name : " Shawn Chiama ", role: " Software Engineer", linkedin_url: "https://www.linkedin.com/feed/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_800/v1679984133/elewa-group-website/elewa-team-members/joy_gvbweu.jpg", name : " Joy-Lidah Wawira ", role: " Software Engineer ", linkedin_url: "https://www.linkedin.com/in/joy-wawira/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656821/elewa-group-website/elewa-team-members/reagan-elewa_bn8xkl.jpg", name : " Reagan Charana ", role: " Software Engineer ", linkedin_url: "https://www.linkedin.com/in/reagan-charana/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_600/v1679666201/elewa-group-website/elewa-team-members/chesa-elewa_soeb8f.jpg", name : " Paul Chesa ", role: " Software Engineer", linkedin_url: "https://www.linkedin.com/in/paulchesa/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679665800/elewa-group-website/elewa-team-members/jeff-elewa_hdupp7.jpg", name : " Jeff King'ori", role: " Software Developer", linkedin_url: "https://www.linkedin.com/in/jeffrey-king-ori-165333164/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656822/elewa-group-website/elewa-team-members/zip-elewa_jksbfg.jpg", name : " Zippie Ntabo ", role: " Office Administrator & Finance ", linkedin_url: "https://www.linkedin.com/in/zippie-ntabo-310693134/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,h_1000/v1682586211/IMG_9755_vfprhm.jpg", name : " Lynn Anastasia ", role: " Software Engineer ", linkedin_url: "https://www.linkedin.com/in/lynn-nyangon/"},
        {img : "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679656820/elewa-group-website/elewa-team-members/frank-elewa_kihn9e.jpg", name : " Frankline Odero ", role: " Software Developer ", linkedin_url: "https://www.linkedin.com/in/frankline-sable/"}
    ]

    const membersrender = teammembers.map((member: Members) => {
        return  <TeamCard key = {member.name} member = {member} />

    })


    return(
        <div id="Team">
            <div id="nav">
                <h1>Team and Management</h1>
            </div>
            <Slider dots = {true}
                    infinite ={true}
                    centerMode = {true}
                    adaptiveHeight = {true}
                    fade = {true}
                    autoplay = {true}
                    autoplaySpeed={1500}>
                {membersrender}
            </Slider>

            
        </div>
    )
}

function TeamCard({member}:any){
    return(
        <div className="teamcard">
            <img src= {member.img} alt="" />
            <div className="teamcardtext">
            <p>{member.name}</p>
            <p>{member.role}</p>
            <div className="link">
                <img src={linkedin} alt="" />
            </div>
            </div>
        </div>
    )
}

interface Members{
    img : string,
    name : string,
    role : string,
    linkedin_url? : string
}