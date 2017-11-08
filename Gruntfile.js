'use strict';

var path = require('path');

module.exports = function(grunt) {

	grunt.initConfig({

		tag_chrome : '--tags @first', 
		tag_firefox : '',
	
		env : {
			chrome : {
				PLATFORM : 'CHROME'
			},
			firefox : {
				PLATFORM : 'FIREFOX'
			}
		},
	
		jshint : {
			all : [ 'Gruntfile.js', 'features/step_definitions/*/*.js','features/step_definitions/*.js', 'features/support/*.js' ],
			options : {
				node : true,
				strict : true,
				globalstrict : true
			}
		},

		exec : {
			run_chrome : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_chrome %>')
			},
			run_firefox : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js -f pretty <%= tag_firefox %>')
			},
			run_help : {
				command : 'node ' + path.join('node_modules', 'cucumber', 'bin', 'cucumber.js --help')
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-env');

	grunt.registerTask('default', [ 'jshint', 'exec:run_help' ]);
	grunt.registerTask('chrome', [ 'env:chrome', 'jshint', 'exec:run_chrome' ]);
	grunt.registerTask('firefox', [ 'env:firefox', 'jshint', 'exec:run_firefox' ]);
	grunt.registerTask('asdf666', [ 'env:firefox', 'jshint', 'exec:run_firefox' ]);	
};
