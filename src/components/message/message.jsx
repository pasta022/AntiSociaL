import "./message.css";

export default function Message({ own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src={PF + "tempImg.jpg"} alt="" className="messageTopImg" />
        <p className="messageTopText">Hello this is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
