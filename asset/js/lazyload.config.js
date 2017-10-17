(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
		 			name: 'guide',
		 			files: [
		 				'./controller/guideController.js',
		 				'./asset/css/guide.css',
		 			]
		 		},

		 		{
		 			name: 'login',
		 			files: [
		 				'./controller/loginController.js',
		 				"./asset/css/login.css"
		 			]
		 		},

		 		{
		 			name: 'personal',
		 			files: [
		 				'./controller/personalController.js',
		 				"./asset/css/personal.css",
		 				"./asset/css/bottom.css"
		 			]
		 		},

		 		{
		 			name: 'register',
		 			files: [
		 				'./controller/registerController.js',
		 				"./asset/css/register.css",
		 			]
		 		},

		 		{
		 			name: 'repass',
		 			files: [
		 				'./controller/repassController.js',
		 				"./asset/css/repass.css",
		 			]
		 		},

		 		{
		 			name: 'personalData',
		 			files: [
		 				'./controller/personalDataController.js',
		 				"./asset/css/personalData.css",
		 			]
		 		},

		 		{
		 			name: 'personalMain',
		 			files: [
		 				'./controller/personalMainController.js',
		 			]
		 		},

		 		{
		 			name: 'check',
		 			files: [
		 				'./controller/checkController.js',
		 				"./asset/css/check.css",
		 			]
		 		},

		 		{
		 			name: 'contacts',
		 			files: [
		 				'./controller/contactsController.js',
		 				"./asset/css/contacts.css",
		 				"./asset/css/bottom.css",
		 			]
		 		},

		 		{
		 			name: 'info',
		 			files: [
		 				'./controller/infoController.js',
		 				"./asset/css/info.css",
		 				"./asset/css/bottom.css"
		 			]
		 		},

		 		{
		 			name: 'chat',
		 			files: [
		 				'./controller/chatController.js',
		 				"./asset/css/chat.css",
		 			]
		 		},

		 		{
		 			name: 'search',
		 			files: [
		 				'./controller/searchController.js',
		 				"./asset/css/search.css"
		 			]
		 		},

		 		{
		 			name: 'take',
		 			files: [
		 				'./asset/css/take.css',
		 				'./controller/takeController.js',
		 			]
		 		},

		 		{
		 			name: 'review',
		 			files: [
		 				'./service/calendarService.js',
		 				'./controller/reviewController.js',
		 				"./asset/css/review.css",
		 			]
		 		},

		 		{
		 			name: 'detailed',
		 			files: [
		 				'./controller/detailedController.js',
		 				"./asset/css/detailed.css"
		 			]
		 		},

	 		]
 		});
	}]);
	
})();