//--------accessing elements-----

let taskButton = document.querySelector("#addTask");
let input = document.querySelector("#task");
let inputValue = input.value;
let taskContainer = document.querySelector(".Alltasks");
let completedTasksdiv = document.querySelector(".completedTask")

//-----------adding new task-------------------------

taskButton.onclick = function Add(){
    if(input.value == 0){
        alert("Please enter a Task");
    }else{
    //-----------Elements Creation--------------------
        let taskDiv = document.createElement("div");
        let paragraph = document.createElement("p");
        let buttonDiv = document.createElement("div");
        let delButton = document.createElement("button");
        delButton.innerText = 'Delete';
        let completeTaskbtn = document.createElement("button");
        completeTaskbtn.innerText = 'Complete';

    //-------------------Append Child-----------------

        taskContainer.appendChild(taskDiv);
        taskDiv.appendChild(paragraph);
        taskDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(completeTaskbtn);
        buttonDiv.appendChild(delButton);
        paragraph.innerText = input.value;
        taskDiv.classList.add("newTask");
        buttonDiv.classList.add("btnsdiv");
        delButton.classList.add("delbtn");
        completeTaskbtn.classList.add("completebtn");
        input.value = "";
    //------------------------delete task-------------
    
        delButton.onclick =  deleteTask=()=>{
            taskDiv.remove();
        } 
    //------------------------complete task-----------

        completeTaskbtn.onclick = taskcompleted=()=>{
            completeTaskbtn.innerText = 'Completed';
            completeTaskbtn.style.backgroundColor = "green";
            completeTaskbtn.disabled = true;
            taskDiv.remove();
            completedTasksdiv.appendChild(taskDiv);
        }
    } 
}