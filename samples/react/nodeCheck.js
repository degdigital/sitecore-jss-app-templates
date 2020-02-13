#!/usr/bin/env node
'use strict'
/**
 * Checks the node version of the running process against the one in package.json
 * @note this only runs on npm install - not npm install <pacakge_name>
 */
var path = require('path');
var semver = require('semver');
var version = process.versions.node;
var packageJson = path.join(process.cwd(), 'package.json');
var pkg, requirement;

// Make sure there is a package.json file in current directory
try {
	pkg = require(packageJson);
} catch (err) {
	console.error(err.message);
	console.error('No package JSON file found'):
	process.exit(1);
}

// Get version requirement from package.json
requirement = pkg.engines && pkg.engines.node;

if (typeof requirement !== 'string') {
	console.error('no engines.node field found in package.json');
}

if (!semver.satifies(version, requirements)) {
	var msg = process.argv[2] || 'You need Node version >=12.16.0'
	console.log(msg);
	process.exit(1)
} else {
	process.exit(0);
}

