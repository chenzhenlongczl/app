angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

		
		//$urlRouterProvider 路由默认路径
		$urlRouterProvider.otherwise('/guide1');

		//$stateProvider 路由配置状态
		$stateProvider

			.state('guide1', {
				url: '/guide1',
				templateUrl: './view/guide1.html',
				controller: 'guideController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('guide');
					}],
				},

			})

			.state('guide2', {
				url: '/guide2',
				templateUrl: './view/guide2.html',
				controller: 'guideController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('guide');
					}],
				},
			})

			.state('guide3', {
				url: '/guide3',
				templateUrl: './view/guide3.html',
				controller: 'guideController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('guide');
					}],
				},
			})

			.state('login',{
				url: '/login',
				templateUrl: './view/login.html',
				controller: 'loginController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('login');
					}],
				},
				css: './asset/css/login.css',
			})

			.state('personalMain', {
				url: '',
				abstract: true,
				templateUrl: './view/personalMain.html',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('personalMain');
					}],
				},
			})

			.state('personalMain.personal', {
				url: '/personalMain/personal',
				templateUrl: './view/personal.html',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('personal');
					}],
				},
			})

			.state('personalMain.info', {
				url: '/personalMain/info',
				templateUrl: './view/info.html',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('info');
					}],
				},
			})

			.state('personalMain.contacts', {
				url: '/personalMain/contacts',
				templateUrl: './view/contacts.html',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('contacts');
					}],
				},
			})

			.state('register', {
				url: '/register',
				templateUrl: './view/register.html',
				controller: 'registerController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('register');
					}],
				},
			})

			.state('repass', {
				url: '/repass',
				templateUrl: './view/repass.html',
				controller: 'repassController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('repass');
					}],
				},
			})

			.state('personalData', {
				url: '/personalData',
				templateUrl: './view/personalData.html',
				
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('personalData');
					}],
				},
			})

			.state('check', {
				url: '/check',
				templateUrl: './view/check.html',
				controller: 'checkController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('check');
					}],
				},
			})

			.state('chat', {
				url: '/chat',
				templateUrl: './view/chat.html',
				controller: 'chatController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('chat');
					}],
				},
			})

			.state('search', {
				url: '/search',
				templateUrl: './view/search.html',
				controller: 'searchController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('search');
					}],
				},
			})

			.state('take', {
				url: '/take',
				templateUrl: './view/take.html',
				controller: 'takeController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('take');
					}],
				},
			})

			.state('review', {
				url: '/review',
				templateUrl: './view/review.html',
				controller: 'reviewController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('review');
					}],
				},
			})

			.state('detailed', {
				url: '/detailed',
				templateUrl: './view/detailed.html',
				controller: 'detailedController',
				resolve: {
					des : ['$ocLazyLoad', function($ocLazyLoad){
						return $ocLazyLoad.load('detailed');
					}],
				},
			})


	}])
;