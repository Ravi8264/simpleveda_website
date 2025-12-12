import React from "react";
import ImageSlider from "./ImageSlider";
import WelcomeSection from "./WelcomeSection";
import CoursesPage from "../../pages/models/Course/CoursePage";
import SimpleVedasSection from "./SimpleVedasSection";
import ScientificSpirituality from "./ScientificSpirituality";
import Testimonials from "./Testimonials"; 
import WisdomQuotes from "./WisdomQuotes"; 

export default function Home()  {
    return (
        <>
        <ImageSlider/>
        <WelcomeSection/>
        <CoursesPage/>
        <SimpleVedasSection/>
        <ScientificSpirituality/>
        <Testimonials/>
        <WisdomQuotes/>
        </>
    )
}