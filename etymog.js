var config = require('./config');

var Maki = require('maki');
var etymog = new Maki(config);

etymog.start();
