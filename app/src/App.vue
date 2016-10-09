<template>
    <div id='app'>
        <img class='logo' src='./assets/electron.png' />
        <img class='logo' src='./assets/vue.png' />
        <img class='logo' src='./assets/webpack.png' />
        <hello></hello>
        <p>
            If you are trying to build Electron apps using Vue 2, or you just
            want to play around with them, feel free to use this
            seed as starting point.
        </p>
        <p>
            Pay attention to how resources inside src/ folder are built, CSS code
            inside .vue components is embed into the HTML file when loaded, or
            simply relative image paths are updated to public paths after
            building with Webpack.
        </p>
        <p>
            Here are the docs for
            <a href='#' @click="link('http://electron.atom.io/docs/')">
                Electron</a>,
            <a href='#' @click="link('http://vuejs.org/guide/')">
                Vue 2</a> and
            <a href='#' @click="link('http://webpack.github.io/docs/')">
                Webpack</a>.
            Customize this template as you wish by adding any
            fancy tool you are used to.
        </p>
        <p>
            If you have any issues, please
            file an issue at this seed's
            <a href='#' @click="link('https://github.com/pastahito/electron-vue-webpack')">
                repository</a>.
        </p>
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'

    // With shell.openExternal(url) is how
    // external urls must be handled, not href
    const shell = require('electron').shell

    export default {
        components: {
            Hello
        },
        methods: {
          link: (url) => {
            shell.openExternal(url)
          }
        }
    }
</script>

<style>
    html {
        height: 100%;
    }
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: auto;
    }
    #app {
        color: #2c3e50;
        max-width: 600px;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    #app a {
        color: #42b983;
        text-decoration: none;
    }
    #app p {
        text-align: justify;
    }
    .logo {
        width: auto;
        height: 100px;
    }
</style>
