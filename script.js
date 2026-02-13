

// let state ={
//    count: 0
// }


// function render(){
//   let count =document.querySelector(".box p")
//   count.innerHTML=state.count
 
// }
// render()

// let box =document.querySelector('.box')

// box.addEventListener('click',function(e){

//    if(e.target.tagName==="BUTTON"){
//     let btn =e.target
//     if(!btn) return

//     if(btn.innerHTML=== "Increase"){
//      Increase()

//     }
//       if(btn.innerHTML=== "Decrease"){
//       Decrease()
//     }

//       if(btn.innerHTML=== "Reset"){
//       Reset()

//     }

    


//    }

// })

// function Increase(){
//    state.count++
      
//       render()
// }
// function Decrease(){
//   state.count--
//       render()
// }
// function Reset (){
//    state.count=0

//       render()
// }



// let state = JSON.parse((localStorage.getItem('count')))|| {count:0}

// function stateSave(){
// localStorage.setItem("count",JSON.stringify(state))
// }

// function render(){
//   let app =document.querySelector("#app")
//   app.innerHTML=`
//    <h1 style=color:${
//     state.count>0 ? "green" :
//     state.count<0 ? "red" :"black"
//    }>
//    ${state.count}
//    </h1>
//     <button data-action="inc">Inccres</button>
//    <button data-action="dec">Decreace</button>
//    <button data-action="res">Reset</button>

   
//   `
// }

// render()



// document.addEventListener("click", function(e) {
//   if (!e.target.dataset.action) return

//   if (e.target.dataset.action === "inc") {
//     setState({ count: state.count + 1 })
//   }

//   if (e.target.dataset.action === "dec") {
//     setState({ count: state.count - 1 })
//   }

//   if (e.target.dataset.action === "res") {
//     setState({ count: 0 })
//   }
// })

// render()

// function setState(newState){

// state ={...state,...newState}
// stateSave()
// render()


// }


// let state = {
//   search: "",
//   items: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"]
// }

// function setState(newstate){
//   state={...state,...newstate}
//   render()
// }

// function render(){
//   let app=document.querySelector('#app')
//   let filterItem =state.items.filter(function(item){
//    return item.toLowerCase().includes(state.search.toLowerCase())
//   })
//   app.innerHTML=`
//     <input data-active='sarech' type="text" placeholder="Enter you tagname "   value="${state.search}">
//     <ul>
//        ${filterItem.map(item => `<li>${item}</li>`).join("")}
//     </ul>
 
//   `
// }
// document.addEventListener('input',function(e){
//   if(e.target.dataset.active==='sarech'){
//     setState({search:e.target.value})
//   }
// })

// render()



// function setState(newstate){
//   state={...state,...newstate}
//   render()
// }

// function render(){
// let app =document.querySelector("#app")
// let filterItem = state.items.filter(function(item){
// return  item.toLowerCase().includes(state.search.toLowerCase())
// })
// app.innerHTML=`

// <input type="text" value="${state.search}" data-active="input" placeholder="Enter you tagname">
// <ul>
// ${filterItem.map(item =>`<li>${item}</li>`).join("")}
// </ul>
// `

// }
// document.addEventListener('input',function(e){
//   if(e.target.dataset.active==='input'){
//     setState({search:e.target.value})
//   }
// })
// render()

// let state ={
//   search: "",
//  items: ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"]
// }

// let timer =null;
// function setState(newState){
//   state={...state,...newState}
//   render()
// }
// function render(){
//   let app = document.querySelector('#app')
//   let filterItem =state.items.filter(function(item){
//     return item.toLowerCase().includes(state.search.toLowerCase())
//   })
//   app.innerHTML=`
  
//   <input type="text" data-active="input" value="${state.search}" placeholder="Enter you tagname">
//  <ul>

//  ${   
  
//   filterItem.map(function(e){
//   return `<li>${e}</li>`
//  }).join('')
// }

//  </ul>
//   `
// }

// document.addEventListener('input',function(e){
//   if(e.target.dataset.active==='input'){
//       clearTimeout(timer)
      
//  timer =   setTimeout(() => {
//     setState({search:e.target.value})
//    }, 500);
//   }
// })

// render()

let state = {
  search: "",
  filter: "all",
  sort: "az",
  items: [
    { id: 1, name: "React", completed: true },
    { id: 2, name: "JavaScript", completed: false },
    { id: 3, name: "HTML", completed: true },
    { id: 4, name: "CSS", completed: false }
  ]
}

function setState(newState){
  state = { ...state, ...newState }
  render()
}

function render(){
  let app =document.querySelector("#app")

let sareched = state.items.filter(function(item){
  return  item.name.toLowerCase().includes(state.search.toLowerCase())
})

let filter =sareched.filter((item)=>{
  if(state.filter==='all') return true
  if(state.filter==='completed') return item.completed
  if(state.filter==='pending') return !item.completed
})

 let sort = [...filter].sort((a,b)=>{
  if(state.sort==='az')return a.name.localeCompare(b.name)
  if(state.sort === 'za') return b.name.localeCompare(a.name)
 })

  app.innerHTML=`


  <input type="text" placeholder="Enter you task" value="${state.search}" data-action="search">
<select data-action="filter" >
   <option value="all"${state.filter==="all"?"selected":""}>All</option>
      <option value="completed"${state.filter==="completed"?"selected":""}>Completed</option>
      <option value="pending"${state.filter==="pending"?"selected":""}>Pending</option>

</select>
<select data-action="sort">
    <option value="az" ${state.sort==='az'?'selected':''}>A-Z</option>
      <option value="za"${state.sort==='za'?'selected':''}>Z-A</option>
</select>


<ul>
 ${sort.map(item => `
        <li> ${item.name} ${item.completed ? "✅" : "❌"} </li>
      `).join("")}
</ul>
  
  `



}
render()

document.addEventListener('input',function(item){
  if(item.target.dataset.action==='search'){
    setState({search:item.target.value})
  }
})

document.addEventListener('change', function(item){
   if(item.target.dataset.action==='filter'){
    setState({filter: item.target.value})
   }
   if(item.target.dataset.action==='sort'){
    setState({sort:item.target.value})
   }
})

