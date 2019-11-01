const store_SQLReady = {
  'api-dev': {
    categoryname: 'API/Backend Dev',
    list: {
      express: { name: 'Express', keywords: ['express', 'expressjs', 'express.js'], website: 'http://expressjs.com' },
      graphql: { name: 'GraphQL', keywords: ['graphql', 'graph ql'], website: 'https://graphql.org' },
      hapi: { name: 'hapi', keywords: ['hapi'], website: 'https://hapi.dev' },
      koa: { name: 'Koa', keywords: ['koa'], website: 'https://koajs.com' },
      loopback: { name: 'LoopBack', keywords: ['loopback'], website: 'https://loopback.io' },
      meteor: { name: 'Meteor', keywords: ['meteor', 'meteorjs', 'meteor.js'], website: 'https://www.meteor.com' },
      nodejs: { name: 'Node.js', keywords: ['nodejs', 'node js', 'node.js'], website: 'https://nodejs.org' },
      rest: { name: 'REST', keywords: ['rest api', 'rest apis', 'restful'], website: 'https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm' },
      swagger: { name: 'Swagger', keywords: ['swagger'], website: 'https://swagger.io' },
    },
  },
  'app-dev-desktop': {
    categoryname: 'Desktop App Dev',
    list: {
      electron: { name: 'Electron', keywords: ['electron'], website: 'https://electronjs.org' },
    },
  },
  'app-dev-mobile': {
    categoryname: 'Mobile App Dev',
    list: {
      ionic: { name: 'Ionic', keywords: ['ionic'], website: 'https://ionicframework.com' },
      flutter: { name: 'Flutter', keywords: ['flutter'], website: 'https://flutter.dev' },
      reactnative: { name: 'React Native', keywords: ['react native'], website: 'https://facebook.github.io/react-native' },
    },
  },
  authentication: {
    categoryname: 'Authentication',
    list: {
      jwt: { name: 'JSON Web Token', keywords: ['jwt', 'json web token'], website: 'https://jwt.io' },
      oauth: { name: 'OAuth', keywords: ['oauth', 'oauth2'], website: 'https://oauth.net' },
      openid: { name: 'OpenID', keywords: ['openid'], website: 'https://openid.net' },
    },
  },
  bundler: {
    categoryname: 'Bundlers',
    list: {
      browserify: { name: 'Browserify', keywords: ['browserify'], website: 'http://browserify.org' },
      parcel: { name: 'Parcel', keywords: ['parcel'], website: 'https://parceljs.org' },
      rollup: { name: 'Rollup', keywords: ['rollup'], website: 'http://rollupjs.org' },
      webpack: { name: 'webpack', keywords: ['webpack'], website: 'https://webpack.js.org' },
    },
  },
  cicd: {
    categoryname: 'CI/CD',
    list: {
      circleci: { name: 'CircleCI', keywords: ['circleci', 'circle ci'], website: 'https://circleci.com' },
      jenkins: { name: 'Jenkins', keywords: ['jenkins', 'jenkin'], website: 'https://jenkins.io' },
      teamcity: { name: 'TeamCity', keywords: ['teamcity', 'team city'], website: 'https://jetbrains.com/teamcity' },
      travisci: { name: 'Travis CI', keywords: ['travisci', 'travis ci'], website: 'https://travis-ci.com' },
    },
  },
  'css-architecture': {
    categoryname: 'CSS Architecture',
    list: {
      bem: { name: 'BEM', keywords: ['bem'], website: 'https://en.bem.info' },
      oocss: { name: 'OOCSS', keywords: ['oocss'], website: 'http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code' },
      smacss: { name: 'SMACSS', keywords: ['smacss'], website: 'http://smacss.com' },
    },
  },
  'css-framework': {
    categoryname: 'CSS Frameworks',
    list: {
      bootstrap: { name: 'Bootstrap', keywords: ['bootstrap'], website: 'https://getbootstrap.com' },
      bulma: { name: 'Bulma', keywords: ['bulma'], website: 'https://bulma.io' },
      materialize: { name: 'Materialize', keywords: ['materialize', 'materializecss'], website: 'https://materializecss.com' },
      materialui: { name: 'Material-UI', keywords: ['materialui', 'material ui', 'material-ui'], website: 'https://material-ui.com' },
      semanticui: { name: 'Semantic UI', keywords: ['semanticui', 'semantic ui'], website: 'https://semantic-ui.com' },
      tailwind: { name: 'Tailwind CSS', keywords: ['tailwind', 'tailwindcss'], website: 'https://tailwindcss.com' },
    },
  },
  'css-preprocessor': {
    categoryname: 'CSS Preprocessors',
    list: {
      less: { name: 'LESS', useAnd: true, keywords: ['less', 'css'], website: 'http://lesscss.org' },
      postcss: { name: 'PostCSS', keywords: ['postcss', 'post css'], website: 'https://postcss.org' },
      sass: { name: 'Sass / SCSS', keywords: ['sass', 'scss', 'sassy'], website: 'https://sass-lang.com' },
      stylus: { name: 'Stylus', keywords: ['stylus'], website: 'http://stylus-lang.com' },
    },
  },
  'database-inmemory': {
    categoryname: 'In-Memory Databases',
    list: {
      aerospike: { name: 'Aerospike', keywords: ['aerospike'], website: 'https://www.aerospike.com' },
      memcached: { name: 'Memcached', keywords: ['memcached'], website: 'http://memcached.org' },
      redis: { name: 'Redis', keywords: ['redis'], website: 'https://redis.io' },
    },
  },
  'database-nosql': {
    categoryname: 'NoSQL Databases',
    list: {
      cassandra: { name: 'Cassandra', keywords: ['cassandra'], website: 'http://cassandra.apache.org' },
      cosmosdb: { name: 'Cosmos DB', keywords: ['cosmosdb', 'cosmos db'], website: 'https://azure.microsoft.com/en-us/services/cosmos-db' },
      couchbase: { name: 'Couchbase', keywords: ['couchbase', 'couch base'], website: 'https://www.couchbase.com' },
      couchdb: { name: 'CouchDB', keywords: ['couchdb', 'couch db'], website: 'http://couchdb.apache.org' },
      mongodb: { name: 'MongoDB', keywords: ['mongo', 'mongodb'], website: 'https://www.mongodb.com' },
    },
  },
  'database-relational': {
    categoryname: 'Relational Databases',
    list: {
      mariadb: { name: 'MariaDB', keywords: ['mariadb', 'maria db'], website: 'https://mariadb.com' },
      mssql: { name: 'Microsoft SQL Server', keywords: ['mssql', 'ms sql', 'microsoft sql', 'microsoftsql', 'sql server'], website: 'https://www.microsoft.com/en-us/sql-server' },
      mysql: { name: 'MySQL', keywords: ['mysql', 'my sql'], website: 'https://www.mysql.com' },
      oracle: { name: 'Oracle', keywords: ['oracledb', 'oracle db'], website: 'https://www.oracle.com/database' },
      postgresql: { name: 'PostgreSQL', keywords: ['postgres', 'postgresql', 'postgre sql', 'postgre'], website: 'https://www.postgresql.org' },
    },
  },
  deployment: {
    categoryname: 'Deployment',
    list: {
      appengine: { name: 'Google App Engine', keywords: ['app engine', 'appengine'], website: 'https://cloud.google.com/appengine' },
      azure: { name: 'Microsoft Azure', keywords: ['azure'], website: 'https://azure.microsoft.com' },
      digitalocean: { name: 'DigitalOcean', keywords: ['digitalocean', 'digital ocean'], website: 'https://www.digitalocean.com' },
      docker: { name: 'Docker', keywords: ['docker'], website: 'https://www.docker.com' },
      elasticbeanstalk: { name: 'AWS Elastic Beanstalk', keywords: ['elasticbeanstalk', 'elastic beanstalk'], website: 'https://aws.amazon.com/elasticbeanstalk' },
      heroku: { name: 'Heroku', keywords: ['heroku'], website: 'https://www.heroku.com' },
    },
  },
  'devops': {
    categoryname: 'DevOps',
    list: {
      ansible: { name: 'Ansible', keywords: ['ansible'], website: 'https://www.ansible.com' },
      chef: { name: 'Chef', keywords: ['chef'], website: 'https://www.chef.io' },
      gitlab: { name: 'GitLab', keywords: ['gitlab', 'git lab'], website: 'https://about.gitlab.com' },
      kubernetes: { name: 'Kubernetes', keywords: ['kubernetes'], website: 'https://kubernetes.io' },
      maven: { name: 'Maven', keywords: ['maven'], website: 'http://maven.apache.org' },
      openshift: { name: 'OpenShift', keywords: ['openshift', 'open shift'], website: 'https://www.openshift.com' },
      puppet: { name: 'Puppet', keywords: ['puppet'], website: 'https://puppet.com' },
      terraform: { name: 'Terraform', keywords: ['terraform'], website: 'https://www.terraform.io' },
    },
  },
  'framework-js': {
    categoryname: 'Frontend JS Frameworks',
    list: {
      angular: { name: 'Angular', keywords: ['angular', 'angularjs', 'angular.js', 'angular2', 'angular3', 'angular4', 'angular5', 'angular6', 'angular7', 'angular8'], website: 'https://angular.io' },
      aurelia: { name: 'Aurelia', keywords: ['aurelia', 'aureliajs', 'aurelia.js'], website: 'https://aurelia.io' },
      backbone: { name: 'Backbone.js', keywords: ['backbone', 'backbonejs', 'backbone.js'], website: 'https://backbonejs.org' },
      ember: { name: 'Ember.js', keywords: ['ember', 'emberjs', 'ember.js'], website: 'https://emberjs.com' },
      extjs: { name: 'Ext JS', keywords: ['extjs', 'ext js'], website: 'https://www.sencha.com/products/extjs' },
      knockout: { name: 'Knockout', keywords: ['knockout'], website: 'https://knockoutjs.com' },
      mithril: { name: 'Mithril', keywords: ['mithril', 'mithriljs', 'mithril.js'], website: 'https://mithril.js.org' },
      polymer: { name: 'Polymer', keywords: ['polymer', 'polymerjs', 'polymer.js'], website: 'https://www.polymer-project.org' },
      react: { name: 'React', keywords: ['react', 'reactjs', 'react.js'], website: 'https://reactjs.org' },
      svelte: { name: 'Svelte', keywords: ['svelte'], website: 'https://svelte.dev' },
      vue: { name: 'Vue', keywords: ['vue', 'vuejs', 'vue.js'], website: 'https://vuejs.org' },
    },
  },
  'framework-other': {
    categoryname: 'Other Web Frameworks',
    list: {
      asp: { name: 'ASP.NET', keywords: ['asp', 'asp.net'], website: 'https://dotnet.microsoft.com/apps/aspnet' },
      codeigniter: { name: 'CodeIgniter', keywords: ['codeigniter'], website: 'https://codeigniter.com' },
      django: { name: 'Django', keywords: ['django'], website: 'https://www.djangoproject.com' },
      flask: { name: 'Flask', keywords: ['flask'], website: 'https://palletsprojects.com/p/flask' },
      grails: { name: 'Grails', keywords: ['grails'], website: 'https://grails.org' },
      hadoop: { name: 'Hadoop', keywords: ['hadoop'], website: 'http://hadoop.apache.org' },
      laravel: { name: 'Laravel', keywords: ['laravel'], website: 'https://laravel.com' },
      phoenix: { name: 'Phoenix', keywords: ['phoenix'], website: 'https://phoenixframework.org' },
      play: { name: 'Play Framework', keywords: ['play framework'], website: 'https://www.playframework.com' },
      rails: { name: 'Ruby on Rails', keywords: ['ruby on rails', 'rails'], website: 'https://rubyonrails.org' },
      spring: { name: 'Spring / Spring Boot', keywords: ['spring', 'spring boot'], website: 'https://spring.io' },
      symfony: { name: 'Symfony', keywords: ['symfony'], website: 'https://symfony.com' },
      yii: { name: 'Yii', keywords: ['yii'], website: 'https://www.yiiframework.com' },
      zend: { name: 'Zend Framework', keywords: ['zend', 'zend framework'], website: 'https://framework.zend.com' },
    },
  },
  language: {
    categoryname: 'Languages',
    list: {
      clojure: { name: 'Clojure', keywords: ['clojure'], website: 'https://clojure.org' },
      csharp: { name: 'C#', keywords: ['c#', '.net'], website: 'https://docs.microsoft.com/en-us/dotnet/csharp' },
      ecmascript: { name: 'ECMAScript', keywords: ['es6', 'es7', 'es8', 'es9', 'es2015', 'es2016', 'es2017', 'es2018'], website: 'https://www.ecma-international.org/publications/standards/Ecma-262.htm' },
      elixir: { name: 'Elixir', keywords: ['elixir'], website: 'https://elixir-lang.org' },
      erlang: { name: 'Erlang', keywords: ['erlang'], website: 'https://www.erlang.org' },
      go: { name: 'Go', keywords: ['golang', 'go lang'], website: 'https://golang.org' },
      haskell: { name: 'Haskell', keywords: ['haskell'], website: 'https://www.haskell.org' },
      java: { name: 'Java', keywords: ['java'], website: 'https://www.java.com' },
      javascript: { name: 'JavaScript', keywords: ['javascript'], website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      kotlin: { name: 'Kotlin', keywords: ['kotlin'], website: 'https://kotlinlang.org' },
      php: { name: 'PHP', keywords: ['php'], website: 'https://www.php.net' },
      python: { name: 'Python', keywords: ['python'], website: 'https://www.python.org' },
      ruby: { name: 'Ruby', keywords: ['ruby'], website: 'https://www.ruby-lang.org' },
      rust: { name: 'Rust', keywords: ['rust'], website: 'https://www.rust-lang.org' },
      scala: { name: 'Scala', keywords: ['scala'], website: 'https://www.scala-lang.org' },
      typescript: { name: 'TypeScript', keywords: ['typescript', 'type script'], website: 'http://www.typescriptlang.org' },
    },
  },
  'library-js': {
    categoryname: 'JavaScript Libraries',
    list: {
      d3: { name: 'D3', keywords: ['d3js', 'd3 js', 'd3.js'], website: 'https://d3js.org' },
      jquery: { name: 'jQuery', keywords: ['jquery'], website: 'https://jquery.com' },
      lodash: { name: 'Lodash', keywords: ['lodash'], website: 'https://lodash.com' },
      requirejs: { name: 'RequireJS', keywords: ['requirejs', 'require js', 'require.js'], website: 'https://requirejs.org' },
      threejs: { name: 'three.js', keywords: ['threejs', 'three js', 'three.js'], website: 'https://threejs.org' },
      underscore: { name: 'Underscore', keywords: ['underscore', 'underscore.js'], website: 'https://underscorejs.org' },
    },
  },
  messagebroker: {
    categoryname: 'Message Brokers',
    list: {
      activemq: { name: 'ActiveMQ', keywords: ['activemq', 'active mq'], website: 'http://activemq.apache.org' },
      kafka: { name: 'Kafka', keywords: ['kafka'], website: 'http://kafka.apache.org' },
      rabbitmq: { name: 'RabbitMQ', keywords: ['rabbitmq', 'rabbit mq'], website: 'https://www.rabbitmq.com' },
      wso2: { name: 'WSO2 Message Broker', keywords: ['wso2'], website: 'https://wso2.com/products/message-broker' },
    },
  },
  packagemanager: {
    categoryname: 'Package Managers',
    list: {
      bower: { name: 'Bower', keywords: ['bower'], website: 'https://bower.io' },
      npm: { name: 'npm', keywords: ['npm', 'node package manager'], website: 'https://www.npmjs.com' },
      yarn: { name: 'Yarn', keywords: ['yarn'], website: 'https://yarnpkg.com' },
    },
  },
  searchengine: {
    categoryname: 'Search Engines',
    list: {
      elasticsearch: { name: 'Elasticsearch', keywords: ['elasticsearch', 'elastic search'], website: 'https://www.elastic.co/products/elasticsearch' },
      lucene: { name: 'Lucene', keywords: ['lucene'], website: 'http://lucene.apache.org' },
      solr: { name: 'Solr', keywords: ['solr'], website: 'https://lucene.apache.org/solr' },
    },
  },
  ssg: {
    categoryname: 'Static Site Generators',
    list: {
      gatsby: { name: 'Gatsby', keywords: ['gatsby'], website: 'https://www.gatsbyjs.org' },
      hugo: { name: 'Hugo', keywords: ['hugo'], website: 'https://gohugo.io' },
      jekyll: { name: 'Jekyll', keywords: ['jekyll'], website: 'https://jekyllrb.com' },
      next: { name: 'Next.js', keywords: ['nextjs', 'next js', 'next.js'], website: 'https://zeit.co/blog/next' },
      nuxt: { name: 'Nuxt.js', keywords: ['nuxtjs', 'nuxt js', 'nuxt.js'], website: 'https://nuxtjs.org' },
    },
  },
  ssr: {
    categoryname: 'Server Side Rendering',
    list: {
      // next: { name: 'Next.js', keywords: ['nextjs', 'next js', 'next.js'], website: 'https://zeit.co/blog/next' },
      // nuxt: { name: 'Nuxt.js', keywords: ['nuxtjs', 'nuxt js', 'nuxt.js'], website: 'https://nuxtjs.org' },
    },
  },
  statemanagement: {
    categoryname: 'State Management',
    list: {
      flux: { name: 'Flux', keywords: ['flux'], website: 'http://facebook.github.io/flux' },
      mobx: { name: 'MobX', keywords: ['mobx'], website: 'https://mobx.js.org' },
      ngrx: { name: 'NgRx', keywords: ['ngrx'], website: 'https://ngrx.io' },
      redux: { name: 'Redux', keywords: ['redux'], website: 'https://redux.js.org' },
      rxjs: { name: 'RxJS', keywords: ['rxjs', 'rx js'], website: 'https://rxjs-dev.firebaseapp.com' },
      vuex: { name: 'Vuex', keywords: ['vuex'], website: 'https://vuex.vuejs.org' },
    },
  },
  taskrunner: {
    categoryname: 'Task Runners',
    list: {
      grunt: { name: 'Grunt', keywords: ['grunt'], website: 'https://gruntjs.com' },
      gulp: { name: 'gulp', keywords: ['gulp'], website: 'https://gulpjs.com' },
      // npm: { name: 'npm', keywords: ['npm', 'node package manager'], website: 'https://www.npmjs.com' },
    },
  },
  testing: {
    categoryname: 'Testing',
    list: {
      ava: { name: 'AVA', keywords: ['ava'], website: 'https://github.com/avajs/ava' },
      chai: { name: 'Chai', keywords: ['chai'], website: 'https://www.chaijs.com' },
      cypress: { name: 'Cypress', keywords: ['cypress'], website: 'https://www.cypress.io' },
      enzyme: { name: 'Enzyme', keywords: ['enzyme'], website: 'https://airbnb.io/enzyme' },
      jasmine: { name: 'Jasmine', keywords: ['jasmine'], website: 'https://jasmine.github.io' },
      jest: { name: 'Jest', keywords: ['jest'], website: 'https://jestjs.io' },
      karma: { name: 'Karma', keywords: ['karma'], website: 'http://karma-runner.github.io' },
      mocha: { name: 'Mocha', keywords: ['mocha'], website: 'https://mochajs.org' },
      protractor: { name: 'Protractor', keywords: ['protractor'], website: 'http://www.protractortest.org' },
      sinon: { name: 'Sinon', keywords: ['sinon'], website: 'https://sinonjs.org' },
      selenium: { name: 'Selenium', keywords: ['selenium'], website: 'https://www.seleniumhq.org' },
    },
  },
};

module.exports = store_SQLReady;