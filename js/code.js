var btnCode = $('#btnCode');
var btnEnviarForm = $('#btnEnviarForm');

var provider = $('#provider');
var category = $('#category');
var quantity = $('#quantity');
var code = $('#code');

$('#informCode').html(localStorage.code);

btnCode.on('click', validCode);

code.on('keyup', validCodeOn)
btnEnviarForm.on('click', submitForm);

function validCode(event) {
  event.preventDefault();
  window.location.href = 'informe.html'
}
   
  function validCodeOn() {
    data.map(function (element) {
    
      if(code.val() == element.codigo) {
        localStorage.code = code.val()
        localStorage.state = element.estado;
        console.log(localStorage.code)
        
        btnCode.removeClass('disabled');      

      }     
    });

  }

function validCodeOn() {
  data.map(function (element) {

    if (code.val() == element.codigo) {
      localStorage.code = code.val()
      localStorage.state = element.estado;
      console.log(localStorage.code)
      btnCode.removeClass('disabled');

    }
  });

}

function submitForm(event) {
  event.preventDefault();

  var nombre = provider.val();
  var mensaje = category.val();

  data.map(function (element) {
    if (localStorage.code == element.codigo && provider.val() == element.proveedor && category.val() == element.categoría && quantity.val() == element.cantidad) {

      alert('datos correctos, espere un  momento')
      window.location.href = 'finish.html'

      localStorage.provider = provider.val();
      localStorage.category = category.val();
      localStorage.quantity = quantity.val();
      console.log(localStorage.provider);
      console.log(localStorage.category);
      console.log(localStorage.quantity);

    }
  });
}