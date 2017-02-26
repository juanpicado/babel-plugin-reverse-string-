# babel-plugin-reverse-string

A babel plugin that reverse any string literal and template string that found within the tree.

# Installation

```javascript
npm install babel-plugin-reverse-string
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["reverse-string"]
}
```

### Via CLI

```sh
$ babel --plugins reverse-string script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["reverse-string"]
});
```