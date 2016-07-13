describe('Insert Note', function() {

  before(function() {    
    casper.start('http://localhost:8080/')
  })

  it('deve ter o title Ceep', function() {
    casper.then(function() {
      'Ceep'.should.matchTitle
    }) 
  })  

  it('deve ter uma textarea', function() {  
    casper.then(function() {
      '.insereNovaNota-campo'.should.be.inDOM.and.be.visible
    })
  })  
  
  describe('Test insert new note', function(){
    before(function(){
      casper.sendKeys('textarea', 'aaa')  
    })

    it('deve adicionar uma nova nota', function() {
      casper.click('.insereNovaNota-envia')
      expect('.nota-conteudo').to.have.text('aaa')
    }) 

   it('deve remover a nota', function() {
     casper.click('.button-remove')
     ".mural".should.not.have.tagName('button')
   })
    
  })

})
