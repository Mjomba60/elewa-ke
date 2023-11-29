import { ProjectInterface } from "./Interface/projectsectinterface"

function SliderComponent({project}:any){
    return(
        <div className="projectmain" key={project.text}>
            <img src={project.url} alt={project.text}/>
        </div>
    )
}

export default function ProjectSection({projects}:any){

    const projectscomponent = projects.map((project: ProjectInterface) => {return <SliderComponent key={project.text} project = {project}/>})

    return (
        <div id="projectscontext">
            <div id="projectsheader">
                <h2>Some of our impact projects</h2>
            </div>
            <div id="projectsbody">
                {projectscomponent}
            </div>
        </div>
    )
}