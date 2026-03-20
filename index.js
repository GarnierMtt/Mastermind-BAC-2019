
function RandomCouleur() {
	for (i = 1; i < 5; i++) {
		document.getElementById("b" + i).src = "Image/" + Math.floor(Math.random() * 6 + 1) + ".png";
	}
}

setInterval(RandomCouleur, 1000);
