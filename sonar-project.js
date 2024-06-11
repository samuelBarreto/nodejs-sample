const scanner = require('sonarqube-scanner').default;

    scanner(
      {
        serverUrl: 'http://localhost:9000',
        token: 'sqp_dffbfcaea6ee2b3bf06934707e1428062d66995b',
        options: {
          'sonar.projectKey' : 'simple-nodejs',
          'sonar.projectName': 'simple-nodejs',
          'sonar.projectDescription': 'Description for "simple-nodejs" project...',
          'sonar.sources': 'index.js',
          'sonar.tests': 'test/test.js',
        },
      },
      error => {
        if (error) {
          console.error(error);
        }
        process.exit();
      },
    );