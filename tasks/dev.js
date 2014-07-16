module.exports = function(grunt) {
  grunt.registerTask('dev', ['browserSync', 'shell:build', 'watch']);
};