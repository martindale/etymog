var config = require('./config');

var Maki = require('maki');
var etymog = new Maki(config);

etymog.define('Entry', {
  attributes: [
    text: { type: String , required: true },
    language: { type: String , enum: ['dari', 'english'] },
    translations: [ { type: String , ref: 'Entry' } ],
    cognates: [ { type: String , ref: 'Entry' } ],
  ]
});

etymog.define('Language', {
  attributes: {
    name: { type: String , required: true , slug: true , id: true },
    family: { type: String , ref: 'Family' }
  }
});

etymog.define('Family', {
  attributes: {
    name: { type: String , required: true , slug: true , id: true }
  }
});

etymog.define('User', {
  attributes: [
    username: { type: String , required: true }
  ]
});

etymog.define('Index', {
  public: false,
  name: 'Index',
  templates: {
    query: 'splash'
  },
  components: {
    masthead: 'maki-pitch',
    query: 'etymog-splash',
    get: 'maki-splash'
  },
  routes: {
    query: '/'
  }
});

etymog.start();
