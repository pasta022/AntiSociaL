import React from "react";
import { Construction, KeyboardBackspace } from "@mui/icons-material";
import { ClimbingBoxLoader } from "react-spinners";

const LazyPage = () => {
  const goBack = () => {
    window.history.back();
    console.log("clicked");
  };
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <div className="flex flex-col items-center justify-center w-full gap-1 p-5 text-customPrimary">
        <span className="text-center">
          Hey Champ! Page is under construction
          <Construction /> <span className="block">Hold on!!</span>
        </span>
        <ClimbingBoxLoader color="rgb(146, 239, 146)" />
        <div onClick={goBack} className="flex items-center cursor-pointer">
          {/* <button> */}
          <KeyboardBackspace /> <p className="ml-2">Click to return</p>
          {/* </button> */}
        </div>
      </div>
    </div>
  );
};

export default LazyPage;
