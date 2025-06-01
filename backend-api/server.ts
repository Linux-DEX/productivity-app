import http from "http";
import dotenv from "dotenv";
import { app } from "./app.ts";

dotenv.config();

const port = process.env.PORT || 8080;

// Create HTTP server
const server = http.createServer(app);

server.on("error", (err) => {
  console.error("Server error:", err);
});

server.on("listening", () => {
  console.log(`Listening on port=${port}`);
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
  console.log(`Swagger Docs => http://localhost:${port}/api/todo`);
});

// Handle uncaught exceptions
process.on("uncaughtException", (err: Error) => {
  console.error("UNCAUGHT EXCEPTION");
  console.error(err.name, err.message);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.error("UNHANDLED REJECTION");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
