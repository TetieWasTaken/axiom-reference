"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface SubjectButtonProps {
	subject: string;
}

export default function SubjectButton({ subject }: SubjectButtonProps) {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/cat/${subject}`)}
			className={`relative inline-block mx-6 px-6 py-3 text-lg font-semibold text-white group cursor-pointer`}
		>
			<span className="absolute inset-0 w-full h-full transition-transform transform scale-100 bg-gradient-to-r from-red-500 via-rose-500 to-indigo-600 rounded-lg blur-sm opacity-50 group-hover:opacity-80 group-hover:scale-105"></span>
			<span className="relative z-10 block px-6 py-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-red-500 transition-colors duration-300 font-title">
				Go to {subject}
			</span>
		</button>
	);
}
