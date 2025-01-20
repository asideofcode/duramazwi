"use client";

import { useState } from "react";

export default function SuggestPage() {
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | "" }>({ text: "", type: "" });

  return (
    <>
      <h1 className="underline theme-text-h1 text-xl font-bold mb-4">Make a suggestion</h1>
      <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
        We rely on community contributions to ensure our dictionary is accurate
        and comprehensive. Share your suggestions for new words, corrections, or
        additional details below.
      </p>

       {message.text && (
        <div
          className={`mb-4 p-4 rounded ${
            message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}
      <SuggestionForm
        onSubmit={async (suggestion, resetForm) => {
          setMessage({ text: "Submitting your suggestion...", type: "" });
          try {
            const response = await fetch("/api/suggestions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(suggestion),
            });

            if (response.ok) {
              setMessage({ text: "🎉 Thank you! Your suggestion was submitted successfully. Our team will review it, and we’ll inform you of the outcome via email.", type: "success" });
              resetForm(); // Clear the form after success
            } else {
              const errorData = await response.json();
              setMessage({
                text: `We encountered an error 😭... ${errorData.message || "An unknown error occurred."}`,
                type: "error",
              });
            }
          } catch (error) {
            setMessage({
              text: "An error occurred while submitting your suggestion. Please try again.",
              type: "error",
            });
          }
        }}
      />
    </>
  );
}

function SuggestionForm({ onSubmit }: any) {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [example, setExample] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const suggestion = {
      word,
      definition,
      example,
      contributorEmail: email,
    };

    // Send the suggestion to the API
    await onSubmit(suggestion, () => {
      setWord("");
      setDefinition("");
      setExample("");
      setEmail("");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 rounded ">
      <div className="mb-4">
        <label className="block font-medium">Word</label>
        <input
          type="text"
          value={word}
          placeholder="E.g. Chikafu"
          onChange={(e) => setWord(e.target.value)}
          className="theme-input w-full p-2 rounded peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Definition/s</label>
        <textarea
          value={definition}
          placeholder="Provide the definition of the word, including any relevant details like part of speech (e.g. verb/noun) etc."
          onChange={(e) => setDefinition(e.target.value)}
          className="theme-input w-full p-2 rounded peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Example/s</label>
        <textarea
          value={example}
          placeholder="Provide an example sentence using the word, if applicable."
          onChange={(e) => setExample(e.target.value)}
          className="theme-input w-full p-2 rounded peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium">Your Email</label>
        <input
          type="email"
          value={email}
          placeholder="Your email address (optional)"
          onChange={(e) => setEmail(e.target.value)}
          className="theme-input w-full p-2 rounded peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send it over!
      </button>
    </form>
  );
}
