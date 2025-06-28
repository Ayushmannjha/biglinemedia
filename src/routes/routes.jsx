// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';


// Pages
import Home from "../components/pages/Home";
import ElectionPage from '../components/pages/services/electionmangement/ElectionPage';
import VideoProduction from '../components/pages/services/videoproduction/VideoProduction';
import WebsiteDevelopment from '../components/pages/services/webdevelpment/WebDev3DCity';
import SocialMediaManagement from '../components/pages/services/socialmediamanagement/SocialMediaManagement';
import JoinOurHand from '../components/pages/JoinOurHand';
import About from '../components/pages/AboutUs';
import Team from '../components/pages/Team';
import Contact from '../components/pages/Contact';
import Blog from '../components/pages/Blog';

//import { Home } from 'lucide-react';


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '', element: <Home /> },  
        { path: 'services/election-management', element:  <ElectionPage /> },
        { path: 'services/video-production', element: <VideoProduction /> },
        { path: 'services/web-development', element: <WebsiteDevelopment /> },
        { path: 'services/social-media-management', element: <SocialMediaManagement /> },
        { path: 'join', element: <JoinOurHand /> },
        { path: 'about', element: <About /> },
        { path: 'team', element: <Team /> },
        { path: 'contact', element: <Contact /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true, // ✅ enable transition now
    },
  }
);

export default router;
