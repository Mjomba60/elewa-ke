import linkedin from "../Assets/linkedin.svg"
import Slider from "react-slick"
import Aos from "aos"
import { useEffect } from "react"
import { teammembers, Members } from "../data/teamandmanagment"

export default function TeamManagement(){

    useEffect(()=>{
        Aos.init()
    })

    const membersrender = teammembers.map((member: Members) => {
        return  <TeamCard key = {member.name} member = {member} />

    })


    return(
        <div id="Team">
            <div id="nav">
                <h1 data-aos = "zoom-in-left" data-aos-duration ="700" data-aos-easing= "ease-in-sine">Team and Management</h1>
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

    useEffect(() => {
        Aos.init()
    })

    return(
        <div data-aos = "zoom-in-left" data-aos-duration ="700" data-aos-easing= "ease-in-sine" className="teamcard">
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