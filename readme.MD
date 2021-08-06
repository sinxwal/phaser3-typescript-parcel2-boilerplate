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

This template assumes you will want to organize your code into multiple files and use modern JavaScript (or TypeScript).

JavaScript files are intended for the `src` folder. `main.ts` is the entry point referenced by `index.html`.

Other than that there is no opinion on how you should structure your project. There is a `scenes` folder in `src` where the `HelloWorldScene.ts` lives but you can do whatever you want.

# ESLint

This template uses a basic `eslint` set up for code linting to help you find and fix common problems in your JavaScript code.

It does not aim to be opinionated.

[See here for rules to turn on or off](https://eslint.org/docs/rules/).

## License

[MIT License](https://github.com/ourcade/phaser3-parcel-template/blob/master/LICENSE)