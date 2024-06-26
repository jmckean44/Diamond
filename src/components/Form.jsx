import "dotenv/config";
import React from "react";
import { useForm } from "react-hook-form";
//import recaptcha from "../components/Recaptcha.js";
//import CheckboxGroup from "../components/Checkbox.jsx";
import RadioGroup from "../components/Radio.jsx";
//import Select from "../components/Select.jsx";
//import bodyParser from "body-parser";
import fetch from "node-fetch";
import express from "express";

const app = express();

function RegisterForm() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			const response = await fetch("https://api.github.com/users/github");
			const data = await response.json();
			console.log(data);

			async function run() {
				const response = await mailchimp.ping.get();
				console.log(response);
			}
			run();

			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log(JSON.stringify(data));

			const MAILCHIMP_API = process.env.MC_API_KEY;
			const MAILCHIMP_LIST_ID = process.env.MC_LIST_ID;
			const auth = Buffer.from(`anystring:${MAILCHIMP_API}`).toString("base64");

			const subscriberHash = crypto.createHash("md5").update(subscriber.email_address.toLowerCase()).digest("hex");
		} catch (error) {
			setError("root", {
				message: "You have already subscribed",
			});
		}

		const response = await fetch(`https://us9.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members/${subscriberHash}`, {
			body: JSON.stringify(subscriber),
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-Methods": "OPTIONS, POST, GET",
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: `Basic ${auth}`,
			},
			method: "PUT",
		});
		console.log(response);
		console.log(data);
		if (response.ok) {
			return { statusCode: response.status, body: response.statusText };
		} else {
			throw new Error("Error requesting Mailchimp API");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid" id="mc-embedded-subscribe-form">
			<div>
				<label htmlFor="firstName" className="visuallyhidden">
					First Name
				</label>
				<input
					type="text"
					id="firstName"
					placeholder="First Name *"
					aria-invalid={errors.firstName ? "true" : "false"}
					{...register("FNAME", {
						required: "First name is required",
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "Please enter a valid first name",
						},
					})}
				/>
				<span className="helperText">First Name *</span>
				{errors.FNAME && <p>{errors.FNAME.message}</p>}
			</div>

			<div>
				<label htmlFor="lastName" className="visuallyhidden">
					Last Name
				</label>
				<input
					type="text"
					id="lastName"
					placeholder="Last Name *"
					{...register("LNAME", {
						required: "Last name is required",
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: "Please enter a valid last name",
						},
					})}
				/>
				<span className="helperText">Last Name</span>
				{errors.LNAME && <p>{errors.LNAME.message}</p>}
			</div>

			<div>
				<label htmlFor="email" className="visuallyhidden">
					Email
				</label>
				<input
					type="email"
					id="email"
					placeholder="Email *"
					{...register("EMAIL", {
						required: "Email is required",
						pattern: {
							value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
							message: "Please enter a valid email",
						},
					})}
				/>
				<span className="helperText">Email</span>
				{errors.EMAIL && <p className="errorMsg">{errors.EMAIL.message}</p>}
			</div>

			<div>
				<label htmlFor="phone" className="visuallyhidden">
					Phone
				</label>
				<input type="tel" id="phone" placeholder="Phone" {...register("PHONE")} />
				<span className="helperText">Phone</span>
			</div>

			<div>{/* <Select name="hear" /> */}</div>

			<div className="grid-columns-span">
				<RadioGroup name="RadioGroup" />
			</div>

			<div className="grid-columns-span">
				<label htmlFor="comments" className="visuallyhidden">
					Comments
				</label>
				<textarea type="text" rows="5" id="comments" placeholder="Comments" {...register("COMMENTS")}></textarea>
				<span className="helperText">Comments</span>
			</div>

			{/* <div class="g-recaptcha" data-sitekey="6LcYLacoAAAAAPeFYUpZ7L1GcS1NXDVct1plvY_8"></div> */}

			<script is:inline>
				function onSubmit(token){" "}
				{fetch("/recaptcha", {
					method: "POST",
					body: JSON.stringify({ recaptcha: token }),
				})
					.then((response) => response.json())
					.then((gResponse) => {
						if (gResponse.success) {
							("Captcha verification was a success");
						} else {
							("Captcha verification failed");
						}
					})}
			</script>

			<div className="grid-columns-span">
				{errors.root && <p className="errorMsg">{errors.root.message}</p>}
				<button type="submit" className="button g-recaptcha" data-sitekey="6LcYLacoAAAAAPeFYUpZ7L1GcS1NXDVct1plvY_8" disabled={isSubmitting}>
					{isSubmitting ? "Submitting..." : "Submit"}
				</button>
			</div>

			<div>
				<p className="disclaimer">Disclaimer...</p>
			</div>
		</form>
	);
}

export default RegisterForm;
