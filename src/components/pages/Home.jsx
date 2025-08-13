import VideoSection from "../molecules/VideoSection"
const video ="https://res.cloudinary.com/dcklr65ur/video/upload/v1755095148/video2_vf2kpu.mp4"
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

