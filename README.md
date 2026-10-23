# nodejs-minimal-ts-template

A minimal TypeScript starter for Node.js (Node >= 22.18.0 and TypeScript >= 5.8).

For small apps or microservices you often don't need extra runtime/dev tools like `ts-node`, `tsx`, `nodemon`, `dotenv`, `chalk`, `commander`, `yargs`, `mocha`, or `jest`.
Modern Node and TypeScript provide enough primitives to keep projects lean.

This template relies on Node's built-in type stripping (enabled by default since Node 22.18.0) together with TypeScript's `--erasableSyntaxOnly` to run TypeScript code directly with Node.js without any external dependencies.

See also:

- [Do I need this node dependency?](https://brianmuenzenmeyer.com/posts/2024-do-i-need-this-node-dependency/)
- Node.js [built-in TypeScript support](https://nodejs.org/api/typescript.html)
- TypeScript flag [--erasableSyntaxOnly](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/#the---erasablesyntaxonly-option)

This template requires Node.js 22.18.0 or newer, where `.ts` files run directly without flags. Milestones for built-in type stripping from the [official docs](https://nodejs.org/api/typescript.html):

| Version            | Change                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| 22.6.0             | Added, opt-in via `--experimental-strip-types`                                                       |
| 22.7.0             | `--experimental-transform-types` added                                                               |
| 23.6.0             | Enabled by default (stability 1.1, active development)                                               |
| 22.18.0            | Enabled by default on the 22.x line; experimental warning removed (stability 1.2, release candidate) |
| 24.3.0             | Experimental warning removed                                                                         |
| 24.12.0 and 25.2.0 | Type stripping marked stable                                                                         |
| 26.0.0             | `--experimental-transform-types` removed                                                             |

Quick start:

```sh
# create .env file
touch .env
# install deps
npm i
```

If you want more strict tsconfig, you can pick:

```json
// https://nodejs.org/docs/latest/api/typescript.html#type-stripping
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["esnext"],
    "types": ["node"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true,
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "rewriteRelativeImportExtensions": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "erasableSyntaxOnly": true,
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["**/*.ts"],
  "exclude": ["dist", "node_modules"]
}
```

Also see the plain-JS template: [nodejs-pure-js-template](https://github.com/YieldRay/nodejs-pure-js-template).
