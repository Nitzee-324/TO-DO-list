const inputBox = document.getElementById("input_box");
const taskContainer = document.getElementById("task_container");
 function addtask(){
    if (inputBox.value== ""){
        alert("You must write something ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        taskContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    recover();
 }
 taskContainer.addEventListener("click", function(e)
 {
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        recover();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        recover();

    }
 },false);

 function recover(){
    localStorage.setItem("data",taskContainer.innerHTML);
 }

 function show(){
    taskContainer.innerHTML= localStorage.getItem("data");
 }
 show();