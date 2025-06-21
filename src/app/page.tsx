import Head from "next/head";

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
					<div className="w-[80%] mx-auto p-1 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500">
						<input
							type="search"
							placeholder="Search..."
							className="w-full px-4 py-3 rounded-md bg-black text-gray-800 placeholder-gray-400 focus:outline-none"
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
