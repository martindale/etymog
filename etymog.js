var config = require('./config');

var Maki = require('maki');
var etymoor = new Maki(config);

var CMS = require('maki-cms-local');
var cms = new CMS({
  path: '/pages',
  //view: process.env.PWD + '/views/page'
});

etymoor.define('Entry', {
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
    query: 'etymoor-entry-index',
    get: 'etymoor-entry-view'
  }
});

etymoor.define('Language', {
  attributes: {
    name: { type: String , required: true , slug: true , id: true },
    family: { type: String , ref: 'Family' }
  },
  components: {
    query: 'etymoor-language-index',
    get: 'etymoor-language-view',
  }
});

etymoor.define('Family', {
  //public: false,
  attributes: {
    name: { type: String , required: true , slug: true , id: true }
  }
});

etymoor.define('People', {
  attributes: {
    username: { type: String , required: true }
  },
  components: {
    query: 'maki-community'
  }
});

etymoor.define('Index', {
  public: false,
  name: 'Index',
  templates: {
    query: 'splash'
  },
  components: {
    masthead: 'etymoor-pitch',
    query: 'etymoor-splash'
  },
  routes: {
    query: '/'
  }
});

etymoor.start();
