export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
          London Private Chef Directory
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Discover private chefs in London for unforgettable dining experiences.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          ChefConnect London helps customers discover independent private chefs
          for dinner parties, events, private dining, and at-home food
          experiences.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/chefs"
            className="rounded-full bg-stone-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Browse Chefs
          </a>

          <a
            href="/register-chef"
            className="rounded-full border border-stone-300 px-8 py-4 text-sm font-semibold text-stone-900 transition hover:border-stone-900"
          >
            Apply as a Chef
          </a>
        </div>
      </section>
    </main>
  );
}