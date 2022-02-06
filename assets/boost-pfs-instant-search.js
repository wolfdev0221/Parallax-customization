// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		enableSearch: false,
		enableSuggestion: true,
	}
};

(function() {
	BoostPFS.inject(this);

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function() {
		var suggestionElement = this.$uiMenuElement;
		var searchElement = this.$element;
		var searchBoxId = this.id;
	};
})();