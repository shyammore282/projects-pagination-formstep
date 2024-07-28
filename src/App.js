import React from "react";
import ImgSlider from "./components/imgslider/ImgSlider";
import Pag from "./components/pageswitch/Pag";
import Pagination from "./components/pagination/Pagination";
import DigitalClock from "./components/digital-clock/Digital";
import StepForm from "./components/progressbar/StepForm";

const App = () => {
  return (
    <div>
      <ImgSlider />
      <Pagination />
      <Pag />
      <DigitalClock />
      <StepForm />
    </div>
  );
};

export default App;
