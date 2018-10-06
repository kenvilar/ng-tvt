angular.
		module('app.core')
		.controller('SearchController', function(ShowService) {
				'ngInject';

				var vm = this;

				vm.query = (query) => {
						ShowService.search(query).
								then((res) => {
										console.log(res);
								}).
								catch((err) => {
										console.log(err);
								});
				};

				vm.query("Game of Thrones");
		});
