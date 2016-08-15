var n = 3;
var player = "x";
var displayElement = document.getElementById("ttt");
var resetButton = document.createElement("button");
resetButton.innerHTML = "Play Again";
resetButton.addEventListener("click", resetGame);
resetButton.style.display = "none";
document.getElementById("control").appendChild(resetButton);

for (i = 1; i <= n * n; i++) {
	var productElement = document.createElement("div");
	productElement.innerHTML = "";
	productElement.className = "blocks";
	displayElement.appendChild(productElement);
	productElement.addEventListener("click", showContent);
}

function showContent() {
	if (this.innerHTML === "" && player === "x") {
		this.innerHTML = "x";
		this.style.color = "red";
		this.style.fontSize = "xx-large";
		player = "o";
	}
	if (this.innerHTML === "" && player === "o") {
		this.innerHTML = "o";
		this.style.color = "blue";
		this.style.fontSize = "xx-large";
		player = "x";
	}
	checkStatus();
}

function checkStatus() {
	var arr = [];
	for(var i = 0; i < n; i++){
	    arr[i] = [];    
	    for(var j = 0; j < n; j++){ 
	        arr[i][j] = i * n + j + 1;
	    }    
	}
	// check row
	for(var i = 0; i < n; i++){
		var flagX = 0;
		var flagO = 0;
	    for(var j = 0; j < n; j++){ 
	        var temp = arr[i][j];
	        if (displayElement.childNodes[temp].innerHTML === "o") {
				flagO += 1;
	        }
	        if (flagO === n) {
				oWin();
	        }
	        if (displayElement.childNodes[temp].innerHTML === "x") {
				flagX += 1;
	        }
	        if (flagX === n) {
	        	xWin();	        	
	        }
	    }    
	}
	// check colunm
	for(var i = 0; i < n; i++){
		var flagX = 0;
		var flagO = 0;
	    for(var j = 0; j < n; j++){ 
	        var temp = arr[j][i];
	        if (displayElement.childNodes[temp].innerHTML === "o") {
				flagO += 1;
	        }
	        if (flagO === n) {
	        	oWin();        	
	        }
	        if (displayElement.childNodes[temp].innerHTML === "x") {
				flagX += 1;
	        }
	        if (flagX === n) {
	        	xWin();        	
	        }
	    }    
	}
	// check cross backslash
	for(var i = 0, j = 0, flagX = 0, flagO = 0; i < n; i++, j++){
        var temp = arr[i][j];
        if (displayElement.childNodes[temp].innerHTML === "o") {
			flagO += 1;
        }
        if (flagO === n) {
        	oWin();        	
        }
        if (displayElement.childNodes[temp].innerHTML === "x") {
			flagX += 1;
        }
        if (flagX === n) {
        	xWin();        	
        }
	}
	// check cross slash
	for(var i = n - 1, j = 0, flagX = 0, flagO = 0; j < n; i--, j++){
        var temp = arr[i][j];
        if (displayElement.childNodes[temp].innerHTML === "o") {
			flagO += 1;
        }
        if (flagO === n) {
        	oWin();        	
        }
        if (displayElement.childNodes[temp].innerHTML === "x") {
			flagX += 1;
        }
        if (flagX === n) {
        	xWin();        	
        }
	}	
 	// check tie
 	for (i = 1; i <= n * n; i++) {
		if (displayElement.childNodes[i].innerHTML === "") {
			break;
		}
		if (i === n * n ) {
			setTimeout(function(){alert("Game over. It's a tie!")}, 100);	
			stopGame();
		}
	}	         	
}


function xWin() {
	stopGame();
	setTimeout(function(){alert("Congradulations! Player X just made the last move to win.")}, 100);	
}

function oWin() {
	stopGame();
	setTimeout(function(){alert("Congradulations! Player O just made the last move to win.")}, 100);	
}

function stopGame() {
	resetButton.style.display = "block";
	for (i = 1; i <= n * n; i++) {
		displayElement.childNodes[i].removeEventListener("click", showContent);
	}	        	
}

