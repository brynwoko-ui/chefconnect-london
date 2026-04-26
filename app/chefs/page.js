const chefCategories = [
  {
    id: 1,
    title: "British",
    slug: "british",
    cuisines: ["British", "Modern British", "Dinner Parties"],
    description:
      "British and modern British private dining menus for London homes, events, and dinner parties.",
  },
  {
    id: 2,
    title: "Indian",
    slug: "indian",
    cuisines: ["Indian", "Vegetarian", "Event Dining"],
    description:
      "Indian private dining, family celebrations, and home event menus across London.",
  },
  {
    id: 3,
    title: "Caribbean",
    slug: "caribbean",
    cuisines: ["Caribbean", "Soul Food", "Event Dining"],
    description:
      "Caribbean private dining experiences for London dinner parties and special occasions.",
  },
  {
    id: 4,
    title: "African",
    slug: "african",
    cuisines: ["African", "West African", "Celebration Dining"],
    description:
      "African-inspired private dinners, celebration menus, and event dining across London.",
  },
  {
    id: 5,
    title: "Italian",
    slug: "italian",
    cuisines: ["Italian", "Mediterranean", "Pasta"],
    description:
      "Italian-inspired private dining and home event menus from London-based chefs.",
  },
  {
    id: 6,
    title: "Plant-Based",
    slug: "plant-based",
    cuisines: ["Plant-Based", "Vegan", "Healthy Dining"],
    description:
      "Plant-based, vegan, and dietary-conscious private dining experiences in London.",
  },
];

export default function ChefsPage() {
  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12 text-stone-900">
      <section className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-semibold text-amber-700">
          ← Back to home
        </a>

        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Browse Chefs
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Choose a cuisine.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Explore cuisine categories planned for ChefConnect London. Approved
            chef profiles will appear under each category as the platform grows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chefCategories.map((category) => (
            <a
              key={category.id}
              href={`/chefs/${category.slug}`}
              className="block rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-xl font-bold text-amber-800">
                {category.title[0]}
              </div>

              <p className="mb-3 inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                Coming soon
              </p>

              <h2 className="text-2xl font-bold">{category.title}</h2>

              <p className="mt-2 text-sm font-medium text-stone-500">
                London
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.cuisines.map((cuisine) => (
                  <span
                    key={cuisine}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700"
                  >
                    {cuisine}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-stone-600">
                {category.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-amber-700">
                View {category.title} chefs →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-stone-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Are you a London private chef?</h2>

          <p className="mt-3 max-w-2xl text-stone-300">
            Applications will open soon for chefs who want to be listed on
            ChefConnect London.
          </p>

          <a
            href="/register-chef"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900"
          >
            Apply to be listed
          </a>
        </div>
      </section>
    </main>
  );
}