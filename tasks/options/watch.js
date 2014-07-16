module.exports = {
  options: {
    livereload: true,
  },
  build: {
    files : [ '*.md', '_includes/*.html', '_layouts/*.html', '_posts/*.markdown', 'css/*.css', 'css/libs/*.css', '_config.yml', 'index.html', '404.html', 'js/*.js' ],
    tasks: ['shell:build'],
    options: {
      spawn: false,
    }
  }
  /*scripts: {
    files: ['js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['css/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {*/
    //files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
    /*tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{*/
    //files: ['./**/*.html'],
    /*tasks: [],
    options: {
      spawn: false
    }
  }*/
}