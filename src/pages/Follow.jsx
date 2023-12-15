import React from "react";
import Friends from "../components/Friends";

const Follow = () => {
  return (
    <div className="w-full">
      <div className="p-3 text-lg font-bold text-customPrimary">
        {window.location.pathname.includes("following")
          ? "Following"
          : "Followers"}
      </div>
      <Friends />
    </div>
  );
};

export default Follow;
