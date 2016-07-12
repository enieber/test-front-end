 document.querySelector('.cabecalhoPrincipal-busca')
     .addEventListener('input', function (event) {
         var input = event.target
         var cartoes = document.querySelectorAll('.nota')
     
         var listFiltrada = []
     
         Array.prototype.forEach.call(cartoes, function (cartao) {
               listFiltrada.push(cartao)
               cartao.style.display = 'none'
             })
     
         listFiltrada = listFiltrada.filter(function (nota) {
               return nota.querySelector('.nota-conteudo').textContent.match(
                       new RegExp('.*' + input.value + '.*')
                     )
             })
     
         listFiltrada.forEach(function (nota) {
               nota.style.display = 'inline-block';
             })
     
     })
