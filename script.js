//select element
const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

//page load hote hi save task show kro
showTask();

//Add task function
function addTask() {
    const task =inputBox.value.trim();  //remove extra space

    if (task===""){
        alert("please write something");
        return;
}
//create list item
    let li = document.createElement("li");
    li.innerHTML =task;

// create delet button
    let deletbtn = document.createElement("span");
    deletbtn.innerHTML="\u00d7";// * symbol
    deletbtn.classList.add("delet-btn");

    li.appendChild(deletbtn);
    listContainer.appendChild(li);

//clear input
    inputBox.value ="";

 // save to local storage
    saveTask();

}
//handle click events (delet +complete task)
listContainer.addEventListener("click",function(e){

    if (e.target.tagName ==="LI"){

e.target.classList.toggle("checked");//mark complete
    saveTask();

 } else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove(); // delet task 

    saveTask();
    }
} , false);

//save task to loacal storage 
function saveTask(){
    localStorage.setItem("task",listContainer.innerHTML);
}

//show task from local storage
function showTask(){
    listContainer.innerHTML= localStorage.getItem("tasks")||"";
}