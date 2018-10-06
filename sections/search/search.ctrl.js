'use strict';

angular
		.module('app.core')
		.controller('SearchController', function(ShowService, $timeout) {
				var vm = this;

				init();

				function init() {
						vm.results = false;
						vm.searching = false;
				}

				vm.query = (query) => {
						vm.searching = true;

						ShowService.search(query)
								.then((res) => {
										vm.results = res;
										$timeout(() => {
												vm.searching = false;
										}, 500);
								}).
								catch((err) => {
										console.log(err);
								});
				};
		});
