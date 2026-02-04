import React, { useState } from "react";
import { askGemini } from "../../config/gemini";
import "./Main.css";
import { assets } from "../../assets/assets";
import Skeleton from "../Skeleton/Skeleton";

const Main = () => {
//   const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [hasStarted, setHasStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
const [chats, setChats] = useState([]);
const [currentChatId, setCurrentChatId] = useState(null);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);
const [hasStarted, setHasStarted] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

const handleSend = async () => {
  if (!input.trim()) return;

  const prompt = input;
  console.log("PROMPT SENT:", prompt); // 👈 ADD THIS

  setHasStarted(true);
  setLoading(true);
  setResponse("");
  setInput("");

  try {
    const reply = await askGemini(prompt);
    console.log("REPLY RECEIVED:", reply); // 👈 ADD THIS
    setResponse(reply);
  } catch (error) {
    console.error("GEMINI ERROR:", error); // 👈 ADD THIS
    setResponse(error.message || "Gemini error");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="main">
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-1">Gemini</div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌙" : "☀️"}
        </button>

        <div className="nav-2">
          <span className="version">PRO</span>
          <img src={assets.user_icon} alt="user" className="user-icon" />
        </div>
      </div>

      {/* Center content */}
      <div className={`main-center ${hasStarted ? "started" : ""}`}>

        {/* HOME STATE ONLY */}
        {!hasStarted && (
          <>
            <div className="title">
              <img src={assets.gemini_icon} alt="gemini" />
              <span>Hi Tanmay</span>
            </div>
            <h1>Where should we start?</h1>
          </>
        )}

        {/* PROMPT BOX */}
        <div className={`prompt-box ${hasStarted ? "chat-mode" : ""}`}>
          <input
            type="text"
            placeholder="Ask Gemini 3"
            className="prompt-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <div className="prompt-actions">
            <div className="actions-left">
              <img src={assets.plus_icon} alt="add" />
              <div className="tools">
                <img src={assets.setting_icon} alt="tools" />
                <span>Tools</span>
              </div>
            </div>

            <div className="actions-right">
              <span className="pro-text">
                Pro <span className="arrow">▾</span>
              </span>
              <img
                src={assets.send_icon}
                alt="send"
                onClick={handleSend}
              />
            </div>
          </div>
        </div>

        {/* 🔥 OUTPUT (Gemini-style) */}
        {loading && <Skeleton />}

        {!loading && response && (
          <div className="chat-response">
            <img
              src={assets.gemini_icon}
              alt="gemini"
              className="chat-gemini-icon"
            />
            <div className="chat-text">
              {response}
            </div>
          </div>
        )}

        {/* SUGGESTIONS (HOME ONLY) */}
        <div className={`suggestions ${hasStarted ? "hide" : ""}`}>
          <div className="chip">
            <img src={assets.gallery_icon} alt="" />
            <span>Create image</span>
          </div>
          <div className="chip">
            <img src={assets.bulb_icon} alt="" />
            <span>Help me learn</span>
          </div>
          <div className="chip">
            <img src={assets.message_icon} alt="" />
            <span>Write anything</span>
          </div>
          <div className="chip">
            <img src={assets.compass_icon} alt="" />
            <span>Boost my day</span>
          </div>
          <div className="chip">
            <img src={assets.youtube_icon} alt="" />
            <span>Create video</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Main;
