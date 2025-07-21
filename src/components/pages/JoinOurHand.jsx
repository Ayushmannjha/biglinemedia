import { useState } from "react"
import ServiceSelector from "../../components/organisms/contact/ServiceSelector"
import ContactFormsSection from "../../components/organisms/contact/ContactFormsSection"
import ContactDetails from "../../components/organisms/contact/ContactDetails"
import { services, serviceConfigs } from "../../assets/data/contact/Contacts.js"

function JoinOurHand(params) {

  const [activeService, setActiveService] = useState('general');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <ServiceSelector services={services} activeService={activeService} setActiveService={setActiveService} />

      {/* Contact Forms Section Component */}
      <ContactFormsSection activeService={activeService} serviceConfigs={serviceConfigs} />

      {/* Contact Details Component */}
      <ContactDetails />

    </div>
  );
}

export default JoinOurHand;