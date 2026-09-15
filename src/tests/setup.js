// Setup mock for Element.prototype.animate to prevent unhandled animation cancel rejections in Happy-DOM
if (typeof Element !== 'undefined') {
	Element.prototype.animate = () => ({
		cancel: () => { },
		finish: () => { },
		pause: () => { },
		play: () => { },
		reverse: () => { },
		addEventListener: () => { },
		removeEventListener: () => { },
		finished: Promise.resolve(),
		onfinish: null,
		oncancel: null
	});
}

