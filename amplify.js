function amp(e, n) {
	const ctx = new AudioContext();
	const source = ctx.createMediaElementSource(e);

	const gain = ctx.createGain();
	gain.gain.value = n;
	source.connect(gain);

	gain.connect(ctx.destination);
}

