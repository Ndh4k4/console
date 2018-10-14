(function() {
	console.log("bookmarklet starting");
	let paragraphs = document.getElementsByTagName('p');
	for (i = 0; i < paragraphs.length; i++){
		paragraphs[i].innerHTML = '';
    }
})();



function main() { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } }main();


(function() { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } }();

