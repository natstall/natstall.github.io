function shows() {
	var myArray = ["Supernatural", "Prison Break", "Buffy the Vampire Slayer", "Dollhouse", "The 100", "Daredevil",
	"Stranger Things", "Shameless", "The Marvelous Mrs. Maisel"];
	var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
	alert(randomItem);
}
				
function dark() {
	document.body.setAttribute('data-theme', 'dark');
}