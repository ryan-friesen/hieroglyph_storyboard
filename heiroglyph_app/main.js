function dragUser(user, event) {
    event.dataTransfer.setData('User', user.id);
}
function dropUser(target, event) {
    var user = event.dataTransfer.getData('User');
    target.appendChild(document.getElementById(user)); 
}