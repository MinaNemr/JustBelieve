app.controller('mainController', function($scope, $http, $mdDialog){
		$http.get('/api/boys/top_boys').success(function(data){
		    $scope.topBoys = data;
		    $scope.topBoys[0].bar = (data[0].score /(data[0].score + 3) * 100);
		    $scope.topBoys[1].bar = (data[1].score/(data[0].score + 3) * 100);
		    $scope.topBoys[2].bar = (data[2].score/(data[0].score + 3) * 100);
	    });

	    $scope.submit = function(){
			$http.get('/api/boys/'+$scope.user_name).success(function(data) {
				if ((typeof data[0] != 'undefined') && $scope.id === ('' + data[0]._id)) {
					console.log("Yes");
					alert = $mdDialog.alert()
						.title('Your score is')
						.textContent(data[0].score)
						.ok('Thanks !!');
					$mdDialog
						.show(alert)
						.finally(function () {
							alert = undefined;
						});

				}
				else {

				alert = $mdDialog.alert()
					.title('Error')
					.textContent('Wrong User Name or ID, try again')
					.ok('Close');
				$mdDialog
					.show(alert)
					.finally(function () {
						alert = undefined;
					});
				console.log($scope.id);
			}
			});

	    }

});
