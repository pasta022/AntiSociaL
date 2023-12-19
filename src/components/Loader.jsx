import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-64 mt-5">
      <Triangle
        height={80}
        width={80}
        radius={5}
        color="rgb(146, 239, 146)"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Loader;
