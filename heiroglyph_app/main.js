function dragUser(user, event) {

	user1 = user.cloneNode(false);
	user.parentNode.appendChild(user1);	
    event.dataTransfer.setData('User', user.id);

}
function dropUser(target, event) {
    var user = event.dataTransfer.getData('User');
    target.appendChild(document.getElementById(user));	

}

function cloneUser(user, event) {
	
	var user = event.dataTransfer.getData('User');
	
}