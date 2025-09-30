import { defineConfig } from "vite";

export default defineConfig({
   base: "./",
   logLevel: "warn",
   build: {
      rollupOptions: {
         output: {
            manualChunks: {
               phaser: ["phaser"],
            },
         },
      },
      // even though esbuild can minify, the legal comments are formatted in
      // such a way that it cannot find and extract them. so we end up with 6000
      // lines of the same repeated license comment in the source code, 20% of
      // the file size. terser is much slower, but is able to remove them.
      minify: "terser",
      terserOptions: {
         compress: {
            passes: 2,
         },
         mangle: true,
         format: {
            comments: false,
         },
      },
   },
   server: {
      port: 8080,
   },
});
