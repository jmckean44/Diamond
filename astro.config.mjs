import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	output: "hybrid", // hybrid, server, static = pre-rendered pages
	prefetch: true,
	site: "https://junctionrentals.ca",
	integrations: [sitemap(), icon(), react()],
	adapter: node({
		mode: "standalone",
	}),
});
