const grunt = require('grunt');

grunt.initConfig({
  print: {
    target1: ['index.html', 'src/styles.css', 2],
    target2: 'data',
    hello: 'world'
  }
});

grunt.registerTask('test', 'default task description', () => {
  console.log('hihi');
});

grunt.registerTask('hello', 'say hello', (name, age) => {
  if(!name || !name.length) {
    grunt.warn('you need to privide a name');
  }

  console.log('hello', name, age);
});

grunt.registerTask('default', ['test', 'hello:Kyoz:25']);

grunt.registerMultiTask('print', 'print targets', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});
