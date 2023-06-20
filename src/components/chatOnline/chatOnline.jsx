import "./chatOnline.css";

export default function ChatOnline() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img src={PF + "tempImg.jpg"} alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Jane Dome</span>
      </div>
    </div>
  );
}
