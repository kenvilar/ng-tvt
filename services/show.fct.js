angular.
		module('app.services', []).
		constant('API_KEY', '87de9879e74c828116acce677f6f255b').
		constant('BASE_URL', 'http://api.themoviedb.org/3').
		factory('ShowService', dataService);

function dataService($http, API_KEY, BASE_URL, $log) {
		function makeRequests(url, params) {
				var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;

				angular.forEach(params, function(value, key) {
						requestUrl = requestUrl + '&' + key + '=' + value;
				});

				return $http({
						'url': requestUrl,
						'method': 'GET',
						'headers': {
								'Content-Type': 'application/json'
						},
						'cache': true
				}).
						then((res) => {
								return res.data;
						}).
						catch(dataServiceError);
		}

		function get(id) {
				return makeRequests('tv/' + id, {});
		}
		
		function dataServiceError(error) {
				$log.error('XHR Failed for ShowService');
				$log.error(error);

				return error;
		}

		return {
				'get': get
		};
}