function resetGame() {
	for (i = 1; i <= n * n; i++) {
		displayElement.childNodes[i].innerHTML = "";
		displayElement.childNodes[i].addEventListener("click", showContent);
	}
	player = "x";
	resetButton.style.display = "none";
}

// The following function works, but not easy to maintain in the future if more grids are required.

// function checkStatus() {
// 	// check player o
// 	if (displayElement.childNodes[1].innerHTML === "o" && displayElement.childNodes[2].innerHTML === "o" &&displayElement.childNodes[3].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[4].innerHTML === "o" && displayElement.childNodes[5].innerHTML === "o" &&displayElement.childNodes[6].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[7].innerHTML === "o" && displayElement.childNodes[8].innerHTML === "o" &&displayElement.childNodes[9].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[1].innerHTML === "o" && displayElement.childNodes[4].innerHTML === "o" &&displayElement.childNodes[7].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[2].innerHTML === "o" && displayElement.childNodes[5].innerHTML === "o" &&displayElement.childNodes[8].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[3].innerHTML === "o" && displayElement.childNodes[6].innerHTML === "o" &&displayElement.childNodes[9].innerHTML === "o") {
// 		oWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[1].innerHTML === "o" && displayElement.childNodes[5].innerHTML === "o" &&displayElement.childNodes[9].innerHTML === "o") {
// 		oWin();
// 		return;
//  	}				
// 	if (displayElement.childNodes[3].innerHTML === "o" && displayElement.childNodes[5].innerHTML === "o" &&displayElement.childNodes[7].innerHTML === "o") {
// 		oWin();
// 		return;
//   	}				

// 	// check player X
// 	if (displayElement.childNodes[1].innerHTML === "x" && displayElement.childNodes[2].innerHTML === "x" &&displayElement.childNodes[3].innerHTML === "x") {
// 		xWin();
// 		return;
//   	}
// 	if (displayElement.childNodes[4].innerHTML === "x" && displayElement.childNodes[5].innerHTML === "x" &&displayElement.childNodes[6].innerHTML === "x") {
// 		xWin();
// 		return;
//    	}
// 	if (displayElement.childNodes[7].innerHTML === "x" && displayElement.childNodes[8].innerHTML === "x" &&displayElement.childNodes[9].innerHTML === "x") {
// 		xWin();
// 		return;
//    	}
// 	if (displayElement.childNodes[1].innerHTML === "x" && displayElement.childNodes[4].innerHTML === "x" &&displayElement.childNodes[7].innerHTML === "x") {
// 		xWin();
// 		return;
// 	}
// 	if (displayElement.childNodes[2].innerHTML === "x" && displayElement.childNodes[5].innerHTML === "x" &&displayElement.childNodes[8].innerHTML === "x") {
// 		xWin();
// 		return;
//  	}
// 	if (displayElement.childNodes[3].innerHTML === "x" && displayElement.childNodes[6].innerHTML === "x" &&displayElement.childNodes[9].innerHTML === "x") {
// 		xWin();
// 		return;
//   	}
// 	if (displayElement.childNodes[1].innerHTML === "x" && displayElement.childNodes[5].innerHTML === "x" &&displayElement.childNodes[9].innerHTML === "x") {
// 		xWin();
// 		return;
// 	}				
// 	if (displayElement.childNodes[3].innerHTML === "x" && displayElement.childNodes[5].innerHTML === "x" &&displayElement.childNodes[7].innerHTML === "x") {
// 		xWin();
// 		return;
// 	}
//  	// check tie
//  	for (i = 1; i <= n * n; i++) {
// 		if (displayElement.childNodes[i].innerHTML === "") {
// 			break;
// 		}
// 		if (i === n * n ) {
// 			stopGame();
// 			setTimeout(function(){alert("Game over. It's a tie!")}, 100);	
// 		}
// 	}	         	

// }
