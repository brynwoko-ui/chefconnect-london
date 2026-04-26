"use client";

import { useState } from "react";

export default function RegisterChefPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
        <section className="mx-auto max-w-3xl">
          <a href="/" className="text-sm font-semibold text-amber-700">
            ← Back to home
          </a>

          <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Application received
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              Thanks for applying to join ChefConnect London.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              This Version 1 form does not save applications to a database yet.
              In a future version, chef applications will be stored and reviewed
              before profiles are published.
            </p>

            <a
              href="/chefs"
              className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Browse categories
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-amber-700">
          ← Back to home
        </a>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Join as a chef
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Apply to be listed on ChefConnect London.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            ChefConnect London is building a curated directory of London-based
            private chefs. This form is for chefs who want to be considered for
            future listings.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-6 rounded-3xl bg-white p-8 shadow-sm"
        >
          <div>
            <label className="text-sm font-semibold" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              required
              className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              placeholder="Your full name"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="phone">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="07..."
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold" htmlFor="area">
                London area
              </label>
              <input
                id="area"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="e.g. Hackney, Brixton, Chelsea"
              />
            </div>

            <div>
              <label className="text-sm font-semibold" htmlFor="experience">
                Years of experience
              </label>
              <input
                id="experience"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                placeholder="e.g. 5 years"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold" htmlFor="cuisines">
              Cuisine specialities
            </label>
            <input
              id="cuisines"
              type="text"
              required
              className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              placeholder="e.g. African, Caribbean, Italian, Plant-Based"
            />
          </div>

          <div>
            <label className="text-sm font-semibold" htmlFor="bio">
              Short bio
            </label>
            <textarea
              id="bio"
              required
              rows="5"
              className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              placeholder="Tell customers about your cooking style, background, and private dining experience."
            />
          </div>

          <div>
            <label className="text-sm font-semibold" htmlFor="link">
              Instagram or website link
            </label>
            <input
              id="link"
              type="url"
              className="mt-2 w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              placeholder="https://..."
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Submit application
          </button>
        </form>
      </section>
    </main>
  );
}