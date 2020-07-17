// chrome.runtime.sendMessage({'message': 'hello there!'});
var btn = document.createElement('button');
btn.style.position = 'fixed';
btn.style.bottom = '10px';
btn.style.left = '10px';
btn.style.zIndex = '999999999';
btn.innerHTML = "HEY IT'S ME YOUR FUCKING BUTTON BRO";
btn.id = 'chrome_extension_button';
btn.style.backgroundColor = 'red';
btn.onclick = function(){
	chrome.runtime.sendMessage({'message': 'clicked'});
}

chrome.runtime.onMessage.addListener(function(message){
	console.log('message recieved: '+message);
	btn.style.backgroundColor = message.color;
});
document.body.appendChild(btn);
console.log('should be done by now, honestly');
