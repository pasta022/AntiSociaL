import {
  Cancel,
  // EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from "@mui/icons-material";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/authContext";
// import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState(null);
  const desc = useRef();

  // upload/create post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      data.append("file", file);
      try {
        const res = await axios.post("/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        newPost.img = res.data.fileName;
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("/posts/", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-[140px] rounded-xl shadow-custom">
      <div className="p-2">
        <div className="flex items-center">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "/person/10.png"
            }
            alt=""
            className="object-cover w-12 h-12 mr-3 rounded-full"
          />
          <input
            placeholder={`What are you thinking ${user.username}?`}
            className="w-4/5 h-6 border-none focus:outline-none"
            ref={desc}
          />
        </div>
        <hr className="m-5" />
        {file && (
          <div className="px-5 pb-2.5 relative">
            <img
              src={URL.createObjectURL(file)}
              className="object-cover w-full"
              alt=""
            />
            <Cancel
              className="absolute top-0 text-red-600 cursor-pointer right-5 opacity-70"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form
          className="flex items-center justify-between"
          onSubmit={handleSubmit}
        >
          <div className="flex w-3/4">
            <label
              htmlFor="file"
              className="flex items-center mr-2.5 cursor-pointer flex-1 justify-center"
            >
              <PermMedia
                htmlColor="tomato"
                sx={{ fontSize: "18px", marginRight: "3px" }}
              />
              <span className="text-[16px] font-medium">Media</span>
              <input
                style={{
                  display: "none",
                }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            <div className="flex items-center mr-2.5 cursor-pointer flex-1 justify-center">
              <Label
                htmlColor="blue"
                sx={{ fontSize: "18px", marginRight: "3px" }}
              />
              <span className="text-[16px] font-medium">Tag</span>
            </div>
            <div className="flex items-center mr-2.5 cursor-pointer flex-1 justify-center">
              <Room
                htmlColor="green"
                sx={{ fontSize: "18px", marginRight: "3px" }}
              />
              <span className="text-[16px] font-medium">Location</span>
            </div>
            {/* <div className="flex items-center mr-2.5 cursor-pointer">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareOptionIcon"
              />
              <span className="shareOptionText">Feeling</span>
            </div> */}
          </div>
          <button
            className="w-1/4 border-none rounded-md p-1.5 bg-customPrimary cursor-pointer text-white font-medium"
            type="submit"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
