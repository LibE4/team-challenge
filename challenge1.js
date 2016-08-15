function createCards() {
var colorElement1 = document.createElement("input");
colorElement1.type = "color";
colorElement1.addEventListener("change", function() {
	this.parentNode.style.background = this.value;
})
colorElement1.id = "backgroundColor";
var colorElement2 = document.createElement("input");
colorElement2.type = "color";
colorElement2.addEventListener("change", function() {
	this.parentNode.style.color = this.value;
})
colorElement2.id = "fontColor";
var buttonDelete = document.createElement("button");
buttonDelete.innerHTML = "Delete";
buttonDelete.addEventListener("click", function() {
	this.parentNode.remove();
})
var textElement = document.createElement("div");
textElement.innerHTML = textareaElement.value;
var cardElement = document.createElement("div");
cardElement.style.width = "300px";
cardElement.style.height = "500px";
cardElement.style.border = "1px solid black";
cardElement.appendChild(colorElement1);
cardElement.appendChild(colorElement2);
cardElement.appendChild(buttonDelete);
cardElement.appendChild(textElement);
displayElement.appendChild(cardElement);
}

var textareaElement = document.getElementById("card-content");
var buttonCreate = document.getElementById("create");
var displayElement = document.getElementById("display-area");
buttonCreate.addEventListener("click", createCards);