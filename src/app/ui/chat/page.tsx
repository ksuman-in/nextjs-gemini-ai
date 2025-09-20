"use client";
import { useChat } from "@ai-sdk/react";
import React from "react";

export default function ChatPage() {
  const [input, setInput] = React.useState("");
  const { messages, sendMessage, status, error, stop } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    sendMessage({ text: input });
    setInput("");
  };
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {error && <div className="text-red-500 mb-4">{error.message}</div>}
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-2 my-1 rounded ${
            message.role === "user"
              ? "bg-blue-100 self-end"
              : "bg-gray-200 self-start"
          }`}
        >
          <strong>{message.role === "user" ? "You" : "AI"}: </strong>
          {message.parts.map((part, index) => {
            switch (part.type) {
              case "text":
                return (
                  <span className="whitespace-pre-wrap" key={index}>
                    {part.text}
                  </span>
                );
              default:
                return null;
            }
          })}
        </div>
      ))}
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 shadow-lg"
      >
        <div className="flex gap-2">
          <input
            className="flex-1 dark:bg-zinc-800 p-2 border border-zinc-300 dark:border-zinc-700 rounded shadow-xl"
            placeholder="How can I help you?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {isLoading ? (
            <button
              type="button"
              onClick={stop}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
