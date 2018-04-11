const processLangFromBrowser = (acceptLangFromBrowser) => {
	const lang = acceptLangFromBrowser.split(',')[0].split('-');
	const primaryTag = lang[0].toLowerCase();
	const regionTag = lang.length > 1 ? lang[1].toLowerCase() : primaryTag;

	const acceptedLangs = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];

	let queryLang;

	if (acceptedLangs.includes(regionTag)) {
		queryLang = regionTag;
	} else if (acceptedLangs.includes(primaryTag.toLowerCase())) {
		queryLang = primaryTag;
	} else {
		queryLang = 'gb';
	}

	return queryLang;
};

module.exports = {
	processLangFromBrowser,
};
