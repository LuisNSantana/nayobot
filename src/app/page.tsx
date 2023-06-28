"use client";
import { useChat} from "ai/react";

export default function SloganGenerator() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Nayochat
        </span>{" "}
        IA progresiva.
      </h1>
      {messages.map((message) => {
        const isBot = message.role !== "user";
        return (
          <div key={message.id}>
            <p>
              {isBot ? "🤖" : "🧑‍🦲"}
              <span
                className={`pl-2 ${
                  isBot ? "text-yellow-500" : "text-blue-200"
                }`}
              >
                {message.content}
              </span>
            </p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded-full mb-8 shadow-xl p-4"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe cualquier cosa que le quieras decir a Nayobot."
        />
      </form>
    </div>
  );
}
