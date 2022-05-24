function update1() {
    console.log("Added items");
    title = document.getElementById('title').value;
    des = document.getElementById('Description').value;
    if (document.getElementById('title').value != '' && document.getElementById('Description').value != '') {
        if (localStorage.getItem('ItemsJson') == null) {
            itemjsonarr = [];
            itemjsonarr.push([title, des]);
            localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr));
        }
        else {
            itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'));
            itemjsonarr.push([title, des]);
            localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr));
        }
        update();
    }
    else{
        alert("Please fill both the fields");
    }

}
function update() {
    if (localStorage.getItem('ItemsJson') == null) {
        itemjsonarr = [];
        localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr));
    }
    else {
        itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'));
    }
    let tabbody = document.getElementById('tabbody');
    let str = "";
    itemjsonarr.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="button" class="btn btn-dark" onclick="deleted(${index})">Delete</button></td>
        </tr>`
    });
    tabbody.innerHTML = str;

}

function deleted(index) {
    itemjsonarr = JSON.parse(localStorage.getItem('ItemsJson'));
    itemjsonarr.splice(index, 1);
    localStorage.setItem('ItemsJson', JSON.stringify(itemjsonarr));
    update();
}

console.log('hello');
add1 = document.getElementById('add');
add1.addEventListener('click', update1);
update();
function clearstorage() {
    if (confirm("Do you really want to clear list?")) {
        console.log("Cleared");
        localStorage.clear();
    }
    update();
}