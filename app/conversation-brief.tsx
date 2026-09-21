"use client";

import { useState, type FormEvent } from "react";
import type { Language } from "./site-content";
import { whatsappLink } from "./contact";

type Props = {
  lang: Language;
  label: string;
  placeholder: string;
  options: readonly string[];
  contextLabel: string;
  sendLabel: string;
};

export function ConversationBrief({ lang, label, placeholder, options, contextLabel, sendLabel }: Props) {
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = lang === "pt"
      ? `O que está em jogo: ${topic || "A definir"}\n\nContexto: ${context || "Prefiro explicar na conversa."}`
      : `What is at stake: ${topic || "To be defined"}\n\nContext: ${context || "I would rather explain it in the conversation."}`;
    window.location.href = whatsappLink(lang, `${lang === "pt" ? "Olá, Romulo. Vim pelo site da RARVOR." : "Hello, Romulo. I found RARVOR through the website."}\n\n${body}`);
  }

  return <form className="conversation-brief" onSubmit={submit}>
    <label htmlFor={`conversation-topic-${lang}`}>{label}</label>
    <div className="conversation-fields">
      <select id={`conversation-topic-${lang}`} value={topic} onChange={event => setTopic(event.target.value)} required>
        <option value="" disabled>{placeholder}</option>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      <input aria-label={contextLabel} placeholder={contextLabel} value={context} onChange={event => setContext(event.target.value)} />
    </div>
    <button type="submit">{sendLabel}<span aria-hidden="true">↗</span></button>
  </form>;
}
