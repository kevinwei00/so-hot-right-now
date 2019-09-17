export default {
  authentication: {
    categoryName: 'Authentication',
    list: {
      jwt: { name: 'JWT', keywords: ['jwt', 'json web token'], logo: '', website: '' },
      oauth: { name: 'OAuth', keywords: ['oauth'], logo: '', website: '' },
      openid: { name: 'OpenID', keywords: ['openid'], logo: '', website: '' },
    },
  },
  bundler: {
    categoryName: 'Bundlers',
    list: {
      browserify: { name: 'Browserify', keywords: ['browserify'], logo: '', website: '' },
      parcel: { name: 'Parcel', keywords: ['parcel'], logo: '', website: '' },
      rollup: { name: 'Rollup', keywords: ['rollup'], logo: '', website: '' },
      webpack: { name: 'webpack', keywords: ['webpack'], logo: '', website: '' },
    },
  },
  cicd: {
    categoryName: 'CI/CD',
    list: {
      circleci: { name: 'CircleCI', keywords: ['circleci', 'circle ci'], logo: '', website: '' },
      jenkins: { name: 'Jenkins', keywords: ['jenkins'], logo: '', website: '' },
      teamcity: { name: 'TeamCity', keywords: ['teamcity', 'team city'], logo: '', website: '' },
      travisci: { name: 'Travis CI', keywords: ['travisci', 'travis ci'], logo: '', website: '' },
    },
  },
  css_architecture: {
    categoryName: 'CSS Architecture',
    list: {
      bem: { name: 'BEM', keywords: ['bem'], logo: '', website: '' },
      oocss: { name: 'OOCSS', keywords: ['oocss'], logo: '', website: '' },
      smacss: { name: 'SMACSS', keywords: ['smacss'], logo: '', website: '' },
    },
  },
  css_framework: {
    categoryName: 'CSS Frameworks',
    list: {
      bootstrap: { name: 'Bootstrap', keywords: ['bootstrap'], logo: '', website: '' },
      bulma: { name: 'Bulma', keywords: ['bulma'], logo: '', website: '' },
      materialize: { name: 'Materialize', keywords: ['materialize', 'materializecss'], logo: '', website: '' },
      semantic: { name: 'Semantic UI', keywords: ['semantic ui'], logo: '', website: '' },
      tailwind: { name: 'Tailwind CSS', keywords: ['tailwind'], logo: '', website: '' },
    },
  },
  css_preprocessor: {
    categoryName: 'CSS Preprocessors',
    list: {
      less: { name: 'LESS', keywords: ['less', 'css'], logo: '', website: '' }, // AND
      postcss: { name: 'PostCSS', keywords: ['postcss'], logo: '', website: '' },
      sass: { name: 'Sass/SCSS', keywords: ['sass', 'scss'], logo: '', website: '' },
      stylus: { name: 'Stylus', keywords: ['stylus'], logo: '', website: '' },
    },
  },
  database_inmemory: {
    categoryName: 'In-Memory Databases',
    list: {
      aerospike: { name: 'Aerospike', keywords: ['aerospike'], logo: '', website: '' },
      memcached: { name: 'Memcached', keywords: ['memcached'], logo: '', website: '' },
      redis: { name: 'Redis', keywords: ['redis'], logo: '', website: '' },
    },
  },
  database_nosql: {
    categoryName: 'NoSQL Databases',
    list: {
      cassandra: { name: 'Apache Cassandra', keywords: ['cassandra'], logo: '', website: '' },
      cosmosdb: { name: 'Azure Cosmos DB', keywords: ['cosmosdb', 'cosmos db'], logo: '', website: '' },
      couchbase: { name: 'Couchbase', keywords: ['couchbase'], logo: '', website: '' },
      couchdb: { name: 'Apache CouchDB', keywords: ['couchdb', 'couch db'], logo: '', website: '' },
      mongodb: { name: 'MongoDB', keywords: ['mongo', 'mongodb'], logo: '', website: '' },
    },
  },
  database_relational: {
    categoryName: 'Relational Databases',
    list: {
      mariadb: { name: 'MariaDB', keywords: ['mariadb', 'maria db'], logo: '', website: '' },
      mssql: { name: 'Microsoft SQL Server', keywords: ['mssql', 'ms sql', 'microsoft sql'], logo: '', website: '' },
      mysql: { name: 'MySQL', keywords: ['mysql', 'my sql'], logo: '', website: '' },
      oracle: { name: 'Oracle', keywords: ['oracledb', 'oracle db'], logo: '', website: '' },
      postgresql: { name: 'PostgreSQL', keywords: ['postgres', 'postgresql', 'postgre sql'], logo: '', website: '' },
    },
  },
  deployment: {
    categoryName: 'Deployment',
    list: {
      appengine: { name: 'Google App Engine', keywords: ['app engine', 'appengine'], logo: '', website: '' },
      azure: { name: 'Microsoft Azure', keywords: ['azure'], logo: '', website: '' },
      digitalocean: { name: 'DigitalOcean', keywords: ['digitalocean', 'digital ocean'], logo: '', website: '' },
      docker: { name: 'Docker', keywords: ['docker'], logo: '', website: '' },
      elasticbeanstalk: { name: 'AWS Elastic Beanstalk', keywords: ['elasticbeanstalk', 'elastic beanstalk'], logo: '', website: '' },
      heroku: { name: 'Heroku', keywords: ['heroku'], logo: '', website: '' },
    },
  },
  desktopApplication: {
    categoryName: 'Desktop Applications',
    list: {
      electron: { name: 'Electron', keywords: ['electron'], logo: '', website: '' },
    },
  },
  devops: {
    categoryName: 'DevOps',
    list: {
      ansible: { name: 'Ansible', keywords: ['ansible'], logo: '', website: '' },
      chef: { name: 'Chef', keywords: ['chef'], logo: '', website: '' },
      kubernetes: { name: 'Kubernetes', keywords: ['kubernetes'], logo: '', website: '' },
      maven: { name: 'Maven', keywords: ['maven'], logo: '', website: '' },
      puppet: { name: 'Puppet', keywords: ['puppet'], logo: '', website: '' },
      terraform: { name: 'Terraform', keywords: ['terraform'], logo: '', website: '' },
    },
  },
  framework: {
    categoryName: 'Frameworks',
    list: {
      angular: { name: 'Angular', keywords: ['angular', 'angularjs', 'angular.js'], logo: '', website: '' },
      aurelia: { name: 'Aurelia', keywords: ['aurelia', 'aureliajs', 'aurelia.js'], logo: '', website: '' },
      backbone: { name: 'Backbone.js', keywords: ['backbone', 'backbonejs', 'backbone.js'], logo: '', website: '' },
      ember: { name: 'Ember.js', keywords: ['ember', 'emberjs', 'ember.js'], logo: '', website: '' },
      mithril: { name: 'Mithril', keywords: ['mithril', 'mithriljs', 'mithril.js'], logo: '', website: '' },
      polymer: { name: 'Polymer', keywords: ['polymer', 'polymerjs', 'polymer.js'], logo: '', website: '' },
      react: { name: 'React', keywords: ['react', 'reactjs', 'react.js'], logo: '', website: '' },
      svelte: { name: 'Svelte', keywords: ['svelte'], logo: '', website: '' },
      vue: { name: 'Vue', keywords: ['vue', 'vuejs', 'vue.js'], logo: '', website: '' },
    },
  },
  framework_web: {
    categoryName: 'More Frameworks',
    list: {
      asp: { name: 'ASP.NET', keywords: ['asp', 'asp.net'], logo: '', website: '' },
      codeigniter: { name: 'CodeIgniter', keywords: ['codeigniter'], logo: '', website: '' },
      django: { name: 'Django', keywords: ['django'], logo: '', website: '' },
      express: { name: 'Express', keywords: ['express', 'expressjs', 'express.js'], logo: '', website: '' },
      extjs: { name: 'Ext JS', keywords: ['extjs', 'ext js'], logo: '', website: '' },
      flask: { name: 'Flask', keywords: ['flask'], logo: '', website: '' },
      grails: { name: 'Grails', keywords: ['grails'], logo: '', website: '' },
      hapi: { name: 'hapi', keywords: ['hapi'], logo: '', website: '' },
      knockout: { name: 'Knockout', keywords: ['knockout'], logo: '', website: '' },
      koa: { name: 'Koa', keywords: ['koa'], logo: '', website: '' },
      laravel: { name: 'Laravel', keywords: ['laravel'], logo: '', website: '' },
      meteor: { name: 'Meteor', keywords: ['meteor', 'meteorjs', 'meteor.js'], logo: '', website: '' },
      phoenix: { name: 'Phoenix', keywords: ['phoenix'], logo: '', website: '' },
      play: { name: 'Play Framework', keywords: ['play framework'], logo: '', website: '' },
      rails: { name: 'Ruby on Rails', keywords: ['ruby on rails', 'rails'], logo: '', website: '' },
      spring: { name: 'Spring/Spring Boot', keywords: ['spring', 'spring boot'], logo: '', website: '' },
      symfony: { name: 'Symfony', keywords: ['symfony'], logo: '', website: '' },
      yii: { name: 'Yii', keywords: ['yii'], logo: '', website: '' },
      zend: { name: 'Zend Framework', keywords: ['zend', 'zend framework'], logo: '', website: '' },
    },
  },
  language: {
    categoryName: 'Languages',
    list: {
      clojure: { name: 'Clojure', keywords: ['clojure'], logo: '', website: '' },
      csharp: { name: 'C#', keywords: ['c#', '.net'], logo: '', website: '' },
      ecmascript: { name: 'ECMAScript', keywords: ['es6', 'es7', 'es8', 'es9', 'es2015', 'es2016', 'es2017', 'es2018'], logo: '', website: '' },
      elixir: { name: 'Elixir', keywords: ['elixir'], logo: '', website: '' },
      erlang: { name: 'Erlang', keywords: ['erlang'], logo: '', website: '' },
      go: { name: 'Go', keywords: ['golang', 'go lang'], logo: '', website: '' },
      haskell: { name: 'Haskell', keywords: ['haskell'], logo: '', website: '' },
      java: { name: 'Java', keywords: ['java'], logo: '', website: '' },
      javascript: { name: 'JavaScript', keywords: ['javascript'], logo: '', website: '' },
      kotlin: { name: 'Kotlin', keywords: ['kotlin'], logo: '', website: '' },
      php: { name: 'PHP', keywords: ['php'], logo: '', website: '' },
      python: { name: 'Python', keywords: ['python'], logo: '', website: '' },
      ruby: { name: 'Ruby', keywords: ['ruby'], logo: '', website: '' },
      rust: { name: 'Rust', keywords: ['rust'], logo: '', website: '' },
      scala: { name: 'Scala', keywords: ['scala'], logo: '', website: '' },
      typescript: { name: 'TypeScript', keywords: ['typescript', 'type script'], logo: '', website: '' },
    },
  },
  messageBroker: {
    categoryName: 'Message Brokers',
    list: {
      activemq: { name: 'Apache ActiveMQ', keywords: ['activemq', 'active mq'], logo: '', website: '' },
      kafka: { name: 'Apache Kafka', keywords: ['kafka'], logo: '', website: '' },
      rabbitmq: { name: 'RabbitMQ', keywords: ['rabbitmq', 'rabbit mq'], logo: '', website: '' },
      wso2: { name: 'WSO2 Message Broker', keywords: ['wso2'], logo: '', website: '' },
    },
  },
  mobileApplication: {
    categoryName: 'Mobile Applications',
    list: {
      ionic: { name: 'Ionic', keywords: ['ionic'], logo: '', website: '' },
      flutter: { name: 'Flutter', keywords: ['flutter'], logo: '', website: '' },
      reactNative: { name: 'React Native', keywords: ['react native'], logo: '', website: '' },
    },
  },
  packageManager: {
    categoryName: 'Package Managers',
    list: {
      bower: { name: 'Bower', keywords: ['bower'], logo: '', website: '' },
      npm: { name: 'npm', keywords: ['npm'], logo: '', website: '' },
      yarn: { name: 'Yarn', keywords: ['yarn'], logo: '', website: '' },
    },
  },
  searchEngine: {
    categoryName: 'Search Engines',
    list: {
      elasticsearch: { name: 'Elasticsearch', keywords: ['elasticsearch', 'elastic search'], logo: '', website: '' },
      lucene: { name: 'Lucene', keywords: ['lucene'], logo: '', website: '' },
      solr: { name: 'Solr', keywords: ['solr'], logo: '', website: '' },
    },
  },
  ssr: {
    categoryName: 'Server Side Rendering',
    list: {
      next: { name: 'Next.js', keywords: ['nextjs', 'next.js'], logo: '', website: '' },
      nuxt: { name: 'Nuxt.js', keywords: ['nuxt.js'], logo: '', website: '' },
    },
  },
  stateManagement: {
    categoryName: 'State Management',
    list: {
      flux: { name: 'Flux', keywords: ['flux'], logo: '', website: '' },
      mobx: { name: 'MobX', keywords: ['mobx'], logo: '', website: '' },
      ngrx: { name: 'NgRx', keywords: ['ngrx'], logo: '', website: '' },
      redux: { name: 'Redux', keywords: ['redux'], logo: '', website: '' },
      rxjs: { name: 'RxJS', keywords: ['rxjs'], logo: '', website: '' },
      vuex: { name: 'Vuex', keywords: ['vuex'], logo: '', website: '' },
    },
  },
  staticSite: {
    categoryName: 'Static Site Generators',
    list: {
      gatsby: { name: 'Gatsby', keywords: ['gatsby'], logo: '', website: '' },
      hugo: { name: 'Hugo', keywords: ['hugo'], logo: '', website: '' },
      jekyll: { name: 'Jekyll', keywords: ['jekyll'], logo: '', website: '' },
      next: { name: 'Next.js', keywords: ['nextjs', 'next.js'], logo: '', website: '' },
      nuxt: { name: 'Nuxt.js', keywords: ['nuxt.js'], logo: '', website: '' },
    },
  },
  taskRunner: {
    categoryName: 'Task Runners',
    list: {
      grunt: { name: 'Grunt', keywords: ['grunt'], logo: '', website: '' },
      gulp: { name: 'Gulp', keywords: ['gulp'], logo: '', website: '' },
      npm: { name: 'npm', keywords: ['npm'], logo: '', website: '' },
    },
  },
  testing: {
    categoryName: 'Testing',
    list: {
      ava: { name: 'AVA', keywords: ['ava'], logo: '', website: '' },
      chai: { name: 'Chai', keywords: ['chai'], logo: '', website: '' },
      cypress: { name: 'Cypress', keywords: ['cypress'], logo: '', website: '' },
      enzyme: { name: 'Enzyme', keywords: ['enzyme'], logo: '', website: '' },
      jasmine: { name: 'Jasmine', keywords: ['jasmine'], logo: '', website: '' },
      jest: { name: 'Jest', keywords: ['jest'], logo: '', website: '' },
      karma: { name: 'Karma', keywords: ['karma'], logo: '', website: '' },
      mocha: { name: 'Mocha', keywords: ['mocha'], logo: '', website: '' },
      protractor: { name: 'Protractor', keywords: ['protractor'], logo: '', website: '' },
      sinon: { name: 'Sinon', keywords: ['sinon'], logo: '', website: '' },
      selenium: { name: 'Selenium', keywords: ['selenium'], logo: '', website: '' },
    },
  },
};

// requirejs, babel, jquery
// graphql, hadoop
// http clients: fetch, axios