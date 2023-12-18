import linkedin from "../Assets/linkedin.svg"
import Aos from "aos"
import { useEffect } from "react"
import { teammembers, Members } from "../data/teamandmanagment"
import Carousel from "./carousel"

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
            <Carousel>
                {membersrender}
            </Carousel>

            
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