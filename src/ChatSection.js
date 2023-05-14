import React, { useState } from "react";
import "./ChatSection.css";
import logo from "./logo.svg";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import EditIcon from "@mui/icons-material/Edit";

const dummyImg =
  "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxZ7sVfFu7RoMdNKgWIhLlnbt4IxqRrIaFzAFLba%3Ds96-c&w=48&q=75";
const message = "Hi I have questiones related to body";

const chatData = [
  {
    message: "Hi I have questiones related to body",
    isUser: true,
  },
  {
    message: "Sure, what questions do you have about the body?",
    isUser: false,
  },
  {
    message:
      "I am hacing pain on lower abdomal while sitting on chair when wearing pants with belt but not with lastic shorts ",
    isUser: true,
  },
  {
    message: `
        It's possible that the pain you're experiencing in your lower abdomen while wearing pants with a belt is related to the pressure of the belt on your abdomen. This pressure may be putting strain on your lower abdominal muscles or causing discomfort in your digestive system.
        
        If you don't experience this pain while wearing elastic shorts, it could be due to the fact that they don't have a tight waistband or belt that is putting pressure on your abdomen.
        
        If the pain persists or is severe, it's a good idea to consult with a doctor or healthcare provider to rule out any underlying medical conditions or injuries that could be causing the pain. In the meantime, you may want to try wearing pants with a looser waistband or adjusting the position of your belt to reduce pressure on your abdomen. Taking breaks from sitting and doing stretches or exercises to strengthen your abdominal muscles can also be helpful.`,
    isUser: false,
  },
];

function ChatSection() {
  const [showEditIcon, setShowEditIcon] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {chatData.map((data) => (
        <div
          className={`d-flex p-4 ${!data.isUser && "bot"}`}
          onMouseEnter={() => setShowEditIcon(true)}
          onMouseLeave={() => setShowEditIcon(false)}
        >
          <div className="logo-section">
            <img alt="user" src={data.isUser ? dummyImg : logo} />
          </div>
          <div className="chat-message">{data.message}</div>
          <div className="button-section">
            {data.isUser ? (
              <EditIcon className={showEditIcon ? "d-inline" : "d-none"} />
            ) : (
              <>
                <ThumbUpOffAltIcon />
                <ThumbDownOffAltIcon />
                <ContentPasteIcon />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatSection;
