const categories = {
  british: {
    name: "British",
    description:
      "Approved British private chef profiles will appear here as ChefConnect London grows.",
  },
  indian: {
    name: "Indian",
    description:
      "Approved Indian private chef profiles will appear here as ChefConnect London grows.",
  },
  caribbean: {
    name: "Caribbean",
    description:
      "Approved Caribbean private chef profiles will appear here as ChefConnect London grows.",
  },
  african: {
    name: "African",
    description:
      "Approved African private chef profiles will appear here as ChefConnect London grows.",
  },
  italian: {
    name: "Italian",
    description:
      "Approved Italian private chef profiles will appear here as ChefConnect London grows.",
  },
  "plant-based": {
    name: "Plant-Based",
    description:
      "Approved plant-based private chef profiles will appear here as ChefConnect London grows.",
  },
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const selectedCategory = categories[category];

  if (!selectedCategory) {
    return (
      <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
        <section className="mx-auto max-w-4xl">
          <a href="/chefs" className="text-sm font-semibold text-amber-700">
            ← Back to categories
          </a>

          <h1 className="mt-8 text-4xl font-bold">Category not found</h1>

          <p className="mt-4 text-stone-600">
            This chef category does not exist yet.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
      <section className="mx-auto max-w-5xl">
        <a href="/chefs" className="text-sm font-semibold text-amber-700">
          ← Back to categories
        </a>

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Coming Soon
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {selectedCategory.name} Private Chefs in London
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {selectedCategory.description}
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
            <h2 className="text-xl font-bold">
              Future chef profiles will include:
            </h2>

            <ul className="mt-4 space-y-2 text-stone-600">
              <li>Chef name and London area</li>
              <li>Short bio and years of experience</li>
              <li>Ratings and customer feedback</li>
              <li>Images or videos of previous dishes</li>
              <li>Contact details or enquiry option</li>
            </ul>
          </div>

          <a
            href="/register-chef"
            className="mt-8 inline-block rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Apply to be listed
          </a>
        </div>
      </section>
    </main>
  );
}