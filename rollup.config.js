import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  external: ["vue"],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
      include: ["src/**/*.ts", "src/**/*.js"],
    }),
  ],
});
