import NumberHelper from "../Components/numberhelper"
import CardImgTxt from "../Components/cardimgtxt"
import ProjectSection from "../Components/projectsecttion"
import { allbanner, allstats, projects } from "../data/socialimpact"

export default function SocialImpact(){

    const renderbanner = allbanner.map((banner) =>{ return <CardImgTxt key= {banner.img.src} cardtext = {banner}/>})

    const statrender = allstats.map((stat) => <NumberHelper key={stat.definition} stats = {stat}/>)

    return (
        <div>
            <div id="statcontainer">
            {statrender}
            </div>
            <div id="bannercontainer">
                {renderbanner}
            </div>
            <div id="projectscontainer">
                <ProjectSection projects = {projects}/>
            </div>
        </div>
    )
}