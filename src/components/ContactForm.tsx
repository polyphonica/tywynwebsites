"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
        <p className="font-display text-xl text-ink">Message sent.</p>
        <p className="mt-2 text-ink-soft">
          Thanks for getting in touch — I&apos;ll reply as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="mono-label text-ink-soft">
          Name
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
          Email
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
          What kind of project?
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue="simple-site"
          className="border border-rule bg-paper px-4 py-3 text-ink outline-none focus:border-accent"
        >
          <option value="simple-site">A simple site</option>
          <option value="custom-app">A custom app</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="mono-label text-ink-soft">
          Message
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
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-accent">
          Something went wrong sending that — please try again, or email{" "}
          <a href="mailto:hello@tywynwebsites.co.uk" className="underline">
            hello@tywynwebsites.co.uk
          </a>
          .
        </p>
      )}
    </form>
  );
}
