(function () {
	const iframe = document.getElementById('appointy-iframe');
	window.addEventListener('message', function (e) {
		const data = e.data || {};
		if (data.type === 'height') {
			iframe.style.height = data.data + 'px';
		}
		if (data.type === 'scroll') {
			iframe.scrollIntoView();
		}
	});
})();
