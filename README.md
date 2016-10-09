# electron-vue-webpack
Got tired finding Electron/Vue2/Webpack2 templates with fancy add-ons you don't really need?

Give a try to this minimal template with very few dependencies for quick development and prototyping.

## Install
``` bash
# Clone the repository once
$ git clone https://github.com/pastahito/electron-vue-webpack

# Go into the repository (rename it as you wish)
$ cd electron-vue-webpack

# Install the 7 only dependencies once
$ npm install
```

## Usage
Run this two commands in two different prompts to start developing with hot reloading.
``` bash
# Webpack builds once and watches to apply only the changes
$ npm run dev

# Start you electron app
$ npm start
```

## What's included
You don't really need more stuff to start playing around with Electron, Vue 2 and Webpack 2.

- Support for .vue (single file components). Use them with HTML & ES6 & CSS.
- No Express, neither Babel is needed (more than 97% ES6 is supported in Node/Electron).

## Template structure
```
├── electron-vue-webpack/               # Your project's name

    ├── app/

        ├── build/                      # Webpack will bundle your css/js/img here

        ├── src/

            ├── assets/                 # Images go here
                ├── electron.png
                ├── vue.png
                ├── webpack.png

            ├── components/             # Webcomponents go here
                ├── Hello.vue

            ├── App.vue                 # Vue app. Your global css can go here
            ├── entry.js                # App entry. Your global js can go here

        ├── index.html                  # Single Page Application HTML, it only uses build's files

    ├── main.js                         # Electron app init
    ├── package.json
    ├── webpack.config.js               # Minimal webpack setup
```
