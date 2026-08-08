// Vercel serverless entry point. Unlike src/index.ts (which calls
// app.listen for a persistent Node process, e.g. on Replit), Vercel's
// Node runtime imports this file's default export as the request handler.
import app from "../src/app";

export default app;
