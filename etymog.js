var config = require('./config');

var Maki = require('maki');
var etymog = new Maki(config);

var CMS = require('maki-cms-local');
var cms = new CMS({
  path: '/pages',
  //view: process.env.PWD + '/views/page'
});

etymog.define('Entry', {
  attributes: {
    text: { type: String , required: true },
    language: { type: String , ref: 'language' },
    definition: { type: String },
    pronunciation: { type: String },
    translations: [ { type: String , ref: 'Entry' } ],
    cognates: [ { type: String , ref: 'Entry' } ],
    author: { type: String , ref: 'User' },
    created: { type: Date , required: true , default: Date.now },
  },
  components: {
    query: 'etymog-entry-index',
    get: 'etymog-entry-view'
  }
});

etymog.define('Language', {
  attributes: {
    name: { type: String , required: true , slug: true , id: true },
    family: { type: String , ref: 'Family' }
  },
  components: {
    query: 'etymog-language-index',
    get: 'etymog-language-view',
  }
});

etymog.define('Family', {
  //public: false,
  attributes: {
    name: { type: String , required: true , slug: true , id: true }
  }
});

etymog.define('People', {
  attributes: {
    username: { type: String , required: true }
  },
  components: {
    query: 'maki-community'
  }
});

etymog.define('Index', {
  public: false,
  name: 'Index',
  templates: {
    query: 'splash'
  },
  components: {
    masthead: 'etymog-pitch',
    query: 'etymog-splash'
  },
  routes: {
    query: '/'
  }
});

etymog.start();
