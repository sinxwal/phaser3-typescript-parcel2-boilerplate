# Phaser 3 + Parcel 2 + typescript Boilerplate

![License](https://img.shields.io/badge/license-MIT-green)

## Getting Started

Clone this repository to your local machine:

```bash
git clone https://github.com/sinxwal/phaser3-typescript-parcel2-boilerplate.git
```

This will create a folder named `phaser3-typescript-parcel2-boilerplate`. You can specify a different folder name like this:

```bash
git clone https://github.com/sinxwal/phaser3-typescript-parcel2-boilerplate.git my-folder-name
```

Go into your new project folder and install dependencies:

```bash
cd phaser3-typescript-parcel2-boilerplate # or 'my-folder-name'
npm install
```

Start development server:

```
npm run start
```

To create a production build:

```
npm run build
```

Production files will be placed in the `dist` folder. Then upload those files to a web server. 🎉

## Project Structure

```
    .
    ├── dist
    ├── node_modules
    ├── src
    │   ├── scenes
    │   │   ├── HelloWorldScene.ts
    │   ├── index.html
    │   ├── main.ts
    ├── package.json
```

The contents of this template is the basic [Phaser3 getting started example](http://phaser.io/tutorials/getting-started-phaser3/part5).

This template assumes you will want to organize your code into multiple files and use TypeScript.

TypeScript files are intended for the `src` folder. `main.ts` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `HelloWorldScene.ts` lives but you can do whatever you want.

## ESLint + prettier

This template uses a basic `eslint` set up for code linting to help you find and fix common problems in your TypeScript code. Prettier is also used to autoformat code. Feel free to change `.prettierrs.js` and `.eslintrc.js` to adapt formatter and linter ruls for your needs.

It does not aim to be opinionated.

[See here for rules to turn on or off](https://eslint.org/docs/rules/).

## Other notes

You can use [Real Favicon Generator](<https://realfavicongenerator.net/>) to generate new favicons pack.

Use [maskable.app/editor](<https://maskable.app/editor>) to generte maskable PWA icon.

## Usefull resources

This boilerplate was inspired by other great repos and articles such as:

[phaser3-parcel-template](<https://github.com/ourcade/phaser3-parcel-template>)

[phaser3-typescript-parcel-template](<https://github.com/ourcade/phaser3-typescript-parcel-template>)

[A Step-by-Step Tutorial On Making A Phaser 3 Game by shakuro.com](<https://shakuro.com/blog/phaser-js-a-step-by-step-tutorial-on-making-a-phaser-3-game>)

[Parceljs v2 blog](<https://v2.parceljs.org/blog/rc0/>)

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)
