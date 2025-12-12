import FirstNavbar from "../Compenents/FirstNavBar/FirstNavbar";
import Navbar from "../Compenents/Navbar/Navbar"; 
import Home from "../Compenents/HomePage/Home";

export default function MainLayout() {
  return (
    <>
      <FirstNavbar />
      <Navbar />
      <Home/>
    </>
  );
}