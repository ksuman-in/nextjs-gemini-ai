import React from "react";
import Link from "next/link";

const uiComponents = [
  { name: "Chat", path: "/ui/chat" },
  { name: "Completion", path: "/ui/completion" },
  { name: "Stream", path: "/ui/stream" },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Google Gemini AI Integration</h1>
      <div className="max-w-xl bg-white border rounded p-6 shadow mb-6">
        <p className="mb-4">
          This Next.js project demonstrates integration with Google Gemini AI
          using the <code>@ai-sdk/google</code> SDK.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Powered by React 19, TypeScript, and Tailwind CSS.</li>
          <li>AI features are enabled via Google Gemini API.</li>
          <li>API routes and UI components are modular and easy to extend.</li>
        </ul>
        <p>
          To get started, configure your API key in <code>.env.local</code> and
          explore the code in <code>src/app</code>.
        </p>
      </div>
      <nav className="max-w-xl w-full bg-white border rounded p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">UI Components</h2>
        <ul className="flex flex-col gap-3">
          {uiComponents.map((component) => (
            <li key={component.path}>
              <Link
                href={component.path}
                className="text-blue-600 hover:underline"
              >
                {component.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
