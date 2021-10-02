const esbuild = require('esbuild')
const path = require('path')

esbuild.build({
    entryPoints: [path.join(__dirname, './app.jsx')],
    bundle: true,
    watch: true,
    outfile: path.join(__dirname, './../static/index.js'),
})