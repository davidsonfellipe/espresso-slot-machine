module.exports = {
  src: ['<%= path.dest %>js/*.js'],
  exclude: [],
  options: {
    breakOnErrors: true,
    jsLintXML: 'report.xml',         // create XML JSLint-like report
    checkstyleXML: 'checkstyle.xml', // create checkstyle report
    errorsOnly: false,               // show only maintainability errors
    cyclomatic: [4, 8, 12],          // or optionally a single value, like 3
    halstead: [13, 15, 20],           // or optionally a single value, like 8
    maintainability: 100,
    hideComplexFunctions: false,      // only display maintainability
    broadcast: false                 // broadcast data over event-bus
  }
};
