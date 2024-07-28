import React, { useState } from "react";
import StepBar from "./StepBar";

const StepForm = () => {
  const [activeSteps, setActiveSteps] = useState(0);
  const steps = ["step 1", "step 2", "step 3", "step 4", "step 5"];
  return (
    <div className=" flex items-center mt-9 flex-col">
      <h2 className=" capitalize text-xl font-bold">form step progress bar</h2>
      <StepBar
        activesteps={activeSteps}
        setActiveSteps={setActiveSteps}
        steps={steps}
      />
    </div>
  );
};

export default StepForm;
