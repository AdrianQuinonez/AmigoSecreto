(function(){
	var lista = document.getElementById('lista'),
		participante = document.getElementById("participante"), 
		btnNuevoParticipante = document.getElementById("btn-agregar"),
		btneliminar = document.getElementById("btn-eliminar"),
		listaParticipante = document.getElementById("btn-ocultar"),
		btngirar = document.getElementById("btn-girar"),
		lista1 = document.getElementById('lista1'),
		suba = document.getElementById("boton1"),
		tareas = document.getElementById('tareas');

	
	var alumno = ["ALI PINZON WILSON ALBERTO","ARDILA ARRIETA ADRIAN ANDRES","ARIZA CANTILLO JUAN CARLOS","BLANCO MARTINEZ JANER JOSE",
	"BUITRAGO TABARES JEAN PAUL","CANDELARIO GUERRERO GABRIEL ALFONSO","DE LA CRUZ OROZCO RICARDO ANDRES","DE LA VALLE ACUÑA JOSE DAVID",
	"FERRER MARCONY JERSON DAVID","FIGUEREDO ORTIZ PEDRO ANDRES","FONTALVO ORTIZ DANIEL DAVID","GONGORA AMAYA EDWIN","JIMENEZ ALVAREZ HOLMAN JOSE",
	"JIMENEZ RINCON DANIEL FERNANDO","JULIO SIERRA ERIK HARNER","MARQUEZ HINOJOSA YORMARYS","MEDINA HURTADO RONALDO ALFREDO","MENDOZA VIVES GERARDO RAFAEL",
	"MUÑOZ BECERRA GUSTAVO ANTONIO","NOSSA BARRIOS MICHAEL JOSE","PEREA PIMIENTA ELVER YESID","POLO PRADA ERNESTO FELIPE","QUIÑONEZ NIER ADRIAN ORLANDO",
	"RAMIREZ MARADEY GABRIEL ENRIQUE","RANGEL RINCON RICARDO","RUBIO CASTELLANOS JOHN STEVEN","SALCEDO CASSIANNI RAUL ESTEBAN","SERRANO ROMERO DANIEL ALFONSO",
	"TANG CANTILLO JULIO CESAR","VARELA MERCADO CARLOS ANDRES"];
	for(var i = 0; i < alumno.length; i++){
		var aux = alumno[i],
			nueva = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(aux);
		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		nueva.appendChild(enlace);
		lista.appendChild(nueva);
	}
	var agregarParticipante = function(){
		var aux = participante.value,
			nueva = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(aux);
		if(aux == ""){
			participante.setAttribute("placeholder","Agrega una persona");
			participante.className = "error";
			return false;
		}
		alumno[alumno.length] = aux;
		enlace.appendChild(contenido);
		enlace.setAttribute("href", "#");
		nueva.appendChild(enlace);
		lista.appendChild(nueva);

		participante.value = "";
	}
	var comprobarInput = function(){
		participante.className = "";
		participante.setAttribute("placeholder", "Agrega tu participante");
	};
	function eliminar(){
		var aux2 = participante.value;
		for(var j = 0; j < alumno.length;j++){
			if(alumno[j]==aux2){
				alumno.splice(j,1);
				var ref = document.getElementsByTagName('li')[j];
				lista.removeChild(ref);
				break;
			}
		}
		participante.value ="";
	};

	function girar(){
		var alumno1 = [];
		for(var i = 0; i < alumno.length;i++){
			alumno1[i]=alumno[i];
		}
		do{
			var valor1=Math.floor(Math.random()*(alumno.length)),
				valor2=Math.floor(Math.random()*(alumno.length));
			if(alumno[valor1] != alumno1[valor2]){
				var aux1 = alumno[valor1] + " → " + alumno1[valor2],
					nueva1 = document.createElement("li"),
					enlace1 = document.createElement("a"),
					contenido1 = document.createTextNode(aux1);
				enlace1.appendChild(contenido1);
				enlace1.setAttribute("href", "#");
				nueva1.appendChild(enlace1);
				lista1.appendChild(nueva1);
				alumno.splice(valor1,1);
				alumno1.splice(valor2,1);
			}	
		}while(alumno.length > 0);	
	};
	function ocultar(){
		if(document.getElementById('tareas').style.display=="none"){
			document.getElementById("tareas").style.display = "block";
			document.getElementById("boton1").value = "▲";
		}else{
			document.getElementById("tareas").style.display = "none";
			document.getElementById("boton1").value = "▼";
		}
	};

  	suba.addEventListener("click",ocultar);
	btngirar.addEventListener("click",girar);
	btneliminar.addEventListener("click",eliminar);
	btnNuevoParticipante.addEventListener("click", agregarParticipante);
	participante.addEventListener("click", comprobarInput);

}());