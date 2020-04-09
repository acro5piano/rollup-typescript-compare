import typescript from "@rollup/plugin-typescript";
import sucrase from "@rollup/plugin-sucrase";
import resolve from "@rollup/plugin-node-resolve";

export default [
    {
        input: "src/index.ts",
        output: {
            file: "build/sucrase.js",
            name: "sucrase",
            format: "iife"
        },
        plugins: [
            resolve({
                extensions: [".js", ".ts"]
            }),
            sucrase({
                transforms: ["typescript"]
            })
        ]
    },
    {
        input: "src/index.ts",
        output: {
            file: "build/ts.js",
            name: "ts",
            format: "iife"
        },
        plugins: [typescript()]
    }
];
