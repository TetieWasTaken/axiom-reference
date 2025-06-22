"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
	const [input, setInput] = useState("");
	const router = useRouter();

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();

		try {
			const res = await fetch("/api/search?query=" + encodeURIComponent(input));
			const data = await res.json();

			if (data[0] && data[0].slug) {
				router.push(`/${data[0].slug}`);
			}
		} catch (err) {
			console.error("Search failed", err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="w-[80%] mx-auto p-[2px] rounded-lg bg-gradient-to-r from-red-500 via-rose-500 to-indigo-600 shadow-lg">
				<input
					type="search"
					placeholder="Search..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="w-full px-4 py-3 rounded-md bg-slate-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
				/>
			</div>
		</form>
	);
}
