showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let title = document.getElementById('title');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if ( title.value.length == 0 || addTxt.value.length == 0) {
        alert("Add Notes cannot be empty");
    }
    else {
        notesObj.push([title.value, addTxt.value]);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        title.value = "";
        addTxt.value = "";
        showNotes();

    }

})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="card" style="width: 18rem; my-3">
        <div class="card-body">
          <h5 class="card-title">${index + 1}</h5>
          <h2 class="card-text">${element[0]}</h2>
          <p class="card-text">${element[1]}</p>
          <button href="#" class="btn btn-sm btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete</button>
        </div>
      </div>
        `
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchNotes');
search.addEventListener("input", function () {
    inputVal = search.value.toUpperCase();
    let card = document.getElementsByClassName('card');
    Array.from(card).forEach(function (e) {
        let tit = e.getElementsByClassName("card-text")[0].innerText;
        if (tit.includes(inputVal)) {
            e.style.display = 'block';
        }
        else {
            e.style.display = 'none';
        }

    })

})
