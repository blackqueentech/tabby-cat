//window.onload = function() {
var counter = 3;
var limit = 15;

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('addLink');
    link.addEventListener('click', function() {
	    if (counter == limit) {
		alert("Tabby Cat says that's enough links, yeesh. 15 is enough.");
	    } else {
		var newdiv = document.createElement('div');
		newdiv.innerHTML = "Link " + (counter + 1) + " <br><input type='text' class='form-control' name='sessionLinks[]'><br/>";
		document.getElementById('linkList').appendChild(newdiv);
		counter++;
	    }
	});
    });
//}