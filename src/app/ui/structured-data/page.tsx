"use client";
import { structuredDataSchema } from "@/app/api/structured-data/schema";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import React from "react";

export default function StructuredDataPage() {
  const [input, setInput] = React.useState("");
  const { submit, object, isLoading, error } = useObject({
    api: "/api/structured-data",
    schema: structuredDataSchema,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    submit({ dish: input });
    setInput("");
  };
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {/* heading and description for this screen */}
      <h1 className="text-3xl font-bold mb-4">
        Structured Data Recipe Generator
      </h1>
      {error && <div className="text-red-500 mb-4">{error.message}</div>}
      {isLoading && <div className="mb-4">Loading...</div>}
      {object?.recipe && (
        <>
          <h2 className="text-2xl font-bold mb-4">{object.recipe.name}</h2>
          <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside mb-4">
            {object?.recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient?.amount} of {ingredient?.name}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Steps:</h3>
          <ol className="list-decimal list-inside">
            {object?.recipe?.steps?.map((step, index) => (
              <li key={index} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </>
      )}
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
