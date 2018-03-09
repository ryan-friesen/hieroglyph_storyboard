function dragUser(user, event) {

    event.dataTransfer.setData('User', user.id);		

}
function dropUser(target, event) {
    var user = event.dataTransfer.getData('User');
    target.appendChild(document.getElementById(user)); 	

}

function cloneUser(user, event) {
	
	var user = event.dataTransfer.getData('User');
	user1 = user.cloneNode(true);
	user.parentNode.appendChild(user1);
	
}