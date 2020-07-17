var extension_id = 'eipnhmogmcpdfnakolhfnicfjineaoha';
var colors = ['yellow', 'green', 'blue', 'maroon', 'cyan', 'purple', 'grey'];

var address = 'http://127.0.0.1:5000';
var socket = io(address);

socket.on('connect', function(){
	console.log('we did a connect!');
});
socket.on('trigger', function(){
	console.log('we heard a trigger!');
});

chrome.runtime.onMessage.addListener(function(message){
	console.log(message.message);
	if(message.message == 'clicked'){
		chrome.tabs.query({active: true/*, currentWindow: true*/}, function(tabs){
			let ci = Math.floor(Math.random()*colors.length);
			chrome.tabs.sendMessage(tabs[0].id, {'color': colors[ci]});
		});
	}
});