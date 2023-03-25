function amp(e, n) {
	let context = new (window.AudioContext || window.webkitAudioContext);
	let result = {
		context: context,
		source: context.createMediaElementSource(e),
		gain: context.createGain(),
		media: e,
		amplify: n => result.gain.gain.value = n,
		getAmpLevel: () => result.gain.gain.value
	};

	result.source.connect(result.gain);
	result.gain.connect(context.destination);
	result.amplify(n);
	return result;
}

