import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";
import LoadingSpinner from '../src/components/atom/LoadingSpinner'; // Assuming you have a loading component

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
