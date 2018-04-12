
var btnCode = $('#btnCode');
var code = $('#code');

btnCode.on('click', validCode);
code.on('keyup', validCodeOn)


 function validCode(event) {
   event.preventDefault();
   window.location.href = 'informe.html'
}
   
  function validCodeOn() {

    data.map(function (element) {
      console.log(element.codigo)
    debugger
      if(code.val() == element.codigo) {
        btnCode.removeClass('disabled');

        

      }
     
    });

  }

   
