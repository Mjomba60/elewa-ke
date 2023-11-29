export default function CardImgTxt({cardtext}:any){

    const body = cardtext.text.main;
    const renderbody = typeof body !== "string" ? body.map((main:string) => {return <p key={main}>{main}</p>}) : <p>{body}</p>;

    return (
    <div className="bannermain" style={{backgroundColor: `${cardtext.bgcolor}`, color: `${cardtext.color}`}}>
        <div className="bannercontext">
            <img className="banner-img" src={cardtext.img.src} alt="" style={{order: `${cardtext.img.order}`}}/>
            <div className="banner-text" style={{order: `${cardtext.text.order}`}}>
                <h1>{cardtext.text.head}</h1>
                {renderbody}
            </div>
        </div>
    </div>
    )
}