import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to https://<username>.github.io/<repo-name>/,
// set base to "/<repo-name>/". If you deploy to a custom domain
// or to https://<username>.github.io/, leave base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
