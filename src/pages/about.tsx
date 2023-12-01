import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import History from "../Components/History";
import AboutHeader from "../Components/aboutusheader";
import CultureValues from "../Components/culturenvalues";
import Slidebtn from "../Components/slidectabtn";
import TeamManagement from "../Components/teamnmanagement";

export default function About(){
    return (
        <div id="about">
            <AboutHeader />
            <TeamManagement />
            <CultureValues />
            <div className="bannermain">
                <div className="bannercontext">
                <div className="banner-img" style={{height: "75vh"}}>
                    <MapContainer center={[-1.25, 36.80]} zoom={13} scrollWheelZoom={false} style={{height: "inherit"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[-1.25, 36.80]}>
                            <Popup className="popMarker">
                                The Promenade, 19 General
                                <br />
                                Mathenge Rd
                                <br />
                                Nairobi Kenya

                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className="banner-text">
                    <h1>How to get there</h1>
                    <p>Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.</p>
                    <p> Not in town? Teams, Meets or Zoom are our second name. Book an appointment today via <a href="mailto:contact@elewa.ke">contact@elewa.ke</a></p>
                    <Slidebtn text = {"Get directions"}/>
                </div>
                </div>
            </div>
            <History />
        </div>
    )
}