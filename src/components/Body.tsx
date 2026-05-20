import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Body = () => {
  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Body;
