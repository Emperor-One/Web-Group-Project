let contentDisplay = document.getElementById('display');

function closeContent(){
    document.getElementById('display').classList.add('noDisplay');
    document.getElementById('display').classList.remove('display');
}

function openContent(){
    contentDisplay.classList.add('display');
    contentDisplay.classList.remove('noDisplay');
}