import { Outlet } from 'react-router-dom';

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";



function App() {
  return (
    <>
     <Navbar />
      <Outlet />
       
      <Footer />
    </>
  );
}

export default App;
