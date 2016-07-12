var campo = document.querySelector('.insereNovaNota-campo')
var mural = document.querySelector('.mural')

if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  String.prototype.trim = function() {
    return this.replace(rtrim, '');
  };
  })();
}

document.querySelector('.insereNovaNota').addEventListener('submit', function (event) {
  var conteudo = campo.value
  var campoTest = conteudo.trim()
  if (campoTest.length == 0) {
    event.preventDefault()
    campo.value = ''
    return
  }
  nota = document.createElement('div')
  nota.classList.add('nota')

  var menu = document.createElement('div')
  var botaoRemove = document.createElement('button')
  botaoRemove.textContent = 'Remove'
  botaoRemove.addEventListener('click', function () {
      nota.classList.add('nota--sumindo')
      setTimeout(function () {
            nota.remove()
          }, 15000)
    })
  menu.appendChild(botaoRemove)
  nota.appendChild(menu)

  var notaConteudo = document.createElement('p')
  notaConteudo.classList.add('nota-conteudo')
  notaConteudo.textContent = conteudo

  nota.appendChild(notaConteudo)

  mural.appendChild(nota)


  campo.value = ''
  event.preventDefault()
})

function createNote(nota){
 
}



(function insertNewNote(){
})

