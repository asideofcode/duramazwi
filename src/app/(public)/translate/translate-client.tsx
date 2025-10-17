"use client";

import React, { useState } from "react";

export default function TranslateClient() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "failed" | "success"
  >("idle");

  const handleTranslate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");
    setTranslatedText(""); // Reset the translated text

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: inputText }),
      });

      if (response.ok) {
        const { translation } = await response.json();
        setTranslatedText(translation);
        setStatus("success");
      } else {
        setStatus("failed");
        console.error("Translation failed");
      }
    } catch (error) {
      console.error("Error during translation:", error);
      setStatus("failed");
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Translate
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Enter text in Shona or English and get the translation.
        </p>
      </div>

      {/* Translation Form */}
      <form onSubmit={handleTranslate} className="mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Text to translate
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter text to translate..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={!inputText.trim() || status === "loading"}
          title={!inputText.trim() ? "Enter text to translate" : status === "loading" ? "Translation in progress..." : "Translate text"}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-md transition-colors font-medium"
        >
          {status === "loading" ? "Translating..." : "Translate"}
        </button>
      </form>

      {/* Results */}
      {status === "loading" && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
          <p className="text-blue-700 dark:text-blue-300">
            Translating your text...
          </p>
        </div>
      )}

      {status === "success" && translatedText && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
            Translation
          </h2>
          <p className="text-green-700 dark:text-green-300 whitespace-pre-wrap">
            {translatedText}
          </p>
        </div>
      )}

      {status === "failed" && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-700 dark:text-red-300">
            Failed to get translation. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}
