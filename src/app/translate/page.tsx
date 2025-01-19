"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TranslatePage() {
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
    <>
      <div className="mb-6">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Enter text in Shona or English and get the translation.
        </p>
      </div>
      <form onSubmit={handleTranslate} className="mb-6">
        <div className="theme-input flex">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-24 p-4 border-none rounded-md bg-surface outline-none placeholder:text-sm theme-text-sub1"
            placeholder="Enter text to translate..."
          />
        </div>

        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-gray-200 dark:text-gray-300 rounded-md hover:bg-blue-500"
        >
          Translate
        </button>
      </form>
      {status === "loading" && (
        <p className="mt-2 text-gray-800 dark:text-gray-300">Translating...</p>
      )}
      {status === "success" && (
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
          <h2 className="theme-text-sub1 text-lg font-bold">Translation</h2>
          <p className="mt-2 text-gray-800 dark:text-gray-300">
            {translatedText}
          </p>
        </div>
      )}
      {status === "failed" && (
        <p className="text-red-500">
          Failed to get translation. Please try again.
        </p>
      )}
    </>
  );
}
