import Slider from "react-slick";

export default function Carousel({children}:any){
    return(
        <>
            <Slider dots = {true}
                    infinite ={true}
                    centerMode = {true}
                    adaptiveHeight = {true}
                    fade = {true}
                    autoplay = {true}
                    autoplaySpeed={2500}>
                    {children}
                </Slider>
        </>
    )
}