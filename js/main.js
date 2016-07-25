$(document).ready(initApp);

function initApp(){
	$(".tablero li").on("click",marcarCasilla);
	$('#nuevojuego').on("click",resetJuego);
}
var jugada = 0;
function marcarCasilla(){
	jugada++;
	if(jugada%2==0){
		$(this).text("o");
		$(this).off();
	}
	else{
		$(this).text("x");
		$(this).off();
	}
	probarJugada();
}
function probarJugada(){
	var p1= $("#p1").text();
	var p2= $("#p2").text();
	var p3= $("#p3").text();
	var p4= $("#p4").text();
	var p5= $("#p5").text();
	var p6= $("#p6").text();
	var p7= $("#p7").text();
	var p8= $("#p8").text();
	var p9= $("#p9").text();

	if(p1 == p2 && p2 == p3 && p1== p3 && p1 != "+" && p2 != "+" && p3 != "+"){
		$("#jugador").text(p1);
		$(".tablero li").off();
	}
	else if(p4 == p5 && p5 == p6 && p6 == p4 && p4 != "+" && p5 != "+" && p6 != "+"){
		$("#jugador").text(p4);
		$(".tablero li").off();
	}
	else if(p7 == p8 && p8 == p9 && p9 == p7 && p7 != "+" && p8 != "+" && p9 != "+"){
		$("#jugador").text(p7);
		$(".tablero li").off();
	}
	else if(p1 == p4 && p4 == p7 && p7== p1 && p1 != "+" && p4 != "+" && p7 != "+"){
		$("#jugador").text(p1);
		$(".tablero li").off();
	}
	else if(p2 == p5 && p5 == p8 && p8 == p2 && p2 != "+" && p5 != "+" && p8 != "+"){
		$("#jugador").text(p2);
		$(".tablero li").off();
	}
	else if(p3 == p6 && p6 == p9 && p9 == p3 && p3 != "+" && p6 != "+" && p9 != "+"){
		$("#jugador").text(p3);
		$(".tablero li").off();
	}
	else if(p1 == p5 && p5 == p9 && p9== p1 && p1 != "+" && p5 != "+" && p9 != "+"){
		$("#jugador").text(p1);
		$(".tablero li").off();
	}
	else if(p3 == p5 && p5 == p7 && p7 == p3 && p3 != "+" && p5 != "+" && p7 != "+"){
		$("#jugador").text(p3);
		$(".tablero li").off();
	}
	else if(p1 != "+" && p2 != "+" && p3 != "+" && p4 != "+" && p5 != "+" && p6 != "+" && p7 != "+" && p8 != "+" && p9 != "+")
		$("#mensaje").text("No se pueden hacer más jugadas");
}
function resetJuego(){
	$(".casilla").text("+");
	$("#jugador").text("");
	location.reload();
}