import { CardImgTxtInterface } from "../Components/Interface/cardimgtxtinterface";
import { ProjectInterface } from "../Components/Interface/projectsectinterface";

const projects: ProjectInterface[] = [
    {url: "https://tinyurl.com/mtrrm78j", text: "https://www.msadc.com"},
    {url: "https://tinyurl.com/mwvbv3ry", text: "https://www.spotlights.be"},
    {url: "https://tinyurl.com/4w7wnwus", text: "https://www.kenya-scouts.com"},
    {url: "https://tinyurl.com/yc6e8kwx", text: "https://www.wwf.com"},
    {url: "https://tinyurl.com/2mw3erk3", text: "https://www.vvob.com"},
    {url: "https://tinyurl.com/3n9ncnxp", text: "https://www.farmbetter.io"},
    {url: "https://tinyurl.com/5apzwzjn", text: "https://www.itvolk.be"},
    {url: "https://tinyurl.com/5xfrf796", text: "https://www.hoplit.be"},
    {url: "https://tinyurl.com/5xfrf796", text: "https://www.giz.com"},
    {url: "https://tinyurl.com/36u39kxp", text: "https://www.enabel.com"},
    {url: "https://tinyurl.com/598v9s5f", text: "https://www.s4y.be"},
    {url: "https://tinyurl.com/ytfx8rca", text: "https://www.adc.com"}
]

const allbanner : CardImgTxtInterface[] = [
    {color:"white",bgcolor: "black", img: {src: "https://tinyurl.com/yc8jc6jd", order: "1"}, text: {order: "2", head: "(Social) business for the win", main: "With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."}},
    {color: "black",bgcolor: "#ECECEC", img: {src: "https://tinyurl.com/4s9esyw4", order: "2"}, text: {order: "1", head: "A cooperative mindset",main: "Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active."}},
    {color:"black", bgcolor: "white", img: {src: "https://tinyurl.com/ye27rdy6", order: "1"}, text: {order: "2", head: "Beyond business",main: ["We channel a good amount of our resources into giving back.", "Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers", "These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."]}},
    {color:"white",bgcolor: "black", img: {src: "https://tinyurl.com/3xuaw44w", order: "2"}, text: {order: "1", head: "Open knowledge",main: ["What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships.", "We build for today, with a lens on tomorrow."]}}
]

const allstats = [
    {name : 733, denominator: "+", definition: "People trained"},
    {name:733, denominator: "k", definition: "careers launched"},
    {name:200, denominator: "+", definition: "Projects finished"},
    {name:56, denominator: "", definition: "Investors"}
]

export {projects, allbanner, allstats}