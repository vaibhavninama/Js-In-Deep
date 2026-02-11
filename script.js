let cards = JSON.parse(localStorage.getItem('cards')||[])

function saveCards(){
    localStorage.setItem('cards',JSON.stringify(cards))
}  

let Nav =document.querySelector('nav')
let sections =document.querySelector('section')
 let inputvalue = document.querySelector('.inputvalue')

 function rendeCards(){
      sections.innerHTML=''
    
      cards.forEach(card => {
         let div =document.createElement('div')
         div.className='Card'
         div.dataset.id= card.id
           let h1 =document.createElement('h1')
           h1.innerHTML= card.text
        let btn =document.createElement("button")
        btn.innerHTML='Delete' 
         
        sections.appendChild(div)
        div.appendChild(h1)
        div.appendChild(btn)
        
      });
     
 }

 rendeCards()

Nav.addEventListener('click',function(e){

   if(e.target.tagName==='BUTTON' && inputvalue.value.trim() ){
   
    let NewCard ={
        id:Date.now(),
        text:inputvalue.value
      }
    
     let div =document.createElement('div')
    div.className='Card'
      div.dataset.id =NewCard.id
   
    let h1 =document.createElement('h1')
    
      h1.innerHTML=inputvalue.value
      let btn =document.createElement("button")
      btn.innerHTML='Delete'
    
    

    sections.appendChild(div)
    div.appendChild(h1)
    div.append(btn)

      
      
    cards.push(NewCard)
      saveCards()

   }
    inputvalue.value=''
})

sections.addEventListener('click', function (e) {
   
      let card =e.target.closest(".Card")
      if(!card) return
    sections.querySelectorAll('.Card').forEach(function(c){
  c.classList.remove('Active')
})

card.classList.add('Active')

      
    
    
    if(e.target.tagName==="BUTTON"){ 

        let cardDiv= e.target.closest('.Card')
         let id =Number(cardDiv.dataset.id)

      cards = cards.filter(function(card){return  card.id !==id})

    saveCards()
    rendeCards()
    }
  if (e.target.tagName === 'H1') {

  let h1 = e.target
  let cardDiv = h1.closest('.Card')
  let id = Number(cardDiv.dataset.id)

  h1.style.display = 'none'

  let input = document.createElement('input')
  input.type = 'text'
  input.value = h1.innerText

  cardDiv.appendChild(input)
  

  input.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

      let newText = input.value.trim()
      if (!newText) return

    
      cards = cards.map(card =>
        card.id === id ? { ...card, text: newText } : card
      )

      saveCards()
      rendeCards()
    }

  })

}

    
   
})



