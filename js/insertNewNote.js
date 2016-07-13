'use strict'

var buttonNewNote = document.querySelector('.insereNovaNota')
 
function insertNewNote(buttonNewNote) {
  buttonNewNote.addEventListener('submit', function (event) {
    var textArea = document.querySelector('.insereNovaNota-campo')
    var mural = document.querySelector('.mural')
    var content = textArea.value.trim()

    if (content.length == 0) {
      event.preventDefault()
      textArea.value = ''
      return
    }
    
    var note = createNote(content)
    mural.appendChild(note) 
    textArea.value = ''
    event.preventDefault()
  })
}

function createNote(content){
  var note = document.createElement('div')
  var buttonRemove = document.createElement('button')
  var noteContent = document.createElement('p')

  //create Note
  note.classList.add('nota')
  noteContent.classList.add('nota-conteudo')
  noteContent.textContent = content
  note.appendChild(noteContent)

  //create buttonRemove
  buttonRemove.setAttribute('class', 'button-remove')
  buttonRemove.textContent = 'Remove'

  //add button in note
  note.appendChild(buttonRemove)

  //add linstener in button
  buttonRemove.addEventListener('click', function () {
    note.classList.add('nota--sumindo')
    note.remove()
  })
    
  return note 
}

insertNewNote(buttonNewNote)
