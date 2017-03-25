module.exports = {
  service: {
    name: 'etymog' ,
    namespace: 'etymog' ,
    pitch: 'the world\'s dictionary',
    mission: 'Maki makes building beautiful apps a breeze.',
    description: 'Maki allows you to focus on your project, rather than laboring over architecture decisions.  With true isomorphism, you control how your application behaves, and can then customize how your features are exposed on specific platforms.',
    about: 'Qatra, qatra darya mesha. Drop by drop, the rivers of knowledge are formed. Etymog is a slow and steady distributed platform for people around the world to contribute their knowledge. Those who are thirsty are welcome to take a drink.',
    copyright: 'Maki is copy<em>left</em>, and encourages you to copy, clone, and <em>create</em>.  After all, without a rich public domain, how else can we innovate?  Much to our chagrin, the software itself is more formally <a href="https://github.com/martindale/maki/blob/master/LICENSE">MIT licensed</a>, while our content is licensed under <a href="http://creativecommons.org/licenses/by/4.0/">CC-BY</a>.',
    //masthead: '/img/breeze.gif',
    cta: {
      link: '/examples/maki',
      // This example includes more complex markup
      //- TODO: consider converting to markdown?
      text: '<span style="margin-right: 1em;"><i class="code icon"></i></span> View the Source',
      icon: 'right chevron'
    },
    icon: 'lab',
    logo: '/img/maki-icon.png'
  },
  services: {
    http: {
      port: 7777 
    }
  }
};
