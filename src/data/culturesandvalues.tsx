interface Culture{
    img:string,
    title: string,
    text: string
}

const cultures : Culture[] = [
    {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", title: "Cooperative", text: " One for all ,all for one! We have a cooperative and open mindset. If one of us grows, all will follow. "},
    {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png", title: "Ownership", text: " We are dependable and honour our commitments. When things don't go as planned, as they sometimes do, we communicate early to avoid catastrophe. "},
    {img: "https://static.thenounproject.com/png/1721983-200.png", title: "Detail", text: ` We are a "Centre of Excellence" as per global standards. We only compete with ourselves, but find in the global standard our only worthy rival. `},
    {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png", title: "Empathy", text: " We are nothing without people, and people have different contexts and needs. Our organization acts as a safe haven and shield for those in need. "},
    {img: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png", title: "Transparency", text: ` Transparency, an open mind, and an open heart hold our organization together. We commit to and promote full transparency to ourselves, our stakeholders, and our beneficiaries. 
    We furthermore invest heavily in open-source and open-data projects, as true potential lies everywhere. Not just within. `}
]

export {cultures}
export type {Culture}