import { createApp } from "@wearesage/static";

createApp({
  port: process.env.PORT || 2223,
  directory: "dist",
  apiUrl: process.env.API_URL || "http://localhost:2223"
});
