app.controller('mainController', function($scope, $http, $mdDialog){
	$scope.title= 'Ego Eimi';
		$http.get('/api/teams/top_teams').success(function(data){
		    $scope.topTeams = data;
		    $scope.topTeams[0].bar = data[0].score * 0.01;
		    $scope.topTeams[1].bar = data[1].score * 0.01;
		    $scope.topTeams[2].bar = data[2].score * 0.01;
		    $scope.topTeams[3].bar = data[3].score * 0.01;
		    $scope.topTeams[4].bar = data[0].score * 0.01;
		    $scope.topTeams[5].bar = data[1].score * 0.01;
		    $scope.topTeams[6].bar = data[2].score * 0.01;
		    $scope.topTeams[7].bar = data[3].score * 0.01;
	    });

	    $scope.teams = [
	    {
	    	color:'black',
	    	id:1
	    },
	    {
	    	color:'electric',
	    	id:2
	    },
	    {
	    	color:'blue',
	    	id:3
	    },
	    {
	    	color:'grey',
	    	id:4
	    },
	    {
	    	color:'yellow',
	    	id:5
	    },
	    {
	    	color:'orange',
	    	id:6
	    },
	    {
	    	color:'red',
	    	id:7
	    },
	    {
	    	color:'green',
	    	id:8
	    }
	    ];

	    $scope.behaviors = [
	    {
	    	name:'شتيمة',
	    	value:-20
	    },
	    {
	    	name:'ضرب',
	    	value:-70
	    },
	    {
	    	name:'عدم التزام',
	    	value:-100
	    },
	    {
	    	name:'عدم احترام الخدام',
	    	value:-150
	    },
	    {
	    	name:'عدم الهدوء',
	    	value:-50
	    },
	    {
	    	name:'اجابات',
	    	value:50
	    },
	    {
	    	name:'التزام',
	    	value:130
	    },
	    {
	    	name:'نظافة',
	    	value:100
	    },
	    {
	    	name:'هدوء',
	    	value:70
	    },
	    {
	    	name:'روحانية',
	    	value:200
	    }
	    ];

	    $scope.submit = function(){
	    	if($scope.code == 159){
	    		$http({
					  method: 'PUT',
					  url: '/api/teams/'+$scope.selectedTeam+'/'+$scope.selectedBehavior
					}).then(function successCallback(response) {
						$http.get('/api/teams/top_teams').success(function(data){
						    $scope.topTeams = data;
						    $scope.topTeams[0].bar = data[0].score * 0.01;
						    $scope.topTeams[1].bar = data[1].score * 0.01;
						    $scope.topTeams[2].bar = data[2].score * 0.01;
						    $scope.topTeams[3].bar = data[3].score * 0.01;
						    $scope.topTeams[4].bar = data[0].score * 0.01;
						    $scope.topTeams[5].bar = data[1].score * 0.01;
						    $scope.topTeams[6].bar = data[2].score * 0.01;
						    $scope.topTeams[7].bar = data[3].score * 0.01;
						    $mdDialog.hide();
					    });
					  }, function errorCallback(response) {
					  	alert = $mdDialog.alert()
				        .title('failure')
				        .textContent('Score not Updated !!')
				        .ok('Close');
				      $mdDialog
				          .show( alert )
				          .finally(function() {
				            alert = undefined;
				          });
					  });

	    		
		    }
	    	else
	    		alert = $mdDialog.alert()
		        .title('error')
		        .textContent('wrong code')
		        .ok('Close');
		      $mdDialog
		          .show( alert )
		          .finally(function() {
		            alert = undefined;
		          });
	    }

});