let taskButton = document.querySelector("#addTask");
let input = document.querySelector("#task");
let inputValue = input.value;
let taskContainer = document.querySelector(".Alltasks");


taskButton.onclick = function Add(){
    if(input.value == 0){
        alert("Please enter a Task");
    }else{
        //-----Elements Creation-----
        let taskDiv = document.createElement("div");
        let paragraph = document.createElement("p");
        let delButton = document.createElement("button");
        delButton.innerText = 'Delete';
        //-------Append Child------------
        taskContainer.appendChild(taskDiv);
        taskDiv.appendChild(paragraph);
        taskDiv.appendChild(delButton);
        paragraph.innerText = input.value;
        taskDiv.classList.add("newTask");
        delButton.classList.add("delbtn");

        input.value = "";
        //------------------------delete task---------
        delButton.onclick =  deleteTask=()=>{
            taskDiv.remove();
        } 
    } 
}