CUORE.Utils.JsonParser = function() {

	this.parse = function(json) {

		var parsed = json;
		var isString = (typeof json === 'string');
		if (isString) {
			parsed = JSON.parse(json);
		}

		result = {};

		result.header = this._removeNulls(parsed.header);
		result.query = this._removeNulls(parsed.query);
		result.answer = this._removeNulls(parsed.answer);

		return result;
	};

	this._removeNulls = function(filtered) {
		for (var key in filtered) {
			if (CUORE.Core.isOwnProperty(filtered, key) && !filtered[key]) {
				delete filtered[key];
			}
		}
		return filtered;
	}

};