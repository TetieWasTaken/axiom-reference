import Head from "next/head";
import SearchForm from "@/components/form";

export default function Home() {
	return (
		<div className="font-primary">
			<Head>
				<title>Axiom Reference</title>
				<meta name="description" content="A modern physics axiom reference" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main className="container mx-auto px-6 py-16">
				<section className="text-center mb-16">
					<h2 className="text-8xl font-title mb-4 font-extrabold">Axiom Reference</h2>
					<SearchForm />
				</section>
			</main>
		</div>
	);
}
