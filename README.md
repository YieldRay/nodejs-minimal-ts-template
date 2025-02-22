# nodejs-minimal-ts-template

A typescript nodejs template with minimal dependencies for node>=22.

> [Do I need this node dependency?](https://brianmuenzenmeyer.com/posts/2024-do-i-need-this-node-dependency/)

I think when it's time to setup a micro node app, there is no need to install
external dependencies like\
`ts-node` `tsx` `nodemon` `dotenv` `chalk` `commander` `yargs` `mocha` `jest`,\
as node already have them built-in.

We use Node's
[`--experimental-transform-types`](https://nodejs.org/api/cli.html#--experimental-transform-types)
and TypeScript's
[`--erasableSyntaxOnly`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8-rc/#the---erasablesyntaxonly-option)
to make things work.

```sh
# to get started, run
npm i
# or
node --run preinstall
```

Also checkout
[nodejs-purejs-template](https://github.com/YieldRay/nodejs-purejs-template) for
node>16.
