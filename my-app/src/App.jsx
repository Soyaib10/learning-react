import { useState } from 'react'
import reactLogo from './assets/react-logo.png';
import './App.css'

const fName = "soyaib"
const lName = "zihad"

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <p>Created {fName + " " + lName}</p>
      
      <img 
        src="https://images.pexels.com/photos/63764/pexels-photo-63764.jpeg" 
        alt="Lamborghini Aventador" 
        className="image-style" 
      />
      
      <img 
        src="https://images.pexels.com/photos/192130/pexels-photo-192130.jpeg" 
        alt="Car Wallpapers" 
        className="image-style" 
      />
      
      <img 
        src="https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/app/thread/20231112/4318020878898572541/1462181598320394244/1462181598320394244.jpeg?x-ocs-process=image/format,webp/resize,w_720" alt="Car Wallpapers" 
        className="image-style" 
      />
      
      <p>Copyright ©{currentYear}</p>
    </div>
  );
}

export default App;
