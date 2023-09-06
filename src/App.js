import Prenavbar from "./components/Prenavbar";
import "./App.css"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router , Routes,Route,} from "react-router-dom"
import Slider from "./components/Slider";
// import { banner } from "./data/data.json"
import data from "./data/data.json"
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccesoriesMenu from "./components/HotAccesoriesMenu";
import Hotaccessories from "./components/Hotaccessories";
import What from "./components/What";
import Productreviews from "./components/Productreviews";
import Video from "./components/Video";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


function App() {
  return (
  
    <Router>
    <Prenavbar/>
    <Navbar/>
    <Slider start={data.banner.start}/>
    <Offers offer= {data.offer}/>
    <Heading text= "Star Products"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text= "Hot Accesories"/>
    <HotAccesoriesMenu/>


    <Routes>
      <Route path='/music' element={<Hotaccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>} />

      <Route path="smartDevice" element={<Hotaccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>

      <Route path="home" element={<Hotaccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>

      <Route path="lifestyle" element={<Hotaccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>

      <Route path="mobileAccesories" element={<Hotaccessories mobileAccesories={data.hotAccessories.mobileAccessories} mobileAccesoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
    </Routes>
    <Heading text="PRODUCT REVIEWS"/>
    <Productreviews productReviews={data.productReviews}/>
    <Heading text="Videos"/>
    <Video videos={data.videos}/>
    <Heading text="In the press"/>
    <Banner banner={data.banner}/>
    <Footer footer={data.footer}/>
    </Router>
    
    
   
  );
}

export default App;


