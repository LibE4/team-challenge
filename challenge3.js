var divOld = document.getElementById("div1");
divOld.style.width = "100px";
divOld.style.height = "100px";
divOld.style.backgroundColor = "red";
var button = document.getElementById("btn");	
button.addEventListener("click", function() {
	divOld.style.display = "none";
	var divNew = document.createElement("div");
	divNew.style.width = "200px";
	divNew.style.height = "200px";
	divNew.style.backgroundColor = "blue";
	this.parentNode.insertBefore(divNew, this);
	window.setTimeout(function(){
	divNew.style.display = "none";
	divOld.style.display = "block";	
	}, 3000);
})