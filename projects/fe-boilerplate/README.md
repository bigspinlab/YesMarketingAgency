# Frontend Boilerplate - [Gulp 4, Pug, SCSS, ES6+]

This boilerplate allows you to have a quickly start in building your website for yesmkt agency.

## Table of Contents

- [Setup](#setup)
- [Installation](#installation)
- [Features](#features)
- [Notes](#notes)

## Setup

- Download Node.js from your favorite browser [here](https://nodejs.org/en/download/)

## Installation

- Open the Project with your favorite IDE
- Run the Shell
- In the Shell run the following commands:
  - `pnpm i -g pnpm gulp gulp-cli` (if is your first project using npm and gulp)
  - `pnpm i`
  - `gulp build` to compile files to `dist` folder

## Features

- A live-reloading server with [Browsersync](https://browsersync.io/)
- Automated build process that includes, but is not limited to: SCSS compilation (with Autoprefixer included) and image optimization
- Ability to add 3rd party plugins easily - `gulp/_config.js`
- Minified CSS & JS in dist folder
- SourceMaps for better debugging
- Core JS files includes (e.g.: URL external fix for security issue)
- Code Formatted with [Prettier](https://prettier.io/)
- Compiling HTML files from Pug
- Writing Pug with JSON, to separate logic from content
- Favicons Included
- Styleguide with links for templates/modules

## Tasks

- `gulp` - Create the local server (BrowserSync) and watch for source files
- `gulp build` - Compiles source files into `dist` folder, also cleans unused files in `dist`

## Notes

- Doesn't support Internet Explorer
- [gulp-cli](https://github.com/gulpjs/gulp-cli) must be v2.30+
- The original idea of this boilerplate comes from Fabio Serpa, see his repo [here](https://github.com/dippas/Frontend-StarterKit). All I have done is clean the project to meet my needs.

## 📝 Thanks

Made with 💜 by Vitor Martins 😊 [See my linkedin](https://www.linkedin.com/in/vitor-martinss/)