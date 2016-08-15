// javascript part
// function showForm() {
// 	this.removeEventListener("click", showForm);
// 	this.style.border = "1px solid black";
// 	var form = document.createElement("form");
// 	var inputBox = document.createElement("input");
// 	var button = document.createElement("button");
// 	form.appendChild(inputBox);
// 	form.appendChild(button);
// 	button.addEventListener("click", function() {
// 		event.preventDefault();
// 		this.parentNode.parentNode.style.backgroundColor = inputBox.value;
// 	})
// 	this.appendChild(form);
// }

// var div1 = document.getElementById("div1");
// div1.style.width = "300px";
// div1.style.height = "200px";
// div1.style.backgroundColor = "green";
// var div2 = document.getElementById("div2");
// div2.style.width = "300px";
// div2.style.height = "200px";
// div2.style.backgroundColor = "blue";
// var div3 = document.getElementById("div3");
// div3.style.width = "300px";
// div3.style.height = "200px";
// div3.style.backgroundColor = "red";
// div1.addEventListener("click", showForm);	
// div2.addEventListener("click", showForm);	
// div3.addEventListener("click", showForm);
// end of javascript part

$(document).ready(function () {
	$("#div1").css("width", "300px").css("height", "200px").css("backgroundColor", "green");
	$("#div1").click(showForm);
	$("#div2").css("width", "300px").css("height", "200px").css("backgroundColor", "blue");
	$("#div2").click(showForm);
	$("#div3").css("width", "300px").css("height", "200px").css("backgroundColor", "red");
	$("#div3").click(showForm);
	function showForm() {
		$(this).off("click", showForm);
		$(this).css("border", "1px solid black");
		$(this).append("<form><input/><button>change color</button>");
		$("button").click(function() {
			event.preventDefault();
			$(this).parent().parent().css("backgroundColor", $(this).prev().val());
		})
	}
})