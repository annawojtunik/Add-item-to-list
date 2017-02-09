// plik scripts.js

var	list = document.getElementById('Lista'),
	add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
	var itemsByTagName = list.getElementsByTagName('li').length;
	list.innerHTML += '<li>item '+ itemsByTagName +'</li>';
});