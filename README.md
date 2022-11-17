# Welcome to Twigs monorepo

## Packages
1. react-components (`@sparrowengg/twigs-react`) → React UI components 
2. react-icons (`@sparrowengg/twigs-react-icons`) → SVG Icons package built with React


## monorepo
This repo is built with lerna to support monorepo. commands can be run from the root folder, and will be applicable for all of the packages under the monorepo

### How do we handle monorepo
We've achieving mono-repo using [lerna](https://lerna.js.org/). You can read more about the advantages of using lerna [here](https://lerna.js.org/docs/introduction#why-lerna).

Under the hood, lerna makes use of workspaces API provided by package managers ([yarn](https://yarnpkg.com/features/workspaces), npm, pnpm)

### Why did we choose lerna?
1. packages can be independant and still consume each other like an npm package way. 
2. avoid installing the same npm dependancy for sub-packages. For eg: if 2 of our package use same npm dependancy, lerna will install at global level and reference to it. If a dependancy is only applicable for one of the sub-package, lerna will keep a copy at package level. 
3. lerna makes it easy to run commands across packages parallelly. For eg: you can run `test` or `dev` with one single command across packages. `build` command also can happen in parallel. lerna is smart enough to build package 1 before package 2, if package 2 has a dependancy of package 1. 
4. caching of files. Unless the files are changes, lerna will not put effort into re-building the same thing. This will improve the build time. 

## How to set-up

1. Clone the repo
2. install the dependencies using [yarn](https://yarnpkg.com/) `yarn install`

**Other scripts**

1. build `npx lerna run build`

2. build static storybook `npx lerna run build-storybook`

3. To delete all node_modules folders (even from subpackages), `npx lerna clean -y`

4. If you'd like to run command against one package alone, run `npx lerna run build --scope=package-name`