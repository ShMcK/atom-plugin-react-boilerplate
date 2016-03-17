# Atom Plugin React Boilerplate

A setup for building Atom editor plugins with React.

### Setup

* Clone the repo:

    `> git clone https://github.com/ShMcK/atom-plugin-react-boilerplate`

* Install dependencies

    `> npm install`

* Change your package name to fit your project. (*Find* -> *Find in Project*). Replace both *plugin-name* and *pluginName* with your plugin name.

* Add your package to Atom locally

    `> apm link`

### Compile

To compile: `> tsc`.

To set up automatic compilation on save: in *tsconfig.json* set:

    "compileOnSave": true

### Notes

For a more thorough example see [*Atom-CodeRoad*](https://github.com/coderoad/atom-coderoad).
