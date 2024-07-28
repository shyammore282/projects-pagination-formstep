import React, { useEffect, useState } from "react";
import { imgs } from "../../data/Data";

const ImgSlider = () => {
  const [images, setImages] = useState([]);
  const [imgSlider, setImgSlider] = useState(0);

  const handlePrevies = () => {
    setImgSlider(imgSlider === 0 ? images.length - 1 : imgSlider - 1);
  };
  const handleNext = () => {
    setImgSlider(imgSlider === images.length - 1 ? 0 : imgSlider + 1);
  };

  useEffect(() => {
    setImages(imgs);
  }, []);
  return (
    <div className=" flex flex-col items-center w-full h-full gap-4">
      <h1 className=" text-center font-bold text-xl">image slider</h1>
      <div className=" flex justify-center items-center w-[400px] h-[350px]  relative my-2">
        <button
          className=" absolute left-2 bg-red-600 px-3 py-1 rounded-lg text-white"
          onClick={handlePrevies}
        >
          previes
        </button>
        {images && images.length
          ? images.map((imgItems, index) => {
              return (
                <img
                  className={imgSlider === index ? " w-full h-full" : "hidden"}
                  key={imgItems.id}
                  src={imgItems.url}
                  alt="images slider"
                />
              );
            })
          : null}
        <button
          className="absolute right-2 bg-red-600 px-3 py-1 rounded-lg text-white"
          onClick={handleNext}
        >
          Next
        </button>
        <span className=" absolute bottom-1">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      imgSlider === index
                        ? " w-2 h-2 mx-1 bg-red-600 rounded-full"
                        : " w-2 h-2 mx-1 bg-black rounded-full"
                    }
                    onClick={() => setImgSlider(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImgSlider;
