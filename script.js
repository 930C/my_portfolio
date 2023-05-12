console.log("Test")

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM CONTENT LOADED")
})

function addToList() {
    var inputValue = document.getElementById("myText").value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById("hobbies_list").appendChild(li);
}