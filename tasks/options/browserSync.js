module.exports = {
  files: {
    src : ['_site/*']
  },
  options: {
    open: false,
    watchTask: true,
    ghostMode: {
      clicks: true,
      scroll: true,
      links: true,
      forms: true
    },
    host: '10.0.1.7',
    port: 4000,
    server: {
      baseDir: '_site',
      directory: true
    },
    notify: false,
  }
}