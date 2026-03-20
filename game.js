var
	couleur1 = 0,
	couleur2 = 0,
	couleur3 = 0,
	couleur4 = 0,
	c1,
	c2,
	c3,
	c4,
	couleurListe = [0, 0, 0, 0],
	codeListe = [0, 0, 0, 0],
	afficheListe = [0, 0, 0, 0],
	bon,
	oups,
	i,
	k,
	b = 0;

function toggle() {
	if (b == 0) {
		code.style.display = "none";
		cadenat.style.display = "inherit";
		b = 1;
	} else {
	code.style.display = "inherit";
	cadenat.style.display = "none";
	b = 0;
	}
}


function valide() {
	var temp = '<div class="ligne">';
	couleurListe = [couleur1, couleur2, couleur3, couleur4];
	codeListe = [c1, c2, c3, c4];
	bon = 0;
	oups = 0;

	for (i = 0; i < 4; i++) {
		afficheListe[i] = couleurListe[i];
	}

	for (i = 0; i < 4; i++) {
		if (couleurListe[i] == codeListe[i]) {
			bon++;
			couleurListe[i] = 0;
			codeListe[i] = 7;
		}
	}

	for (i = 0; i < 4; i++) {
		for (k = 0; k < 4; k++) {
			if (couleurListe[i] == codeListe[k]) {
				oups++;
				couleurListe[i] = 0;
				codeListe[k] = 7;
			}
		}
	}


	temp = temp + '<h1 class="Ltag">' + bon + '</h1>';

	if ((couleur1 == 0 || couleur2 == 0) || (couleur3 == 0 || couleur4 == 0)) {
		alert("La couleur grise n'est pas une option!");
	} else {
		for (i = 0; i <= 3; i++) {
			temp += '<img src="Image/' + afficheListe[i] + '.png" class="row">'
		}
		document.getElementById("midel").innerHTML = temp + '<h1 class="Rtag">' + oups + '</h1>' + '</div>' + document.getElementById("midel").innerHTML;
	}
	if (bon == 4){
		b = 1; 
		toggle();
		document.getElementById("midel").innerHTML = '<div class="ligne"> <h1 class="victory">~~!!VICTORY!!~~</h1></div>' + document.getElementById("midel").innerHTML;
	}
}


function RandomCode() {
	c1 = Math.floor(Math.random() * 6 + 1);
	c2 = Math.floor(Math.random() * 6 + 1);
	c3 = Math.floor(Math.random() * 6 + 1);
	c4 = Math.floor(Math.random() * 6 + 1);
	document.getElementById("c1").src = "Image/" + c1 + ".png";
	document.getElementById("c2").src = "Image/" + c2 + ".png";
	document.getElementById("c3").src = "Image/" + c3 + ".png";
	document.getElementById("c4").src = "Image/" + c4 + ".png";
}


function change1() {
	select = document.getElementById("select1");
	select_s = select.style;
	switch (select.selectedIndex) {

		case 0:
			select_s.background = "url('Image/0.png') no-repeat";
			couleur1 = 0;
			break;

		case 1:
			select_s.background = "url('Image/1.png') no-repeat";
			couleur1 = 1;
			break;

		case 2:
			select_s.background = "url('Image/2.png') no-repeat";
			couleur1 = 2;
			break;

		case 3:
			select_s.background = "url('Image/3.png') no-repeat";
			couleur1 = 3;
			break;

		case 4:
			select_s.background = "url('Image/4.png') no-repeat";
			couleur1 = 4;
			break;

		case 5:
			select_s.background = "url('Image/5.png') no-repeat";
			couleur1 = 5;
			break;

		case 6:
			select_s.background = "url('Image/6.png') no-repeat";
			couleur1 = 6;
			break;
	}
}
function change2() {
	select = document.getElementById("select2");
	select_s = select.style;
	switch (select.selectedIndex) {

		case 0:
			select_s.background = "url('Image/0.png') no-repeat";
			couleur2 = 0;
			break;

		case 1:
			select_s.background = "url('Image/1.png') no-repeat";
			couleur2 = 1;
			break;

		case 2:
			select_s.background = "url('Image/2.png') no-repeat";
			couleur2 = 2;
			break;

		case 3:
			select_s.background = "url('Image/3.png') no-repeat";
			couleur2 = 3;
			break;

		case 4:
			select_s.background = "url('Image/4.png') no-repeat";
			couleur2 = 4;
			break;

		case 5:
			select_s.background = "url('Image/5.png') no-repeat";
			couleur2 = 5;
			break;

		case 6:
			select_s.background = "url('Image/6.png') no-repeat";
			couleur2 = 6;
			break;
	}
}
function change3() {
	select = document.getElementById("select3");
	select_s = select.style;
	switch (select.selectedIndex) {

		case 0:
			select_s.background = "url('Image/0.png') no-repeat";
			couleur3 = 0;
			break;

		case 1:
			select_s.background = "url('Image/1.png') no-repeat";
			couleur3 = 1;
			break;

		case 2:
			select_s.background = "url('Image/2.png') no-repeat";
			couleur3 = 2;
			break;

		case 3:
			select_s.background = "url('Image/3.png') no-repeat";
			couleur3 = 3;
			break;

		case 4:
			select_s.background = "url('Image/4.png') no-repeat";
			couleur3 = 4;
			break;

		case 5:
			select_s.background = "url('Image/5.png') no-repeat";
			couleur3 = 5;
			break;

		case 6:
			select_s.background = "url('Image/6.png') no-repeat";
			couleur3 = 6;
			break;
	}
}
function change4() {
	select = document.getElementById("select4");
	select_s = select.style;
	switch (select.selectedIndex) {

		case 0:
			select_s.background = "url('Image/0.png') no-repeat";
			couleur4 = 0;
			break;

		case 1:
			select_s.background = "url('Image/1.png') no-repeat";
			couleur4 = 1;
			break;

		case 2:
			select_s.background = "url('Image/2.png') no-repeat";
			couleur4 = 2;
			break;

		case 3:
			select_s.background = "url('Image/3.png') no-repeat";
			couleur4 = 3;
			break;

		case 4:
			select_s.background = "url('Image/4.png') no-repeat";
			couleur4 = 4;
			break;

		case 5:
			select_s.background = "url('Image/5.png') no-repeat";
			couleur4 = 5;
			break;

		case 6:
			select_s.background = "url('Image/6.png') no-repeat";
			couleur4 = 6;
			break;
	}
}

cadenat.style.display = "none";
toggle()
RandomCode()
