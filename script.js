/// frisrt local affter add this code   imp


// let container =document.querySelector("#container")

 
// container.addEventListener('click',function(e){
//    let curantclick=`${e.target.innerText} clicked` 
//   if(e.target.tagName==='BUTTON'){
//       console.log(curantclick)
//   }
  
// })








// function createdTodo(){

//   let todos = JSON.parse(localStorage.getItem("todos")) || []

// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos))
// }

// let box =document.querySelector('.box')
// let todoTask=document.querySelector('#todoInput')
// let todoList =document.querySelector("#todoList")  


//   function renderTodos() {
//   todoList.innerHTML = ""

//   todos.forEach(todo => {
//     let li = document.createElement("li")
//     li.dataset.id = todo.id

//     if (todo.completed) {
//       li.classList.add("completed")
//     }

//     li.innerHTML = `
//       <span>${todo.text}</span>
//       <button>Delete</button>
//     `

//     todoList.appendChild(li)
//   })
// }

// renderTodos()



// box.addEventListener('click',function(e){
//     if(e.target.tagName==="BUTTON" && todoTask.value.trim()){
//      console.log(todoTask.value)
//      const newLi = document.createElement('li')
//      const newspna =document.createElement('span')
//      newspna.innerHTML= todoTask.value
//      const newBtn =document.createElement('button')
//      newBtn.innerHTML='Delete'

//      todoList.appendChild(newLi)
//      newLi.appendChild(newspna)
//      newLi.appendChild(newBtn)
      
//      let newTodo = {
//     id: Date.now(),
//     text: todoTask.value,
//     completed: false
//   }

//     todos.push(newTodo)
    
//      saveTodos()
//     renderTodos()
    

//     } 
//     todoTask.value = ""
// })




// todoList.addEventListener("click", function (e) {
//   let li = e.target.closest("li")
//   if (!li) return

//   let id = Number(li.dataset.id)

//   // DELETE
//   if (e.target.tagName === "BUTTON") {
//     todos = todos.filter(todo => todo.id !== id)
//   }

//   // TOGGLE COMPLETE
//   if (e.target.tagName === "SPAN") {
//     todos = todos.map(todo =>
//       todo.id === id
//         ? { ...todo, completed: !todo.completed }
//         : todo
//     )
//   }

//   saveTodos()
//   renderTodos()
// })
// }
// createdTodo()

let todos = JSON.parse(localStorage.getItem('todos') ) || []
function saveTodos(){
  localStorage.setItem('todos',JSON.stringify(todos))
}

let box =document.querySelector('.box')
let inputtodo =document.querySelector('#todoInput')
let todoList =document.querySelector('#todoList')


function renderTodos(){
  todoList.innerHTML=''
  todos.forEach(function(todo){
     let li =document.createElement('li')
     li.dataset.id=todo.id
    
     li.innerHTML= 
     `<span>${todo.text} </sapm>
       <button>Delete</button>
     `
   todoList.appendChild(li)

  })
}
renderTodos()

box.addEventListener('click',function(e){
  // if(e.target.tegName==="BUTTON"){
  
  if(e.target.tagName=='BUTTON'&& inputtodo.value.trim()){
    console.log(inputtodo.value)
    let li =document.createElement('li')
    let span =document.createElement('span')
    span.innerHTML=inputtodo.value
    let btn =document.createElement('button')
        btn.innerHTML="Delete"    

    todoList.appendChild(li)
    li.appendChild(span)
    li.appendChild(btn)
 
    let newtodo = {
    id:Date.now(),
    text:inputtodo.value,
    completed:false
   }
    todos.push(newtodo)
    saveTodos()
    renderTodos()

  }
  
  inputtodo.value=''
  // }
})

todoList.addEventListener("click",function(e){
 let li =e.target.closest('li')
 if(!li) return
 let id =Number(li.dataset.id)
  console.log(id)
 if(e.target.tagName==="BUTTON"){
  todos=todos.filter(function(todo){ return todo.id !==id})   

 }
   saveTodos()
  renderTodos()
})
