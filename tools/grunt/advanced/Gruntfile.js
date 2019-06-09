const grunt = require('grunt');

grunt.initConfig({
  sass: {
    dev: {
      files: {
        // dest            // src
        'dist/styles/main.css': 'styles/main.scss'
      }
    }
  },
  cssmin: {
    build: {
      src: 'dist/styles/main.css',
      dest: 'dist/styles/main.min.css'
    }
  },
  coffee: {
    compile: {
      files: {
        'dist/scripts/hello.js': 'scripts/hello.coffee'
      }
    }
  },
  concat: {
    options: {
      seperator: '\n/*next file*/\n\n' // this will be put between conc. files
    },
    dist: {
      src: ['dist/scripts/hello.js', 'scripts/main.js'],
      dest: 'dist/scripts/build.js'
    }
  },
  uglify: {
    build: {
      files: {
        'dist/scripts/build.min.js': ['dist/scripts/build.js']
      }
    }
  },
  watch: {
    sass: {
      files: '**/*.scss',
      tasks: ['css', 'cssmin'],
      options: {
        livereload: 34567
      }
    },
    coffee: {
      files: 'scripts/*.{coffee,js}',
      tasks: ['coffee', 'concat', 'uglify'],
      options: {
        livereload: 34567
      }
    },
    all: {
      files: ['*.html'],
      options: {
        livereload: 34567
      }
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('css', ['sass', 'cssmin']);
grunt.registerTask('js', ['coffee', 'concat', 'uglify']);
grunt.registerTask('default', ['css', 'js']);
