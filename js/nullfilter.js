angular.module('vtApp').filter('nullFilter', function() {
	return function(input, replacementText) {
		if (input == null) {
			return replacementText;
		}
		return input;
	};
});
