# Welcome to twigs-editor ⚡️

Rich test editor from [SurveySparrow](https://surveysparrow.com). Built on top of lexical.

## Installation

```
npm i @sparrowengg/twigs-editor-react;

yarn add @sparrowengg/twigs-editor-react;
```


The editor uses the following packages as peer dependencies, so you need to install them as well.

```
yarn add lexical @lexical/code @lexical/html @lexical/link @lexical/list @lexical/react @lexical/rich-text @lexical/selection @lexical/utils
```

## Usage

```
<Editor>
  <EditorToolbar
    tools={[
      "format",
      "bold",
      "italic",
      "underline",
      "code",
      "ordered-list",
      "unordered-list",
      "codeblock",
    ]}
  />
  <RichEditor />
</Editor>
```