<p align="center"><img src="https://twigs.surveysparrow.com/img/logo-with-text.svg" width="200" alt="Twigs" /></p>

# Welcome to Twigs monorepo

## Packages
1. react-components (`@sparrowengg/twigs-react`) → React UI components 
2. react-icons (`@sparrowengg/twigs-react-icons`) → SVG Icons package built with React


## monorepo
This repo is built with lerna to support monorepo. commands can be run from the root folder, and will be applicable for all of the packages under the monorepo

## How to set-up

1. Clone the repo
2. install the dependencies using [yarn](https://yarnpkg.com/) `yarn install`

### Development

Twigs uses [Stitches](https://stitches.dev/) and [Radix](https://radix-ui.com/) for most of its components.
Storybook is configured for components and icons, so you can run `yarn storybook` from the respective directory to start a development view.

```
$ git clone https://github.com/surveysparrow/twigs.git
$ cd twigs
$ yarn
$ yarn build

$ cd packages/react-components
$ yarn storybook
```

**Other scripts**

1. build `npx lerna run build`

2. build static storybook `npx lerna run build-storybook`

3. To delete all node_modules folders (even from subpackages), `npx lerna clean -y`

4. If you'd like to run command against one package alone, run `npx lerna run build --scope=package-name`

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/justin-ss"><img src="https://avatars.githubusercontent.com/u/105047491?v=4?s=100" width="100px;" alt="Justin George"/><br /><sub><b>Justin George</b></sub></a><br /><a href="#code-justin-ss" title="Code">💻</a> <a href="#doc-justin-ss" title="Documentation">📖</a> <a href="#ideas-justin-ss" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-justin-ss" title="Mentoring">🧑‍🏫</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/akzhysparrow"><img src="https://avatars.githubusercontent.com/u/157568762?v=4?s=100" width="100px;" alt="akzhysparrow"/><br /><sub><b>akzhysparrow</b></sub></a><br /><a href="#code-akzhysparrow" title="Code">💻</a> <a href="#doc-akzhysparrow" title="Documentation">📖</a> <a href="#example-akzhysparrow" title="Examples">💡</a> <a href="#maintenance-akzhysparrow" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/maneeshp97"><img src="https://avatars.githubusercontent.com/u/158666689?v=4?s=100" width="100px;" alt="Maneesh P"/><br /><sub><b>Maneesh P</b></sub></a><br /><a href="#code-maneeshp97" title="Code">💻</a> <a href="#maintenance-maneeshp97" title="Maintenance">🚧</a> <a href="#doc-maneeshp97" title="Documentation">📖</a> <a href="#review-maneeshp97" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shettyMegh9"><img src="https://avatars.githubusercontent.com/u/130285592?v=4?s=100" width="100px;" alt="Meghanath S Shetty"/><br /><sub><b>Meghanath S Shetty</b></sub></a><br /><a href="#code-shettyMegh9" title="Code">💻</a> <a href="#bug-shettyMegh9" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.pratosh.ml/"><img src="https://avatars.githubusercontent.com/u/76246084?v=4?s=100" width="100px;" alt="Pratosh"/><br /><sub><b>Pratosh</b></sub></a><br /><a href="#code-Pratosh22" title="Code">💻</a> <a href="#bug-Pratosh22" title="Bug reports">🐛</a> <a href="#doc-Pratosh22" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/meenakshi-ss"><img src="https://avatars.githubusercontent.com/u/160723712?v=4?s=100" width="100px;" alt="Meenakshi Sundaram"/><br /><sub><b>Meenakshi Sundaram</b></sub></a><br /><a href="#code-meenakshi-ss" title="Code">💻</a> <a href="#bug-meenakshi-ss" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ss-oliver-paul"><img src="https://avatars.githubusercontent.com/u/158561360?v=4?s=100" width="100px;" alt="Oliver Paul"/><br /><sub><b>Oliver Paul</b></sub></a><br /><a href="#infra-ss-oliver-paul" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ragulcs-sparrow"><img src="https://avatars.githubusercontent.com/u/163504861?v=4?s=100" width="100px;" alt="ragulcs-sparrow"/><br /><sub><b>ragulcs-sparrow</b></sub></a><br /><a href="#code-ragulcs-sparrow" title="Code">💻</a> <a href="#bug-ragulcs-sparrow" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/abhaysparrow"><img src="https://avatars.githubusercontent.com/u/174322002?v=4?s=100" width="100px;" alt="abhaysparrow"/><br /><sub><b>abhaysparrow</b></sub></a><br /><a href="#code-abhaysparrow" title="Code">💻</a> <a href="#bug-abhaysparrow" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tmbalagan"><img src="https://avatars.githubusercontent.com/u/23442723?v=4?s=100" width="100px;" alt="Balamurugan "/><br /><sub><b>Balamurugan </b></sub></a><br /><a href="#code-tmbalagan" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Prem24022000"><img src="https://avatars.githubusercontent.com/u/69319430?v=4?s=100" width="100px;" alt="Prem Prakash Sahu"/><br /><sub><b>Prem Prakash Sahu</b></sub></a><br /><a href="#doc-Prem24022000" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://github.com/Gokul-Nath-27"><img src="https://avatars.githubusercontent.com/u/99087032?v=4?s=100" width="100px;" alt="Gokul Nath"/><br /><sub><b>Gokul Nath</b></sub></a><br /><a href="#code-Gokul-Nath-27" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->