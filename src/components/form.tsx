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
			console.log("Search result:", data);

			if (data[0] && data[0].slug) {
				router.push(`/${data[0].slug}`);
			}
		} catch (err) {
			console.error("Search failed", err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="w-[80%] mx-auto p-1 rounded-lg bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500">
				<input
					type="search"
					placeholder="Search..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="w-full px-4 py-3 rounded-md bg-black text-gray-800 placeholder-gray-400 focus:outline-none"
				/>
			</div>
		</form>
	);
}
