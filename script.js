"use strict";

const onChangeHandler = (e) => {
  const taskToAdd = e.target.value;
  localStorage.setItem("inputValue", taskToAdd);
};

const onClickHandler = () => {
  const section = document.querySelector("section");
  const addInput = document.querySelector("#addInput");
  const taskList = document.querySelector("#taskList");
  const taskContent = addInput.value;
  if (taskContent !== "") {
    const newTaskBox = document.createElement("span");
    newTaskBox.className = "newTaskBox";

    const newTask = document.createElement("p");
    newTask.textContent = taskContent;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "ⓧ";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function () {
      taskList.removeChild(newTaskBox);
    };

    //  newTask.appendChild(deleteBtn);
    newTaskBox.append(newTask, deleteBtn);
    taskList.appendChild(newTaskBox);
    section.appendChild(taskList);
    addInput.value = "";
  }
};
