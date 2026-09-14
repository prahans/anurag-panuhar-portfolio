"use client";

import Link from "next/link";
import { useState } from "react";

export default function SentryExamplePage() {
  const [isChecking, setIsChecking] = useState(false);
  const [message, setMessage] = useState("");

  async function checkApi() {
    setIsChecking(true);
    setMessage("");

    try {
      const response = await fetch("/api/sentry-example-api", {
        cache: "no-store",
      });

      if (!response.ok) {
        setMessage("The example API could not be reached. Please try again.");
        return;
      }

      setMessage("The example API is responding successfully.");
    } catch {
      setMessage("The request failed. Check your connection and try again.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-3xl font-bold">Sentry example</h1>
      <p>
        Error monitoring has not been configured. You can check that the example
        API responds below.
      </p>
      <button
        type="button"
        onClick={checkApi}
        disabled={isChecking}
        className="rounded-md border px-5 py-3 font-medium disabled:cursor-wait disabled:opacity-60"
      >
        {isChecking ? "Checking..." : "Check example API"}
      </button>
      <p role="status" className="min-h-6">
        {message}
      </p>
      <Link href="/" className="underline underline-offset-4">
        Back to portfolio
      </Link>
    </main>
  );
}
