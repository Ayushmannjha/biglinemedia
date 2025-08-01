import VideoSection from "../molecules/VideoSection"
import video from "../../assets/video/video1.mp4"
import ServiceGrid from "../organisms/ServicesGrid"
import CommunityShowcase from "../organisms/CommunityShowcase"
import CityHighlights from "../organisms/ CityHighlights"
import Testimonials from "../organisms/Testimonials"
import FaqSection from "../organisms/FaqSection"
import SuccessStories from "../organisms/SuccessStories"    







function Home (){
    return(
        <div>
          <VideoSection
        video= {video}
        
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

