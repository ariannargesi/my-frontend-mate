export default function isVarName(str) {
	if (typeof str !== 'string') {
		return false;
	}

	if (str.trim() !== str) {
		return false;
	}

	try {
		new Function(str, 'var ' + str);
	} catch (_) {
		return false;
	}

	return true;
}