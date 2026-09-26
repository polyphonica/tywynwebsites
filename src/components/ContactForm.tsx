"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Language = "en" | "de";

const copy = {
  en: {
    sent: "Message sent.",
    thanks: "Thanks for getting in touch — I'll reply as soon as I can.",
    name: "Name",
    email: "Email",
    projectType: "What kind of project?",
    starterSite: "A starter site",
    customApp: "A custom app",
    notSure: "Not sure yet",
    message: "Message",
    sending: "Sending…",
    send: "Send message",
    error: "Something went wrong sending that — please try again, or email",
  },
  de: {
    sent: "Nachricht gesendet.",
    thanks: "Vielen Dank für Ihre Nachricht — ich melde mich so bald wie möglich.",
    name: "Name",
    email: "E-Mail",
    projectType: "Um welche Art von Projekt geht es?",
    starterSite: "Eine Starter-Website",
    customApp: "Eine individuelle Web-Anwendung",
    notSure: "Noch nicht sicher",
    message: "Nachricht",
    sending: "Wird gesendet…",
    send: "Nachricht senden",
    error:
      "Beim Senden ist etwas schiefgegangen — bitte versuchen Sie es erneut oder schreiben Sie an",
  },
};

export default function ContactForm({
  language = "en",
}: {
  language?: Language;
}) {
  const t = copy[language];
  const [status, setStatus] = useState<Status>("idle");
  const loadedAt = useRef(0);

  useEffect(() => {
    loadedAt.current = Date.now();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      elapsedMs: Date.now() - loadedAt.current,
      language,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-frame p-8">
        <p className="font-display text-xl text-ink">{t.sent}</p>
        <p className="mt-2 text-ink-soft">{t.thanks}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mono-label text-ink-soft">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-rule bg-paper px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="mono-label text-ink-soft">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border border-rule bg-paper px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="projectType" className="mono-label text-ink-soft">
          {t.projectType}
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue="starter-site"
          className="border border-rule bg-paper px-4 py-3 text-ink outline-none focus:border-accent"
        >
          <option value="starter-site">{t.starterSite}</option>
          <option value="custom-app">{t.customApp}</option>
          <option value="not-sure">{t.notSure}</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mono-label text-ink-soft">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="border border-rule bg-paper px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary self-start disabled:opacity-60"
      >
        {status === "submitting" ? t.sending : t.send}
      </button>

      {status === "error" && (
        <p className="text-accent">
          {t.error}{" "}
          <a href="mailto:info@tywynwebsites.co.uk" className="underline">
            info@tywynwebsites.co.uk
          </a>
          .
        </p>
      )}
    </form>
  );
}
