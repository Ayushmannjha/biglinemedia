import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LoadingSpinner from '../components/atom/LoadingSpinner'; // A fallback loading component

// --- LAZY-LOADED PAGE COMPONENTS ---
// Each page is now imported dynamically, which creates a separate code chunk for it.
const Home = lazy(() => import('../components/pages/Home'));
const ElectionPage = lazy(() => import('../components/pages/services/electionmangement/ElectionPage'));
const VideoProduction = lazy(() => import('../components/pages/services/videoproduction/VideoProduction'));
const WebsiteDevelopment = lazy(() => import('../components/pages/services/webdevelpment/WebDev3DCity'));
const SocialMediaManagement = lazy(() => import('../components/pages/services/socialmediamanagement/SocialMediaManagement'));
const JoinOurHand = lazy(() => import('../components/pages/JoinOurHand'));
const About = lazy(() => import('../components/pages/AboutUs'));
const Team = lazy(() => import('../components/pages/Team'));
const Contact = lazy(() => import('../components/pages/Contact'));
const Blog = lazy(() => import('../components/pages/Blog'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        // Each route's element now points to a lazy-loaded component.
        // The Suspense component in App.jsx will handle the loading state.
        { path: '', element: <Home /> },
        { path: 'services/election-management', element: <ElectionPage /> },
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
      v7_startTransition: true, // Preserving your existing config
    },
  }
);

export default router;