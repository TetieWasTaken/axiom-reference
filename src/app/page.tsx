import SearchForm from "@/components/form";

export default function Home() {
	return (
		<div className="font-primary bg-slate-900 text-slate-100 min-h-screen">
			<main className="container mx-auto px-6 py-16">
				<section className="text-center mb-16">
					<h2 className="text-8xl font-title mb-4 font-extrabold text-red-500 drop-shadow-md">Axiom Reference</h2>
					<SearchForm />
				</section>
				<button className="relative inline-block px-6 py-3 text-lg font-semibold text-white group">
					<span className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gradient-to-r from-red-500 via-rose-500 to-indigo-600 rounded-lg blur-sm opacity-50 group-hover:opacity-80 group-hover:scale-105"></span>
					<span className="relative z-10 block px-6 py-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-red-500 transition-colors duration-300 font-title">
						Go to Mathematics
					</span>
				</button>
				<button className="relative inline-block px-6 py-3 text-lg font-semibold text-white group">
					<span className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gradient-to-r from-red-500 via-rose-500 to-indigo-600 rounded-lg blur-sm opacity-50 group-hover:opacity-80 group-hover:scale-105"></span>
					<span className="relative z-10 block px-6 py-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-red-500 transition-colors duration-300 font-primary">
						Go to Physics
					</span>
				</button>
			</main>
		</div>
	);
}
