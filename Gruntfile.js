
module.exports = function (grunt) {
  require('time-grunt')(grunt);
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015-script']
      },
      dist: {
        files: {
          'dist/mockschema.js': 'src/mockschema.js'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/mockschema.min.js': ['dist/mockschema.js']
        }
      },
    },
    watch: {
      scripts: {
        files: 'src/**/*.js', tasks: ['babel', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.registerTask('build', ['babel']);
  grunt.registerTask('default', ['babel', 'uglify']);
}