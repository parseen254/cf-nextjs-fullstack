import { defineConfig } from "drizzle-kit";

// using cloudflare wrangler
export default defineConfig({
    dialect: "sqlite",
    driver: "d1-http",
    schema: "./src/db/schema.ts",
    out: "./src/db/migrations",
})