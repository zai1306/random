var ul = document.getElementById('list');
var removeAll = document.getElementById('delete');
var add = document.getElementById('add');
var change = document.createElement('button');


add.onclick = function(){
    addLi(ul)
};

function addLi(targetUi){
    var inputText = document.getElementById('text').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + " ");
    var removeBtn = document.createElement('button');
    change.className = 'change';
    change.innerHTML = 'append it...';

    document.getElementById('text').value = "";


    if(inputText.length === 0){
        alert('ther is npthing to add');
        return false
    };


    removeBtn.className = 'RemoveMe';
    removeBtn.innerHTML = 'Done';
    removeBtn.setAttribute('onclick', "RemoveMe(this);")

    li.appendChild(textNode);
    li.appendChild(removeBtn);

    targetUi.appendChild(li);

    li.appendChild(change);

    change.onclick = function(){

        var prop = prompt('replace it', textNode.textContent);
        textNode.textContent = prop ;
        console.log(prop)
    }

}

function RemoveMe(item){
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
    ul.innerHTML = ''
}

