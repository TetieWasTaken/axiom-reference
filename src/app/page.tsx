import SearchForm from "@/components/form";
import SubjectButton from "@/components/subjectButton";

export default function Home() {
	return (
		<div className="font-primary bg-slate-900 text-slate-100 min-h-screen">
			<main className="container mx-auto px-6 py-16">
				<section className="text-center mb-16">
					<h2 className="text-8xl font-title mb-4 font-extrabold text-red-500 drop-shadow-md">Axiom Reference</h2>
					<SearchForm />
				</section>
				<SubjectButton subject="mathematics" />
				<SubjectButton subject="physics" />
				<SubjectButton subject="chemistry" />
			</main>
		</div>
	);
}
