const form = document.querySelector("form");
const inputTask = document.querySelector("#task");
const listTask = document.querySelector(".list-group");
const clearTask = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListener();

function loadEventListener() {
  document.addEventListener("DOMContentLoaded", getTaskToLocalStorage);
  form.addEventListener("submit", addTask);
  listTask.addEventListener("click", removeItem);
  clearTask.addEventListener("click", clearUl);
  filter.addEventListener("keyup", filtering);
}

function getTaskToLocalStorage() {
  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("task"));
  }
  tasks.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.appendChild(document.createTextNode(item));
    const i = document.createElement("i");
    i.className = "fas fa-times text-danger mr-auto delete-item";
    li.appendChild(i);
    listTask.appendChild(li);
  });
}

function addTask(e) {
  if (inputTask.value === "") {
    alert("مقدار تسک را وارد کنید...");
  } else {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.appendChild(document.createTextNode(inputTask.value));
    const i = document.createElement("i");
    i.className = "fas fa-times text-danger mr-auto delete-item";
    li.appendChild(i);
    listTask.appendChild(li);
  }

  storeTaskInLocalStorage(inputTask.value);

  inputTask.value = "";
  e.preventDefault();
}

function storeTaskInLocalStorage(e) {
  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("task"));
  }
  tasks.push(e);

  localStorage.setItem("task", JSON.stringify(tasks));
}

