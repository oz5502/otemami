angular.module('app.routes', [])

// 強制的にタブメニューを下段へ配置（Android対応）
//.config(function($stateProvider, $urlRouterProvider) {
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


  // 強制的にタブメニューを下段へ配置（Android対応）
  $ionicConfigProvider.tabs.position('bottom'); 

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.page2', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('cloudTabDefaultPage', {
    url: '/page4',
    templateUrl: 'templates/cloudTabDefaultPage.html',
    controller: 'cloudTabDefaultPageCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page5', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('tabsController.page6', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('tabsController.page7', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/page7.html',
        controller: 'page7Ctrl'
      }
    }
  })

  .state('tabsController.page8', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/page8.html',
        controller: 'page8Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});