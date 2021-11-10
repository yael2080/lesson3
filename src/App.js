import logo from './logo.svg';
import './App.css';
import Timer from './components/customHookClockItems';
import CaruselImg from './components/caruselImg';
import image1 from './image/image1.jpg';
import image2 from './image/image2.jpg';
import image3 from './image/image3.jpg';
import Hoc from './components/hocClockAndItems';


function App() {
  return (
    <div className="App">
   
      <Timer.Clock></Timer.Clock>
      <Timer.Items></Timer.Items>
      <Hoc.Items></Hoc.Items>
      <Hoc.Clock></Hoc.Clock>
      <CaruselImg>
        <img src={image1}></img>
        <img src={image2} />
        <img src={image3}></img>
      </CaruselImg>
           
    </div>
  );
}

export default App;
