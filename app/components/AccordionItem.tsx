"use client";

import { useState } from "react";

export default function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 font-medium flex justify-between items-center
                   cursor-pointer transition-colors hover:bg-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`px-4 text-sm text-gray-300 text-left transition-all duration-300 ${
          open
            ? "max-h-40 py-2 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
}
