
function display() {
    alert('voce é lindo');
}


for (i=1;i<6;i++) {
    var el = document.querySelector('.logo img');
    el.addEventListener('click',display);
}
