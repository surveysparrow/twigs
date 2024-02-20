# Welcome to Twigs monorepo

## Packages
1. react-components (`@sparrowengg/twigs-react`) → React UI components 
2. react-icons (`@sparrowengg/twigs-react-icons`) → SVG Icons package built with React


## monorepo
This repo is built with lerna to support monorepo. commands can be run from the root folder, and will be applicable for all of the packages under the monorepo

## How to set-up

1. Clone the repo
2. install the dependencies using [yarn](https://yarnpkg.com/) `yarn install`

**Other scripts**

1. build `npx lerna run build`

2. build static storybook `npx lerna run build-storybook`

3. To delete all node_modules folders (even from subpackages), `npx lerna clean -y`

4. If you'd like to run command against one package alone, run `npx lerna run build --scope=package-name`