import ChatOnline from "../../components/chatOnline/chatOnline";
import Conversation from "../../components/conversation/conversation";
import Message from "../../components/message/message";
import TopBar from "../../components/topbar/topbar";
import "./messenger.css";

export default function Messenger() {
  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuContainer">
            <input
              type="search"
              placeholder="Search For Friends"
              className="chatMenuSearch"
            />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxContainer">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                placeholder="Enter message here..."
                className="chatBoxBottomMessage"
              ></textarea>
              <button className="chatBoxBottomButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnineContainer">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
