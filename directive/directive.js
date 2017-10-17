app.directive('infoDirective', ['$state',function($state){
		return {
			templateUrl: './view/bottom.html',
			controller: 'personalMainController',
			link: function($scope, $element, $attrs){

				$scope.imgUrl = ['./asset/images/info-img1.png', './asset/images/personal-img6.png', './asset/images/info-img12.png'];
				$scope.font = ['active', '', ''];
				$scope.jump = function(url){

					$state.go(url);
				
				}
				
			},

			
		};
}]);

app.directive('contactsDirective', ['$state',function($state){
		return {
			templateUrl: './view/bottom.html',
			controller: 'personalMainController',
			link: function($scope, $element, $attrs){

				$scope.imgUrl = ['./asset/images/personal-img7.png', './asset/images/contacts-img4.png', './asset/images/info-img12.png'];
				$scope.font = ['', 'active', ''];
				$scope.jump = function(url){

					$state.go(url);
				
				}
				
			},

			
		};
}]);
app.directive('personalDirective', ['$state',function($state){
		return {
			templateUrl: './view/bottom.html',
			controller: 'personalMainController',
			link: function($scope, $element, $attrs){

				$scope.imgUrl = ['./asset/images/personal-img7.png', './asset/images/personal-img6.png', './asset/images/personal-img8.png'];
				$scope.font = ['', '', 'active'];
				$scope.jump = function(url){

					$state.go(url);
				
				}
				
			},

			
		};
}]);







