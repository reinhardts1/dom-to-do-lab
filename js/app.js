const input = document.getElementById('chores')
const btn = document.getElementById('submit button')
const ul = document.getElementById('todo-list')



btn.addEventListener('click', function(evt) {
  //create li element
const li = document.createElement('li')


  //access the text from the input

  //store the text in the li element

  li.textContent = input.value
  console.log(li);
  //add the <li> (with the text included) to HTML (in the <ul>)

  document.querySelector('ul').appendChild(li)
  input.value = ''
})


document.querySelector('ul').addEventListener('click', handleClick)

function handleClick(evt) {
  evt.target.style.color ="red"
  console.log(evt)
}