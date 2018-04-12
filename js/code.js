
var btnCode = $('#btnCode');
var code = $('#code');

btnCode.on('click', validCode);
code.on('keyup', validCodeOn)


 function validCode(event) {
   event.preventDefault();

}
   
  function validCodeOn() {

    data.map(function (element) {
      console.log(element.codigo)
    debugger
      if(code.val() == element.codigo) {
        alert('codigo correcto');
        // $boton.removeClass('disabled');

      }
     
    });

  }

   
