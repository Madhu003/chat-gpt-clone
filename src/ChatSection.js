import React, { useState } from "react";
import "./ChatSection.css";
import logo from "./logo.svg";
import SendChatIcon from "./send-icon.svg";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import EditIcon from "@mui/icons-material/Edit";
// import SendIcon from "@mui/icons-material/Send";
import DoneIcon from "@mui/icons-material/Done";

import { copyToClipboard } from "./util";
const dummyImg =
  "https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAGNmyxZ7sVfFu7RoMdNKgWIhLlnbt4IxqRrIaFzAFLba%3Ds96-c&w=48&q=75";

const chatDataMain = [
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
  {
    message:
      "no I have issues on lower abdominal while sitting on chair  as I am sitting job",
    isUser: true,
  },
  {
    message: `It's not uncommon to experience lower abdominal discomfort or pain when sitting for extended periods, especially if your job requires you to sit for most of the day. This can be due to a variety of reasons, such as poor posture, muscle imbalances, or digestive issues.

      To help alleviate this discomfort, here are a few things you can try:
      
      Practice good posture: Sit up straight with your shoulders back and down, and your feet flat on the ground. Avoid slouching or hunching over your desk.
      
      Take frequent breaks: Stand up and move around at least once an hour to help reduce the amount of time you spend sitting.
      
      Stretch regularly: Incorporate some simple stretches into your daily routine, such as stretching your hamstrings, hip flexors, and lower back.
      
      Consider ergonomic adjustments: Make sure your chair and desk are set up properly to support good posture and reduce strain on your muscles.
      
      Stay hydrated: Drink plenty of water throughout the day to help keep your digestive system functioning properly.
      
      If your symptoms persist or worsen, it's always a good idea to speak with your doctor or a healthcare professional to rule out any underlying medical conditions.`,
    isUser: false,
  },
];

function ChatSection() {
  const [chatData, setChatData] = useState(chatDataMain);
  const [messageTyped, setMessageTyped] = useState("");

  const sendMessage = (e) => {
    if ((e.type == "keydown" && e.key == "Enter") || e.type == "click") {
      setMessageTyped("");
    }
  };
  return (
    <div className="d-flex flex-column align-items-center w-100">
      {chatData.map((data) => (
        <div
          className={`d-flex p-4 message-box ${!data.isUser && "bot"}`}
          onMouseEnter={() => {
            data.showEditIcon = true;
            setChatData([...chatData]);
          }}
          onMouseLeave={() => {
            data.showEditIcon = false;
            setChatData([...chatData]);
          }}
        >
          <div className="logo-section">
            <img alt="user" src={data.isUser ? dummyImg : logo} />
          </div>
          <div className="chat-message">{data.message}</div>
          <div className="button-section">
            {data.isUser ? (
              <EditIcon className={data.showEditIcon ? "d-inline" : "d-none"} />
            ) : (
              <>
                {data.copyInprocess ? (
                  <DoneIcon />
                ) : (
                  <ContentPasteIcon
                    onClick={() => {
                      data.copyInprocess = true;
                      setChatData([...chatData]);

                      copyToClipboard(data.message);

                      setTimeout(() => {
                        data.copyInprocess = false;
                        setChatData([...chatData]);
                      }, 3000);
                    }}
                  />
                )}
                <ThumbUpOffAltIcon />
                <ThumbDownOffAltIcon />
              </>
            )}
          </div>
        </div>
      ))}
      <div style={{ height: "45px" }}>&nbsp;</div>
      <div className="d-flex align-items-center justify-content-between text-box">
        <input
          placeholder="Send Message."
          value={messageTyped}
          onChange={(e) => setMessageTyped(e.target.value)}
          onKeyDown={sendMessage}
        />
        <img alt="send" src={SendChatIcon} onClick={sendMessage} />
        {/* <SendChatIcon /> */}
      </div>
    </div>
  );
}

export default ChatSection;
