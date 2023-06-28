"use client";
import { useChat } from "ai/react";
import "./globals.css";
import TypewriterEffect from "./components/logo-chat";
import { FaUserCircle, FaRobot } from "react-icons/fa";

export default function SloganGenerator() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-2xl py-24 flex flex-col stretch">
      <div className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          <TypewriterEffect text="Nayochat - El futuro está aquí." speed={80} />
        </span>
      </div>
      {messages.map((message) => {
        const isBot = message.role !== "user";
        return (
          <div key={message.id} className="flex items-start mb-6">
            <div
              className={`flex items-center justify-center h-10 w-10 rounded-full text-white mr-2 transition-colors duration-300`}
              style={{ backgroundColor: isBot ? "#6D28D9" : "#4B5563" }}
            >
              {isBot ? <FaRobot size="1.5em" /> : <FaUserCircle size="1.5em" />}
            </div>
            <div
              className={`px-4 py-2 rounded-xl ${
                isBot ? "bg-purple-600" : "bg-gray-500"
              } text-white`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        );
      })}

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center p-4 mt-8 w-full"
      >
        <div className="relative w-full">
          <input
            className="w-full border border-gray-300 rounded-3xl py-3 pl-4 pr-16 text-lg focus:outline-none"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe cualquier cosa que le quieras decir a Nayobot."
          />

          <button className="absolute top-1/2 right-6 transform -translate-y-1/2 flex items-center justify-center rounded-full bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-gradient-to-r focus:outline-none text-white font-bold shadow-md w-10 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-1 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
