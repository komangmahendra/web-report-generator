import "dotenv/config";
import { Hono } from "hono";
import type { Context } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import {
  runAgentGenerateHTML,
  runAgentParseReportToSection,
} from "./agent/agent";

const app = new Hono();

// Enable CORS for all routes. Adjust origin/headers/methods as needed.
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
  })
);

app.post("/generate", async (c: Context) => {
  const body = (await c.req.json()) as Record<string, unknown>;
  const report = (body.report as string) ?? "";
  const result = await runAgentParseReportToSection(report);
  const html = await runAgentGenerateHTML(result || "");
  return c.json({ received: html });
});

export default app;

// Start server (read PORT from env for flexibility)
const port = Number(process.env.PORT ?? 3000);
console.log(`Server running on http://localhost:${port}`);
serve({ fetch: app.fetch, port });
