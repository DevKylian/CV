$(function tooltips() {
	$('[data-toggle="tooltip"]').tooltip()
});

function responsiveNavbar() {
	var x = document.getElementById("responsiveNav");
	if (x.className === "responsiveNav") {
		x.className += " responsive";
	} else {
		x.className = "responsiveNav";
	}
}

function openNav() {
	document.getElementById("sideNav").style.width = "350px";
}

function closeNav() {
	document.getElementById("sideNav").style.width = "0";
}

function mouseOver() {
	var str = document.getElementById("birthdate").textContent = "18 ans";
}

function mouseOut() {
	var str = document.getElementById("birthdate").textContent = "23/10/2000";
}

function hideButton() {
	var x = document.getElementById("btnJS");
	x.style.display = "none";
}

function getDate() {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	return date;
}
