(function() {
	console.log("bookmarklet starting");
	let paragraphs = document.getElementsByTagName('p');
	for (i = 0; i < paragraphs.length; i++){
		paragraphs[i].innerHTML = '';
    }
})();
