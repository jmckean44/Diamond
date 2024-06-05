require("dotenv").config();
import type { APIRoute } from "astro";
const client = require("@mailchimp/mailchimp_marketing");
const API_KEY = process.env.API_KEY;
const LIST_ID = process.env.LIST_ID;
const SERVER = process.env.SERVER;

console.log(process.env);

client.setConfig({
	API_KEY: API_KEY,
	SERVER: SERVER,
});

const run = async () => {
	const response = await client.lists.addListMember(LIST_ID, {
		email_address: "",
		status: "pending",
	});
	console.log(response);
};
run();

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const FNAME = data.get("FNAME");
	const LNAME = data.get("LNAME");
	const EMAIL = data.get("EMAIL");
	const PHONE = data.get("PHONE");
	const HEAR = data.get("HEAR");
	const RADIO = data.get("RADIO");
	const CHECKBOX = data.get("CHECKBOX");
	const COMMENTS = data.get("COMMENTS");
	// Validate the data - you'll probably want to do more than this
	if (!FNAME || !PHONE || !EMAIL) {
		return new Response(
			JSON.stringify({
				message: "Missing required fields",
			}),
			{ status: 400 }
		);
	}

	return new Response(
		JSON.stringify({
			message: "Success!",
		}),
		{ status: 200 }
	);
};
