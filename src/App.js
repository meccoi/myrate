import './App.scss';
// import Bedio from './video/screen-recordingss.mp4'
import Navbar from './navbar';
import Con from './cont';
import Specs from './specs';
import Shopee from './shopee';

import { FaBars } from "react-icons/fa";


function App() {

  function navShow(){
    const navbar = document.querySelector('.nav-content');
    const faBars = document.querySelector('.fabars');
    const naav = document.querySelector('nav');

    naav.style.zIndex = '2';
    navbar.style.opacity = '1';
    navbar.style.left = '0';
    faBars.style.zIndex = '1';
  }

  return (
    <div className="App">
      <Navbar/>
      <FaBars onClick={navShow} className='fabars'/>
      <div className="homepage">
      <div className="front0">
        <div className="front0-content h-full">
          <h1>Instant, scalable #nocode backend + team admin.</h1>
          <label htmlFor="">Build a scalable no-code backend and collaborative database admin as easily as a spreadsheet. Use our hosted option or bring your own Postgres database.</label>
          <div className="front0-btns">
            <button className='btn text-white px-9 p-6 pb-7 rounded-full'>👉 Get Early Access </button>
            <button className='btn p-6 pb-7 rounded-full'>Learn more 👇</button>
          </div>
        </div>
      </div>

    <div className="bottom">
      <div className="bottom-content">
        <img src="https://uploads-ssl.webflow.com/6317bbe57f4063bbb4af838c/631a79ee7865a002858080f3_Screen%20Shot%202022-09-08%20at%205.25.05%20PM.png" alt="" />
        <Con/>
        <Specs/>
        <Shopee/>
      </div>
    </div>

    </div>
    </div>
  );
}

export default App;


{/* <video autoPlay muted loop width={500}>
<source src={Bedio} type='video/mp4'/>
</video> */}