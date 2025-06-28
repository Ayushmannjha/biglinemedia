import VideoSection from "../molecules/VideoSection"
import video from "../../assets/video/video1.mp4"
import ServiceGrid from "../organisms/ServicesGrid"
import CommunityShowcase from "../organisms/CommunityShowcase"
import CityHighlights from "../organisms/ CityHighlights"
import Testimonials from "../organisms/Testimonials"
import FaqSection from "../organisms/FaqSection"
import SuccessStories from "../organisms/SuccessStories"    
import ElectionPage from "./services/electionmangement/ElectionPage"






function Home (){
    return(
        <div>
          <VideoSection
        videoSrc= {video}
         overlayTitle="Discover Local Services and Community News"
        overlaySubtitle="Find information about services, events, and resources available to residents and visitors alike."
      />
     <ServiceGrid/>
      <CommunityShowcase/>
      <CityHighlights/>
      <SuccessStories/>
      <Testimonials/>
      <FaqSection/>
       </div>
       
    )

};

export default Home

