import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import typescript from "@rollup/plugin-typescript";
import cpx from "cpx";

/**
 * CLI の input argument には以下の値のいずれかを入れてください
 * all: 全てのコンポーネントをビルド（src/index.ts を input とする）
 * <component-name>: 指定のコンポーネントのみをビルド
 * ex) Button の場合、 src/Button/index.tsx を input とする
 **/
export default (commandLineArgs) => {
  const { input, rootDir, packageJsonPath, tsconfigPath } = detectFromInput(
    commandLineArgs.input || ""
  );
  // this will make Rollup ignore the CLI argument
  delete commandLineArgs.input;

  console.log(packageJsonPath);
  cpx.copy(packageJsonPath, "build", {
    includeEmptyDirs: true,
  });

  return {
    input: input,
    output: {
      dir: "build",
      format: "umd",
      name: "rollup-demo",
      sourcemap: true,
      globals: {
        react: "React",
        "styled-components": "styled",
      },
    },
    plugins: [
      resolve(),
      typescript({
        declaration: true,
        declarationDir: "build",
        rootDir: rootDir,
        tsconfig: tsconfigPath,
      }),
      terser(),
      filesize(),
    ],
    external: ["react", "styled-components"],
  };
};

const detectFromInput = (inputOption) => {
  switch (inputOption) {
    case "all":
      return {
        input: "src/index.ts",
        rootDir: "src",
        packageJsonPath: ".",
        tsconfigPath: undefined,
      };
    case "":
      return {
        input: "src/index.ts",
        rootDir: "src",
        packageJsonPath: "package.json",
        tsconfigPath: undefined,
      };
    default:
      return {
        input: `src/${inputOption}/index.tsx`,
        rootDir: undefined,
        packageJsonPath: `src/${inputOption}/package.json`,
        tsconfigPath: `src/${inputOption}/tsconfig.json`,
      };
  }
};
