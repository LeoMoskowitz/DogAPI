var xhttp = new XMLHttpRequest();
var url = "https://dog.ceo/api/breeds/list"
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		console.log(xhttp.response);
		var dogDropdown = document.getElementById("dogBreed").parentNode.querySelector(".dropdown menu")
		var dogList = JSON.parse(this.responseText);
		for (var i = dogList.length - 1; i >= 0; i--) {
			var itemAnchor = documentCreateElement("a");
			itemAnchor.className = "dropdown-item";
			itemAnchor.href = "#";
			itemAnchor.innerText = dogList.message[i];
			dogDropdown.appendChild(itemAnchor);
		}
    }
};
xhttp.open("GET", url, true);
xhttp.send();
