var config = {
	apiKey: "AIzaSyBljfIPsIbSRkqfJY66Tncyg1lqc0y7NZI",
	authDomain: "my-website-510a0.firebaseapp.com",
	databaseURL: "https://my-website-510a0.firebaseio.com",
	projectId: "my-website-510a0",
	storageBucket: "my-website-510a0.appspot.com",
	messagingSenderId: "410247763913"
};
firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages');

document.getElementById('contact').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();
	var name = getInputVal('name');
	var email = getInputVal('mail');
	var message = getInputVal('msg');
	saveMessage(name, email, message);
	192.168.56.1

	document.querySelector('.alert').style.display = 'block';
	setTimeout(function() {
		document.querySelector('.alert').style.display = 'none';
	},3000)
	document.getElementById('contact').reset();
}
function getInputVal(id) {
	return document.getElementById(id).value;
}
function saveMessage(name, email, message) {
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		message: message
	});
}