function removeItem(e) {
  if (e.target.classList.contains("delete-item")) {
    if (confirm("آیا مطمئنید ایتم را پاک کنید؟")) {
      e.target.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(e) {
  let tasks;
  if (localStorage.getItem("task") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("task"));
  }

  tasks.forEach(function (text, index) {
    if (e.textContent === text) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("task", JSON.stringify(tasks));
}

function clearUl(e) {
  if (confirm("همشون حذف بشن؟")) {
    listTask.innerHTML = "";
    clearAllLocalStorage();
  }
}

function clearAllLocalStorage() {
  localStorage.clear();
}

function filtering(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".list-group-item").forEach(function (task) {
    const valLi = task.textContent;

    if (valLi.toLocaleLowerCase().indexOf(text) != -1) {
      task.classList.add("d-flex");
    } else {
      task.classList.remove("d-flex");
      task.style.display = "none";
    }
  });
}

// // Define UI Vars
// const form = document.querySelector('#task-form');
// const taskInput = document.querySelector('#task');
// const filter = document.querySelector('#filter');
// const taskList = document.querySelector('.list-group');
// const clearBtn = document.querySelector('.clear-tasks');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {

//   // Add task event
//   form.addEventListener('submit', addTask);

//   // Remove task event
//   taskList.addEventListener('click', removeTask);

// }

// // Add task
// function addTask(e) {
//   if (taskInput.value === '') {
//     alert('برای افزودن تسک در ابتدا تسک را وارد کنید');
//   } else {
//     // Create li element
//     const li = document.createElement('li');
//     // Add class
//     li.className = 'list-group-item d-flex align-items-center';
//     // Create text node and append to li
//     li.appendChild(document.createTextNode(taskInput.value));
//     // Create i element
//     const i = document.createElement('i');
//     // Add class
//     i.className = 'fas fa-times text-danger mr-auto delete-item';
//     // Append the i to li
//     li.appendChild(i);

//     // Append li to ul
//     taskList.appendChild(li);

//     // Clear input
//     taskInput.value = '';

//     e.preventDefault();

//   }

// }

// // Remove task
// function removeTask(e) {

//   if (e.target.classList.contains('delete-item')) {
//     if (confirm('آيا مطمن هستی برای حذف تسک')) {
//       e.target.parentElement.remove();
//     }
//   }

// }

// const form = document.querySelector("form");
// const taskInput = document.querySelector("#task");
// const filter = document.querySelector("#filter");
// const taskList = document.querySelector(".list-group");
// const clearBtn = document.querySelector(".clear-tasks");

// loadEventListeners();

// function loadEventListeners() {
//   form.addEventListener("submit", addTask);
//   taskList.addEventListener("click",removeTask);
// }

// function addTask(e) {
//   if(taskInput.value == ''){
//     alert('مقدار تسک را وارد کنید...')
//   }else{
//     const li=document.createElement('li');
//     li.className='list-group-item d-flex align-items-center';
//     li.appendChild(document.createTextNode(taskInput.value));
//     const i=document.createElement('i');
//     i.className='fas fa-times text-danger mr-auto delete-item';
//     li.appendChild(i);
//     taskList.appendChild(li);
//   }
//   taskInput.value='';
//   e.preventDefault();
// }

// function removeTask(e){
//   if(e.target.classList.contains('delete-item')){
//     if(confirm('مطمئنی؟')){
//       e.target.parentElement.remove();
//     }
//   }
// }

// const form=window.document.querySelector('form');
// const inputTask=window.document.querySelector('#task');
// const listTask=window.document.querySelector('.list-group');

// loadEventListener()

// function loadEventListener(){
//   form.addEventListener('submit',addList);
//   listTask.addEventListener('click',removeItem);

// }

// function addList(e){
//   if(inputTask.value === ''){
//     alert('مقدار تسک را وارد کنید...')
//   }else{
//     const li=document.createElement('li');
//     li.className='list-group-item d-flex align-items-center';
//     li.appendChild(document.createTextNode(inputTask.value));
//     const i=document.createElement('i');
//     i.className='fas fa-times text-danger mr-auto delete-item';
//     li.appendChild(i);
//     listTask.appendChild(li);
//    }
//   inputTask.value="";
//   e.preventDefault();
// }

// function removeItem(e){
//   if(e.target.classList.contains('delete-item')){
//     if(confirm('آیا از پاک کردن این آیتم مطمئن هستید؟')){
//       e.target.parentElement.remove();
//     }
//   }
// }

// function filtering(e) {
//   const item=e.target.value.toLowerCase();

//   document.querySelectorAll('.list-group-item').forEach(function(task){
//       const text=task.textContent;

//       if(text.toLowerCase().indexOf(item) != -1){
//         task.classList.add('d-flex');
//       }else{
//         task.classList.remove('d-flex');
//         task.style.display='none';
//       }

//   });
// }

// function filtering(e) {
//   const text = e.target.value.toLowerCase();

//   document.querySelectorAll(".list-group-item").forEach(function (task) {
//     const textLi = task.textContent;

//     if (textLi.toLowerCase().indexOf(text) != -1) {
//       task.classList.add('d-flex');
//     }else{
//       task.classList.remove('d-flex');
//       task.style.display='none';
//     }
//   });
// }

// const person={
//   firstName:'Elina',
//   lastName:'Golmohamadi',
//   fullName:function(){
//     console.log(this.firstName+" "+this.lastName);
//   }
// }
// person.fullName();

// const person={
//   name:'Nasseh',
//   gfName:'Elina',
//   info:function(){
//     console.log(this.name+" "+this.gfName);
//   }
// }
// person.info();

// console.log(this);

// function testThis(){
//   let firstName='Nasseh';
//   let lastName='Golmohamadi';
//   console.log(this);
// }

// testThis();

// function testThis(){
//   let firstName='Elina';
//   let lastName='Meshkat';
//   console.log(this);
// }
// testThis();

// function Person(name){
//   this.age=name;
// }

// const ali=new Person('ali');
// const nader=new Person('nader');

// console.log(nader);

// function Person(firstName){
//   this.name=firstName;
// }

// const milad=new Person('Milad');

// console.log(milad);

// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;
//   this.fullName=function(){
//      return this.firstName+" "+this.lastName;}}
// const ali=new Person('Elina','Meshkat');
// console.log(ali.fullName());

// function Person(firstName){
//   this.firstName=firstName;
// }

// const name=new Person('Moein');
// const name1=new Person('Ali');

// console.log(name1);

// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;

//   this.fullName=function(){
//     return this.firstName+" "+this.lastName;
//   }
// }

// const name=new Person('Elina','Meshkat');

// console.log(name.fullName());

// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;

//   this.fullName=function(){
//     return this.firstName+' '+this.lastName;
//   }
// }

// const name=new Person('Elina','Meshkat');

// console.log(name.fullName());

// class Person{
//   constructor(name,family){
//     this.name=name;
//     this.family=family;
//   }
// }

// const name=new Person('Nasseh','Golmohamadi');

// console.log(name);

// class Person {
//   constructor(name, family) {
//     this.name = name;
//     this.family = family;
//   }
//   static getInfo(name) {
//     return name;
//   }
// }

// // const name=new Person('Mobin','Saedi');
// // console.log(name.getInfo());

// console.log(Person.getInfo("Zaibanda"));


// class Person{
//   constructor(firstName,lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
//   }
//   static getInfo(){
//     return 'Static Method'
//   }
// }

// const name=new Person('nasseh','gol');
// console.log(name.getInfo());
// console.log(Person.getInfo());



// class Age extends Person{
//   constructor(firstName,lastName,age){
//     super(firstName,lastName)
//     this.age=age;
//   }
//   getInfo(){
//     return this.firstName+' '+this.lastName+' '+this.age;
//   }
// }

// const name=new Age('Eghbal','Golmohamadi','65');
// console.log(name.getInfo());

// class Sum{
//   constructor(message){
//     this.message=message;
//   }
//   get sum(){
//     return this.message+':'+' '+(this.A+this.B)
//   }

//   set sum(parameter){
//     this.A=parameter[0];
//     this.B=parameter[1];
//   }
// }

// let sumNumbers=new Sum('sum of these Numbers');
// sumNumbers.sum=[8,8];
//console.log(sumNumbers.sum);

class Sum{
  constructor(message){
    this.message=message;
  }
  get sum(){
    return this.message+':'+' '+(this.A+this.B);
  }

  set sum(parameter){
    this.A=parameter[0];
    this.B=parameter[1];
  }
}

let sumNumbers=new Sum('Sum of Two Values');
sumNumbers.sum=[8,4];
console.log(sumNumbers.sum);

