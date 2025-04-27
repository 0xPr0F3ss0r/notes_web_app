const createButton = document.querySelector(".button");
const noteContainer = document.querySelector(".note-container");
let notes = document.querySelectorAll(".input-box");
const deleteNotes = document.querySelector(".buttonRemoveAll");


//function to display all notes , when page loaded
function DisplayAllNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes");
}
DisplayAllNotes();


//event to create note when button clicked
createButton.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.className = "deleteImage";
    img.src = "../images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
})


//function to add note to storage
function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}


//event to delete note or update storage with new note
noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(noteWrite => {
            noteWrite.onkeyup = function () {
                updateStorage();
            }
        });
    }
})

//event to delete all notes from storage
deleteNotes.addEventListener("click", () => {
    localStorage.clear();
    DisplayAllNotes();
})
//event to prevent any action when user press enter key
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        event.preventDefault();
    }
})




