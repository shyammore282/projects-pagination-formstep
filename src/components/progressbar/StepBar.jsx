import React from "react";

const StepBar = ({ activesteps, setActiveSteps, steps }) => {
  const handlePrev = () => {
    setActiveSteps((prevStep) => Math.max(prevStep - 1, 0));
  };
  const handleNext = () => {
    setActiveSteps((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  // const handleOnSteps = (index) => {
  //   setActiveSteps(index);
  // };
  //(prevStep) => Math.max(prevStep - 1, 0)
  //(prevStep) => Math.min(prevStep + 1, steps.length - 1)

  //   const currentStepWidth = () => {
  //     return `${100 / (steps.length * activesteps)}%`;
  //   };
  console.log(activesteps, "act");
  return (
    <div className=" mt-8">
      <div className=" flex justify-between w-full m-auto border-2 p-1">
        {steps && steps.length > 0
          ? steps.map((step, index) => (
              <div
                key={index}
                // style={{ width: currentStepWidth() }}
                className={`flex flex-grow h-[100%] justify-center items-center font-normal bg-cyan-500 px-5 border-2 ${
                  index <= activesteps ? " bg-orange-700 text-white" : ""
                }`}
              >
                {step}
              </div>
            ))
          : null}
      </div>

      <div className="mt-5">
        <button
          onClick={handlePrev}
          disabled={activesteps === 0}
          className=" bg-red-600 px-3 py-1 mx-1 border-2 text-center text-white capitalize disabled:bg-red-200  disabled:cursor-not-allowed disabled:text-black "
        >
          prev step
        </button>
        <button
          onClick={handleNext}
          disabled={activesteps === steps.length - 1}
          className=" bg-red-600 px-3 py-1 mx-1 border-2 text-white capitalize  disabled:bg-red-200  disabled:cursor-not-allowed disabled:text-black"
        >
          next step
        </button>
      </div>
    </div>
  );
};

export default StepBar;
