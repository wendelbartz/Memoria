var cartas_viradas = 0;
var cartas = [];
var viradas = [];
var fotos = ["imagens/raiden.jpg","imagens/scorpion.jpg"
						,"imagens/sindel.jpg","imagens/sub-zero.jpg"
						,"imagens/mileena.jpg","imagens/baraka.jpg"
						,"imagens/nightwolf.jpg","imagens/shao_kahn.jpg","imagens/verso_carta.jpg"];
var jogadas = 0;

function finaliza(){
	var flag = true;
	for (l = 0; l < viradas.length; l++) {
		for (c = 0; c < 4; c++) {
			if(viradas[l][c] != 2){
				flag = false;
			}
		}
	}
	if(flag){
		alert("Parabéns!!! Você ganhou em "+jogadas+" jogadas no nivel "+document.querySelector("select").value);
		alteraMenu();
	}
}

function esconde(){
	var first_l, first_c = null;
	var l, c;
	var final = 0;
	for (l = 0; l < viradas.length; l++) {
		for (c = 0; c < 4; c++) {
			if(viradas[l][c] == 1){
				if(first_l == null) {
					first_l = l;
					first_c = c;
				}	else {
					if(cartas[l][c] == cartas[first_l][first_c]){
						viradas[l][c] = 2;
						viradas[first_l][first_c] = 2;
						controlSound(cartas[l][c]);
						break;
					} else {
						document.getElementById("l" + (l+1) + "c" + (c+1)).src = fotos[8];
						document.getElementById("l" + (first_l+1) + "c" + (first_c+1)).src = fotos[8];
						viradas[l][c] = 0;
						viradas[first_l][first_c] = 0;
					}
				}
			}
			if(viradas[l][c] == 0)
				final++
		}
	}
	if(final==2)
		controlSound("finish");

	cartas_viradas = 0;
	jogadas++
	if(document.getElementById('jogadas')==null)
		document.getElementById('options').innerHTML += "<p id='jogadas' class='seletor'>Jogadas: "+jogadas+"</p>";
	else{
		document.getElementById('jogadas').innerHTML = "Jogadas: "+jogadas;
		finaliza();
	}
}

function showGame() {
	var game = document.querySelector("#jogo");
	var dificuldade = document.querySelector("select").value;
	if(dificuldade == "fácil")
		game.innerHTML = "<table id=\"tabela\"><tr><td><img onclick=\"verifica(this.id)\" id=\"l1c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\"id=\"l2c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\"id=\"l2c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\"id=\"l2c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\"id=\"l2c4\"src=\"imagens/verso_carta.jpg\"></td></tr></table>";
	if(dificuldade == "médio")
		game.innerHTML = "<table id=\"tabela\"><tr><td><img onclick=\"verifica(this.id)\" id=\"l1c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\" id=\"l2c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\" id=\"l3c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c4\"src=\"imagens/verso_carta.jpg\"></td></tr></table>";
	if(dificuldade == "difícil")
		game.innerHTML = "<table id=\"tabela\"><tr><td><img onclick=\"verifica(this.id)\" id=\"l1c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l1c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\" id=\"l2c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l2c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\" id=\"l3c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l3c4\"src=\"imagens/verso_carta.jpg\"></td></tr><tr><td><img onclick=\"verifica(this.id)\" id=\"l4c1\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l4c2\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l4c3\"src=\"imagens/verso_carta.jpg\"></td><td><img onclick=\"verifica(this.id)\" id=\"l4c4\"src=\"imagens/verso_carta.jpg\"></td></tr></table>";

}

function randomiza(){
	var temp;
	var dificuldade = document.querySelector("select").value;
	if(dificuldade == "fácil"){
		cartas = [[0,0,0,0], [0,0,0,0]];
		viradas = [[0,0,0,0], [0,0,0,0]];
		temp = 4;
	}
	if(dificuldade == "médio"){
		cartas = [[0,0,0,0], [0,0,0,0], [0,0,0,0]];
		viradas = [[0,0,0,0], [0,0,0,0], [0,0,0,0]];
		temp = 6;
	}
	if(dificuldade == "difícil"){
		cartas = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
		viradas = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
		temp = 8;
	}
	var coluna, linha;
	for(var i = 0; i < temp; i++) {
		do{
			linha = Math.floor(Math.random() * (temp/2));
			coluna = Math.floor(Math.random() * 4);
		}while(cartas[linha][coluna] != 0);
		cartas[linha][coluna] = fotos[i];

		do{
			linha = Math.floor(Math.random() * (temp/2));
			coluna = Math.floor(Math.random() * 4);
		}while(cartas[linha][coluna] != 0);
		cartas[linha][coluna] = fotos[i];
	}
}
var int;
function verifica(id){
	var temp = id.toString();
	var linha = parseInt(temp.charAt(1)) - 1;
	var coluna = parseInt(temp.charAt(3)) - 1;

	if(cartas_viradas !=2) {
		if(viradas[linha][coluna] == 0 && cartas_viradas != 2) {
			document.getElementById(id).src = cartas[linha][coluna];
			cartas_viradas++;
			viradas[linha][coluna] = 1;
		}
		if(cartas_viradas == 2)
			setTimeout(esconde, 1000);
	}
}

function alteraMenu(){
	document.getElementById('menu').className = "panel_left";
	showGame();
	randomiza();
	cartas_viradas = 0;
	jogadas = 0;
	if(document.getElementById('jogadas')!=null)
		document.getElementById('jogadas').innerHTML = "Jogadas: "+jogadas;
}

function controlMusic() {
	var audio = document.querySelector("#musica");
	if(document.querySelector("input[type='checkbox']").checked){
		audio.load();
		audio.play();
		audio.loop = true;
		audio.volume=0.08;
	} else {
		audio.pause();
	}
}

function controlSound(som) {
	var audio = document.querySelector("#sons");
	var nome = som.split('/')[som.split('/').length - 1];
	audio.src = "sons/"+nome+".mp3";
	audio.load();
	audio.play();
}
