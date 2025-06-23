import Link from "next/link";

interface CatConstruct {
	id: number;
	slug: string;
	name: string;
	subject: string;
	subsubject: string | null;
	search_value: string;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	async function fetchData(input: string): Promise<CatConstruct[] | null> {
		try {
			const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
			const res = await fetch(`${baseUrl}/api/cat?subject=` + encodeURIComponent(input), {
				cache: "no-store",
			});
			const data: CatConstruct[] = await res.json();
			return data ?? null;
		} catch (err) {
			console.error("Search failed", err);
			return null;
		}
	}

	const data = await fetchData(slug);

	if (!data || data.length == 0) {
		return (
			<main className="container mx-auto px-6 py-16 text-center">
				<h1 className="text-4xl font-title mb-4 text-red-400">404 – Subject Not Found</h1>
				<p>We couldn’t find data for “{slug}”.</p>
			</main>
		);
	}

	return (
		<div className="text-slate-100">
			<main className="container mx-auto px-6 py-16">
				<section className="text-center mb-12">
					<h2 className="text-6xl font-title font-bold mb-2 text-red-500">
						{slug.charAt(0).toUpperCase() + slug.slice(1)}
					</h2>
					<p className="text-xl text-slate-400">Select a construct to view details</p>
				</section>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{data.map((construct) => (
						<Link
							key={construct.id}
							href={`/${construct.slug}`}
							className="block bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-red-500 transition-colors"
						>
							<h3 className="text-2xl font-title mb-1 text-slate-100">{construct.name}</h3>
							{construct.subsubject && (
								<p className="text-sm text-slate-300">
									<span className="font-semibold">Part of:</span> {construct.subsubject}
								</p>
							)}
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
