
// Initialize Firebase
var config = {
	apiKey: "AIzaSyABPV6tGV2QgynboDbRYBKr-qQPwLWuN0I",
	authDomain: "imperium-b099c.firebaseapp.com",
	databaseURL: "https://imperium-b099c.firebaseio.com",
	storageBucket: "imperium-b099c.appspot.com",
	messagingSenderId: "89765430000"
};
firebase.initializeApp(config);



function login(){

	if($("#inputEmail").val() == "juliana@gmail.com")
		window.location.href = "/dashboard.html";

}

function signup(){
	
}