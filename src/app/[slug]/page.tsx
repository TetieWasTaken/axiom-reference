interface Construct {
	id: number;
	slug: string;
	name: string;
	value: string;
	subject: string;
	subsubject: string | null;
	meta: Record<string, number> | null;
	related: number[];
	example: object[] | null;
	search_value: string;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	async function fetchData(input: string): Promise<Construct | null> {
		try {
			const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
			const res = await fetch(`${baseUrl}/api/search?query=` + encodeURIComponent(input), { cache: "no-store" });
			const data: Construct[] = await res.json();
			return data[0] ?? null;
		} catch (err) {
			console.error("Search failed", err);
			return null;
		}
	}

	const construct = await fetchData(slug);

	if (!construct) {
		return (
			<div className="font-primary">
				<main className="container mx-auto px-6 py-16 text-center">
					<h1 className="text-4xl font-title mb-4 text-red-400">404 – Construct Not Found</h1>{" "}
					<p>We couldn’t find a construct for “{slug}”.</p>
				</main>
			</div>
		);
	}

	return (
		<div className="font-primary">
			<main className="container mx-auto px-6 py-16">
				<section className="prose prose-invert max-w-none mx-auto">
					<h3 className="text-5xl font-title mb-2 text-red-500">{construct.name}</h3>
					<p className="italic text-xl text-slate-300">Slug: {construct.slug}</p>

					<div className="bg-slate-800 border border-slate-700 p-6 rounded-lg my-8">
						<h4 className="text-2xl font-semibold mb-2 text-slate-200">Value</h4>
						<pre className="language-latex text-slate-100">{construct.value}</pre>
					</div>
				</section>
			</main>
		</div>
	);
}
