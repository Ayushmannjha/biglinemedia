import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import LoadingSpinner from '../src/components/atom/LoadingSpinner'; // Assuming you have a loading component

function App() {
  return (
    <>
      {/* Navbar and Footer are part of the main layout, not lazy-loaded */}
      <Navbar />
      <main>
        {/* The Suspense component is ESSENTIAL. It wraps the Outlet,
            which is where your lazy-loaded pages will be rendered from your router.
            It shows the 'fallback' UI while the page's code is being downloaded.
        */}
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
