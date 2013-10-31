// String.format function
if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) {
			return typeof args[number] != 'undefined'
					? args[number]
					: match
					;
		});
	};
}

// Console hack for IE and debugging management
new function () {
	var debug = true;
	var original = window.console;
	window.console = {};
	[
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time',
		'timeEnd', 'timeStamp', 'trace', 'warn'
	].forEach(function (method) {
		console[method] = function () {
			return (debug && original) ? original[method].apply(original, arguments) : undefined;
		}
	});
};
