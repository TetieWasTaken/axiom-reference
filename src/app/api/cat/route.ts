import type { NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
	const supabase = await createClient();
	const searchParams = request.nextUrl.searchParams;
	const subject = searchParams.get("subject");

	const { data, error } = await supabase
		.from("constructs")
		.select("id, slug, name, subject, subsubject, search_value")
		.eq("subject", subject);

	if (error) {
		return new Response(error.message, {
			status: 500,
		});
	}

	return Response.json(data);
}
