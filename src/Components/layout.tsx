import { Outlet } from "react-router-dom";
import HeroSection from "./herosection";
import Footer from "./footer";
import BannerCTA from "./bannercta";

export default function Layout(){
    return (
        <div>
            <HeroSection />
            <Outlet />
            <BannerCTA />
            <Footer />
        </div>
    )
}