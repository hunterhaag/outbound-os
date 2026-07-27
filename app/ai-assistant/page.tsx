"use client";

import { useState } from "react";

export default function AIAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  function generateResponse() {
    if (!prompt) return;

    setResponse(
      `Research summary for "${prompt}":

• Company overview
• Industry information
• Potential business challenges
• Recommended outreach angle
• Suggested email opener

(Connected AI research will be added next.)`
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        AI Assistant
      </h1>

      <p className="text-gray-600 mt-2">
        Your sales research and outreach copilot.
      </p>

      <div className="mt-8 bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold">
          Ask your sales assistant
        </h2>

        <textarea
          className="border rounded-lg p-4 w-full mt-4"
          rows={5}
          placeholder="Example: Research Acme Corporation and suggest an outreach strategy"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={generateResponse}
          className="mt-4 bg-gray-900 text-white px-5 py-3 rounded-lg"
        >
          Generate Research
        </button>
      </div>

      {response && (
        <div className="mt-6 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold">
            AI Output
          </h2>

          <p className="mt-4 whitespace-pre-line text-gray-700">
            {response}
          </p>
        </div>
      )}
    </div>
  );
}